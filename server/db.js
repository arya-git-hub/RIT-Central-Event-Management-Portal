require('dotenv').config();
const rawConnectionString = process.env.DATABASE_URL || process.env.MONGODB_URI;
const connectionString = rawConnectionString
	? rawConnectionString.trim().replace(/^(["'])(.*)\1$/, '$2').trim()
	: '';
let databaseConfigurationError = '';
if (connectionString) {
	try {
		const databaseUrl = new URL(connectionString);
		if (!['mongodb:', 'mongodb+srv:'].includes(databaseUrl.protocol) || !databaseUrl.hostname) {
			throw new Error('Unsupported MongoDB connection string.');
		}
		// Prisma's MongoDB connector needs a database name even when Atlas omits it from the URI.
		if (!databaseUrl.pathname || databaseUrl.pathname === '/') {
			databaseUrl.pathname = '/rit_central_event_portal';
		}
		process.env.DATABASE_URL = databaseUrl.toString();
	} catch {
		databaseConfigurationError = 'Invalid DATABASE_URL or MONGODB_URI. Set a mongodb:// or mongodb+srv:// connection string and URL-encode reserved characters in credentials.';
		console.error('Invalid MongoDB connection URI configuration. Connection details were not logged.');
	}
} else {
	databaseConfigurationError = 'DATABASE_URL or MONGODB_URI is not configured.';
}
process.env.DATABASE_CONFIGURATION_ERROR = databaseConfigurationError;
const { PrismaClient } = require('./generated/prisma');

const basePrisma = new PrismaClient();
const numericIdModels = ['Department', 'User', 'Event', 'Registration', 'AuditLog', 'Notification', 'VisitorStat'];

async function reserveId(model) {
	try {
		const counter = await basePrisma.counter.upsert({
			where: { name: model },
			create: { name: model, value: 1 },
			update: { value: { increment: 1 } }
		});
		return counter.value;
	} catch (error) {
		// Two first-time inserts can race to create the same counter document.
		if (error.code !== 'P2002') throw error;
		const counter = await basePrisma.counter.update({
			where: { name: model },
			data: { value: { increment: 1 } }
		});
		return counter.value;
	}
}

async function syncCounter(model, id) {
	const current = await basePrisma.counter.findUnique({ where: { name: model } });
	if (!current) {
		try {
			await basePrisma.counter.create({ data: { name: model, value: id } });
		} catch (error) {
			if (error.code !== 'P2002') throw error;
		}
		return;
	}

	if (current.value < id) {
		await basePrisma.counter.update({ where: { name: model }, data: { value: id } });
	}
}

async function initializeSequences() {
	for (const model of numericIdModels) {
		const delegate = basePrisma[model[0].toLowerCase() + model.slice(1)];
		const latest = await delegate.findFirst({
			orderBy: { id: 'desc' },
			select: { id: true }
		});
		if (latest) await syncCounter(model, latest.id);
	}
}

const prisma = basePrisma.$extends({
	query: {
		$allModels: {
			async $allOperations({ model, operation, args, query }) {
				if (!numericIdModels.includes(model) || !['create', 'createMany'].includes(operation)) {
					return query(args);
				}

				if (operation === 'createMany') {
					const records = Array.isArray(args.data) ? args.data : [args.data];
					for (const record of records) {
						if (record.id === undefined) record.id = await reserveId(model);
						else await syncCounter(model, record.id);
					}
				} else if (args.data.id === undefined) {
					args.data.id = await reserveId(model);
				} else {
					await syncCounter(model, args.data.id);
				}

				return query(args);
			}
		}
	},
	client: {
		initializeSequences
	}
});

module.exports = prisma;
