
let departments = [
    { id: 1, name: 'Computer Science Engineering', code: 'CSE', banner_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80', description: 'Department of Computer Science Engineering at RIT focuses on high-quality technical education, algorithmic thinking, software engineering, and innovative project-based learning.' },
    { id: 2, name: 'Artificial Intelligence & Machine Learning', code: 'AIML', banner_image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=1200&auto=format&fit=crop&q=80', description: 'The AIML department aims to equip students with core intelligence technologies, data analysis models, deep learning networks, and advanced automation skills.' },
    { id: 3, name: 'Mechanical Engineering', code: 'MECH', banner_image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80', description: 'One of the foundation departments of RIT, focusing on thermodynamics, machine design, CAD/CAM, and automotive systems.' },
    { id: 4, name: 'Civil Engineering', code: 'CIVIL', banner_image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1200&auto=format&fit=crop&q=80', description: 'Focuses on structural design, environmental engineering, surveying, and building modern architectural infrastructures.' },
    { id: 5, name: 'Electrical Engineering', code: 'ELECTRICAL', banner_image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80', description: 'Provides engineering expertise in power systems, electrical machines, smart grids, and clean renewable energy solutions.' },
    { id: 6, name: 'Computer Science & Information Technology', code: 'CSIT', banner_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80', description: 'Focuses on computing infrastructure, software development, data communication, and modern information systems.' }
];

let users = [
    { id: 1, username: 'superadmin', password: 'admin123', department_id: null, role: 'super_admin', full_name: 'RIT Principal / Central Admin' },
    { id: 2, username: 'cseadmin', password: 'cse123', department_id: 1, role: 'dept_admin', full_name: 'Prof. Amit Patil (CSE Head)' },
    { id: 3, username: 'aimladmin', password: 'aiml123', department_id: 2, role: 'dept_admin', full_name: 'Dr. Snehal Shinde (AIML Coordinator)' },
    { id: 4, username: 'mechadmin', password: 'mech123', department_id: 3, role: 'dept_admin', full_name: 'Prof. Vikram Mane (Mech Head)' }
];

let events = [
    {
        id: 1,
        title: 'Hack-O-Fiesta 2026',
        description: 'A 24-hour national-level hackathon for engineering students to build innovative software solutions addressing real-world problems in Healthcare, FinTech, and Smart Cities.',
        department_id: 1,
        academic_year: '2025-26',
        category: 'Technical',
        event_date: '2026-10-15',
        event_time: '09:00:00',
        venue: 'RIT CSE Lab Center',
        registration_deadline: '2026-10-10',
        registration_link: 'https://forms.gle/demo-hackathon',
        payment_qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RIT-CSE-PAY',
        fees: 'Rs. 100 per team',
        faculty_coordinator: 'Prof. Amit Patil',
        student_coordinator: 'Rajesh Kulkarni',
        contact_1: '9876543210',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 2,
        title: 'CodeQuest - Coding Contest',
        description: 'Test your data structures and algorithms (DSA) skills! Solve complex coding puzzles under tight time constraints. Language support: C++, Java, Python.',
        department_id: 1,
        academic_year: '2025-26',
        category: 'Technical',
        event_date: '2026-08-20',
        event_time: '14:00:00',
        venue: 'Online (HackerRank Platform)',
        registration_deadline: '2026-08-18',
        registration_link: 'https://hackerrank.com/rit-codequest',
        payment_qr: '',
        fees: 'Free',
        faculty_coordinator: 'Mrs. Priya Deshmukh',
        student_coordinator: 'Simran Shaikh',
        contact_1: '8765432109',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 3,
        title: 'Java Programming Workshop',
        description: 'Hands-on beginner training program covering Object Oriented Programming (OOP), interfaces, collections framework, and multi-threading.',
        department_id: 1,
        academic_year: '2024-25',
        category: 'Technical',
        event_date: '2024-09-12',
        event_time: '10:00:00',
        venue: 'CSE Seminar Hall',
        registration_deadline: '2024-09-10',
        registration_link: 'https://forms.gle/java-workshop',
        payment_qr: '',
        fees: 'Free',
        faculty_coordinator: 'Prof. Amit Patil',
        student_coordinator: 'Ameya Joshi',
        contact_1: '9988776655',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 4,
        title: 'Neural Network Masterclass',
        description: 'A seminar on building artificial neural networks from scratch. Learn about feedforward networks, backpropagation, and training with gradient descent.',
        department_id: 2,
        academic_year: '2025-26',
        category: 'Technical',
        event_date: '2026-09-05',
        event_time: '10:30:00',
        venue: 'RIT Central Auditorium',
        registration_deadline: '2026-09-02',
        registration_link: 'https://forms.gle/neural-masterclass',
        payment_qr: 'qr_code.png',
        fees: 'Rs. 50',
        faculty_coordinator: 'Dr. Snehal Shinde',
        student_coordinator: 'Nikhil Kadam',
        contact_1: '7654321098',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 5,
        title: 'AI Movie Night & Discussion',
        description: 'Screening of classic AI sci-fi films followed by a critical academic panel discussion on the ethical, societal, and technological implications of Artificial General Intelligence.',
        department_id: 2,
        academic_year: '2024-25',
        category: 'Non Technical',
        event_date: '2025-01-20',
        event_time: '17:00:00',
        venue: 'Mechanical Seminar Hall',
        registration_deadline: '2025-01-18',
        registration_link: 'https://forms.gle/ai-movie',
        payment_qr: '',
        fees: 'Free',
        faculty_coordinator: 'Dr. Snehal Shinde',
        student_coordinator: 'Neha Patil',
        contact_1: '9123456789',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 6,
        title: 'CAD-O-MANIA 3D Design',
        description: 'Create computer-aided designs (CAD) of functional machine prototypes under a specific design constraint. Software allowed: AutoCAD, SolidWorks, CATIA.',
        department_id: 3,
        academic_year: '2025-26',
        category: 'Technical',
        event_date: '2026-11-10',
        event_time: '09:00:00',
        venue: 'CAD Lab',
        registration_deadline: '2026-11-05',
        registration_link: 'https://forms.gle/cad-mania',
        payment_qr: '',
        fees: 'Rs. 150 per team',
        faculty_coordinator: 'Prof. Vikram Mane',
        student_coordinator: 'Harshal Bhosale',
        contact_1: '8888999900',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 7,
        title: 'RIT Go-Kart Championship',
        description: 'A premier racing event showing custom-built fuel and electric go-karts. Teams present their vehicle design, fuel efficiency, and structural safety parameters.',
        department_id: 3,
        academic_year: '2023-24',
        category: 'Technical',
        event_date: '2024-02-15',
        event_time: '08:00:00',
        venue: 'RIT Sports Ground Track',
        registration_deadline: '2024-02-01',
        registration_link: 'https://forms.gle/gokart',
        payment_qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RIT-MECH-PAY',
        fees: 'Rs. 1000 per team',
        faculty_coordinator: 'Prof. Vikram Mane',
        student_coordinator: 'Saurabh Pawar',
        contact_1: '9090909090',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    },
    {
        id: 8,
        title: 'Concrete Cube Strength Test',
        description: 'A competition testing structural mechanics. Design concrete cubes to achieve maximum load-bearing strength with minimal materials.',
        department_id: 4,
        academic_year: '2024-25',
        category: 'Technical',
        event_date: '2025-03-02',
        event_time: '11:00:00',
        venue: 'Concrete Tech Lab',
        registration_deadline: '2025-02-28',
        registration_link: 'https://forms.gle/civil-test',
        payment_qr: '',
        fees: 'Free',
        faculty_coordinator: 'Prof. Sunil Naik',
        student_coordinator: 'Aniket Yadav',
        contact_1: '7778889990',
        contact_2: '',
        contact_3: '',
        poster_image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&auto=format&fit=crop&q=60',
        status: 'Published'
    }
];

let nextEventId = 9;

const appState = {
    activeView: 'home',
    params: {},
    user: null,
    darkMode: false,
    heroIndex: 0,
    heroInterval: null
};


function navigateTo(viewName, params = {}) {
    appState.activeView = viewName;
    appState.params = params;

    if (viewName !== 'home' && appState.heroInterval) {
        clearInterval(appState.heroInterval);
        appState.heroInterval = null;
    }

    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });

    const targetSection = document.getElementById(`${viewName}-view`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    if (viewName === 'home') {
        document.getElementById('nav-home').classList.add('active');
    } else if (viewName === 'dashboard') {
        document.getElementById('nav-dashboard').classList.add('active');
    } else if (viewName === 'login') {
        document.getElementById('nav-login').classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (viewName) {
        case 'home':
            loadHomeView();
            break;
        case 'department':
            loadDepartmentView(params.id);
            break;
        case 'event-details':
            loadEventDetailsView(params.id);
            break;
        case 'login':
            document.getElementById('login-error').classList.add('hidden');
            break;
        case 'dashboard':
            loadDashboardView();
            break;
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function loadHomeView() {
    renderStatsSection();
    renderDeptFilterDropdown();
    renderUpcomingEventsGrid();
    renderDepartmentsGrid();
    renderHeroSlider();

    document.getElementById('filter-dept').onchange = filterEvents;
    document.getElementById('filter-year').onchange = filterEvents;
    document.getElementById('filter-category').onchange = filterEvents;
    document.getElementById('search-input').oninput = filterEvents;
}

function renderStatsSection() {
    const currentDate = new Date().toISOString().slice(0, 10);
    const total = events.length;
    const upcoming = events.filter(e => e.event_date >= currentDate).length;
    const completed = total - upcoming;

    document.getElementById('stat-depts').innerText = departments.length;
    document.getElementById('stat-events').innerText = total;
    document.getElementById('stat-upcoming').innerText = upcoming;
    document.getElementById('stat-completed').innerText = completed;
}

function renderDeptFilterDropdown() {
    const select = document.getElementById('filter-dept');
    select.innerHTML = '<option value="">All Departments</option>';
    departments.forEach(d => {
        const option = document.createElement('option');
        option.value = d.id;
        option.innerText = d.name;
        select.appendChild(option);
    });
}

function renderUpcomingEventsGrid(filteredList = null) {
    const grid = document.getElementById('upcoming-events-grid');
    const listToRender = filteredList || events;
    const currentDate = new Date().toISOString().slice(0, 10);

    const upcomingList = listToRender.filter(e => e.event_date >= currentDate);

    if (upcomingList.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; padding: 3rem; text-align: center; background-color: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color)">
                <p style="color: var(--text-secondary)">No upcoming events scheduled at this moment.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = '';
    upcomingList.forEach(event => {
        const dept = departments.find(d => d.id === event.department_id);
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${event.poster_image}" alt="${event.title}" class="card-img">
                <span class="card-badge">${event.category}</span>
                <span class="card-dept">${dept ? dept.code : 'RIT'}</span>
            </div>
            <div class="card-body">
                <span class="card-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    ${new Date(event.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-desc">${event.description}</p>
                <div class="card-meta">
                    <span class="card-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        ${event.venue}
                    </span>
                    <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem; cursor: default;">
                        View Details
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderDepartmentsGrid() {
    const grid = document.getElementById('dept-grid');
    grid.innerHTML = '';
    departments.forEach(dept => {
        const count = events.filter(e => e.department_id === dept.id).length;
        const card = document.createElement('div');
        card.className = 'dept-card';
        card.onclick = () => navigateTo('department', { id: dept.id });
        card.innerHTML = `
            <h3>${dept.code}</h3>
            <p>${dept.name}</p>
            <div class="dept-count-badge">
                ${count} Published Events
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 2px;"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderHeroSlider() {
    const slider = document.getElementById('hero-slider');
    const heroList = events.filter(e => e.poster_image).slice(0, 3);

    if (heroList.length === 0) {
        slider.style.display = 'none';
        return;
    }
    slider.style.display = 'flex';

    const updateHeroDOM = () => {
        const item = heroList[appState.heroIndex];
        slider.innerHTML = `
            <div class="hero-bg" style="background-image: url('${item.poster_image}')"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <span class="hero-badge">Featured College Event</span>
                <h2>${item.title}</h2>
                <p style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${item.description}
                </p>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-primary" id="hero-btn-action">
                        Learn & Register Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white; margin-left: 2px;"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                </div>
                <div style="display: flex; gap: 0.5rem; margin-top: 2rem;">
                    ${heroList.map((_, idx) => `
                        <span class="hero-dot ${idx === appState.heroIndex ? 'active' : ''}" data-idx="${idx}" style="display: block; width: ${idx === appState.heroIndex ? '24px' : '8px'}; height: 8px; border-radius: 4px; background-color: ${idx === appState.heroIndex ? 'var(--accent-gold)' : 'rgba(255,255,255,0.4)'}; cursor: pointer; transition: all 0.3s ease;"></span>
                    `).join('')}
                </div>
            </div>
        `;

        document.getElementById('hero-btn-action').onclick = () => {
            navigateTo('event-details', { id: item.id });
        };

        slider.querySelectorAll('.hero-dot').forEach(dot => {
            dot.onclick = (e) => {
                appState.heroIndex = parseInt(e.target.getAttribute('data-idx'));
                updateHeroDOM();
            };
        });
    };

    appState.heroIndex = 0;
    updateHeroDOM();

    appState.heroInterval = setInterval(() => {
        appState.heroIndex = (appState.heroIndex + 1) % heroList.length;
        updateHeroDOM();
    }, 5000);
}

function filterEvents() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const deptVal = document.getElementById('filter-dept').value;
    const yearVal = document.getElementById('filter-year').value;
    const catVal = document.getElementById('filter-category').value;

    const filtered = events.filter(e => {
        const matchesSearch = searchVal === '' || 
            e.title.toLowerCase().includes(searchVal) || 
            e.description.toLowerCase().includes(searchVal);
        
        const matchesDept = deptVal === '' || e.department_id === parseInt(deptVal);
        const matchesYear = yearVal === '' || e.academic_year === yearVal;
        const matchesCategory = catVal === '' || e.category === catVal;

        return matchesSearch && matchesDept && matchesYear && matchesCategory;
    });

    renderUpcomingEventsGrid(filtered);
}

function loadDepartmentView(deptId) {
    const dept = departments.find(d => d.id === parseInt(deptId));
    if (!dept) {
        alert('Department profile not found.');
        navigateTo('home');
        return;
    }

    const deptEvents = events.filter(e => e.department_id === dept.id);

    const bannerBox = document.getElementById('dept-banner-box');
    bannerBox.innerHTML = `
        <div class="dept-header-bg" style="background-image: url('${dept.banner_image}')"></div>
        <div class="dept-header-content">
            <span style="text-transform: uppercase; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; background-color: var(--accent-gold); padding: 0.25rem 0.75rem; border-radius: 50px;">
                RIT Branch Portal
            </span>
            <h2 style="margin-top: 0.75rem;">${dept.name} (${dept.code})</h2>
            <p>${dept.description}</p>
        </div>
    `;

    const tabs = ['upcoming', 'archives', 'coordinators', 'gallery'];
    tabs.forEach(tab => {
        const btn = document.getElementById(`tab-dept-${tab}`);
        btn.onclick = () => {
            tabs.forEach(t => {
                document.getElementById(`tab-dept-${t}`).classList.remove('active');
                document.getElementById(`dept-${t}-pane`).classList.add('hidden');
            });
            btn.classList.add('active');
            document.getElementById(`dept-${tab}-pane`).classList.remove('hidden');
        };
    });

    document.getElementById('tab-dept-upcoming').click();


    const paneGrid = document.getElementById('dept-upcoming-events-grid');
    const currentDate = new Date().toISOString().slice(0, 10);
    const upcoming = deptEvents.filter(e => e.event_date >= currentDate);

    if (upcoming.length === 0) {
        paneGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background-color: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color)">
                <p style="color: var(--text-secondary)">No upcoming events scheduled currently.</p>
            </div>
        `;
    } else {
        paneGrid.innerHTML = '';
        upcoming.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${event.poster_image}" alt="${event.title}" class="card-img">
                    <span class="card-badge">${event.category}</span>
                </div>
                <div class="card-body">
                    <span class="card-date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        ${new Date(event.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <h3 class="card-title">${event.title}</h3>
                    <p class="card-desc">${event.description}</p>
                    <div class="card-meta">
                        <span class="card-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            ${event.venue}
                        </span>
                        <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem; cursor: default;">
                            View Details
                        </button>
                    </div>
                </div>
            `;
            paneGrid.appendChild(card);
        });
    }

    const archivesWrapper = document.getElementById('dept-archives-wrapper');
    const completed = deptEvents.filter(e => e.event_date < currentDate);

    if (completed.length === 0) {
        archivesWrapper.innerHTML = `
            <div style="text-align: center; padding: 3rem; background-color: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color)">
                <p style="color: var(--text-secondary)">No previous events archived.</p>
            </div>
        `;
    } else {
        const grouped = {};
        completed.forEach(e => {
            const year = e.academic_year;
            if (!grouped[year]) grouped[year] = [];
            grouped[year].push(e);
        });

        const years = Object.keys(grouped).sort((a,b) => b.localeCompare(a));
        archivesWrapper.innerHTML = '';
        
        years.forEach(year => {
            const section = document.createElement('div');
            section.style.marginBottom = '3rem';
            section.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold);"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    <h3 style="font-size: 1.25rem; font-weight: 700;">Academic Year ${year}</h3>
                </div>
                <div class="events-grid" id="dept-grid-${year.replace('-', '_')}"></div>
            `;
            archivesWrapper.appendChild(section);

            const subgrid = document.getElementById(`dept-grid-${year.replace('-', '_')}`);
            grouped[year].forEach(event => {
                const card = document.createElement('div');
                card.className = 'event-card';
                card.style.opacity = '0.85';
                card.innerHTML = `
                    <div class="card-img-wrapper">
                        <img src="${event.poster_image}" alt="${event.title}" class="card-img" style="filter: grayscale(30%)">
                        <span class="card-badge" style="background-color: var(--text-muted)">Archived</span>
                    </div>
                    <div class="card-body">
                        <span class="card-date" style="color: var(--text-muted)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            ${new Date(event.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <h3 class="card-title">${event.title}</h3>
                        <p class="card-desc">${event.description}</p>
                        <div class="card-meta">
                            <span class="card-meta-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                ${event.venue}
                            </span>
                            <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem; cursor: default;">
                                View Details
                            </button>
                        </div>
                    </div>
                `;
                subgrid.appendChild(card);
            });
        });
    }

    // 3. Coordinators Tab
    const coGrid = document.getElementById('dept-coordinators-grid');
    const facultySet = new Set();
    const studentSet = new Set();
    const coList = [];

    deptEvents.forEach(e => {
        if (e.faculty_coordinator && !facultySet.has(e.faculty_coordinator)) {
            facultySet.add(e.faculty_coordinator);
            coList.push({ name: e.faculty_coordinator, role: 'Faculty Coordinator', contact: e.contact_1 });
        }
        if (e.student_coordinator && !studentSet.has(e.student_coordinator)) {
            studentSet.add(e.student_coordinator);
            coList.push({ name: e.student_coordinator, role: 'Student Coordinator', contact: e.contact_1 });
        }
    });

    if (coList.length === 0) {
        coGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background-color: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color)">
                <p style="color: var(--text-secondary)">No coordinator profiles found.</p>
            </div>
        `;
    } else {
        coGrid.innerHTML = '';
        coList.forEach(person => {
            const card = document.createElement('div');
            card.className = 'coordinator-card';
            card.innerHTML = `
                <div class="co-avatar">${person.name.charAt(0)}</div>
                <div class="co-info">
                    <h4>${person.name}</h4>
                    <p>${person.role}</p>
                    ${person.contact ? `<p style="font-size: 0.8rem; color: var(--text-secondary)">Contact: ${person.contact}</p>` : ''}
                </div>
            `;
            coGrid.appendChild(card);
        });
    }

    const galleryGrid = document.getElementById('dept-gallery-grid');
    galleryGrid.innerHTML = '';
    deptEvents.forEach(e => {
        if (!e.poster_image) return;
        const box = document.createElement('div');
        box.style.position = 'relative';
        box.style.borderRadius = '12px';
        box.style.overflow = 'hidden';
        box.style.height = '160px';
        box.style.boxShadow = 'var(--card-shadow)';
        box.style.border = '1px solid var(--border-color)';
        box.className = 'select-none';
        box.innerHTML = `
            <img src="${e.poster_image}" alt="${e.title}" style="width: 100%; height: 100%; object-fit: cover;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 0.5rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; font-size: 0.75rem; font-weight: 500;">
                ${e.title}
            </div>
        `;
        galleryGrid.appendChild(box);
    });
}


function loadEventDetailsView(eventId) {
    const event = events.find(e => e.id === parseInt(eventId));
    if (!event) {
        alert('Event not found.');
        navigateTo('home');
        return;
    }

    const dept = departments.find(d => d.id === event.department_id);
    const currentDate = new Date().toISOString().slice(0, 10);
    const isUpcoming = event.event_date >= currentDate;

    document.getElementById('details-back-btn').onclick = () => {
        navigateTo('department', { id: event.department_id });
    };

    const detailsBox = document.getElementById('event-details-content');
    detailsBox.innerHTML = `
        <div class="details-main-card">
            <img src="${event.poster_image}" alt="${event.title}" class="details-banner">
            <div class="details-body">
                <div class="details-meta-top">
                    <span class="badge-tag badge-tag-gold">${event.academic_year}</span>
                    <span class="badge-tag badge-tag-blue">${event.category}</span>
                    <span class="badge-tag">${dept ? dept.name : 'Unknown Department'}</span>
                </div>
                <h2 class="details-title">${event.title}</h2>
                <div class="details-section">
                    <h3>Description</h3>
                    <p style="white-space: pre-wrap; color: var(--text-secondary)">${event.description}</p>
                </div>
                <div class="details-section">
                    <h3>Rules & Guidelines</h3>
                    <p style="color: var(--text-secondary)">
                        1. Participants must bring their college ID card.<br>
                        2. Teams must present their ideas/codes within the designated timings.<br>
                        3. Decisions made by the evaluating judges and coordinators will be final.<br>
                        4. Registration fee payments must be settled prior to the deadline date.
                    </p>
                </div>
            </div>
        </div>

        <div class="details-sidebar">
            <div class="info-sidebar-widget" style="text-align: center;">
                <h4 class="widget-title">Registration Desk</h4>
                <div style="margin: 1rem 0;">
                    <span class="status-badge ${isUpcoming ? 'published' : 'draft'}" style="font-size: 0.9rem; padding: 0.4rem 1rem;">
                        ${isUpcoming ? 'Open' : 'Completed / Archived'}
                    </span>
                </div>

                ${isUpcoming ? `
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="${event.registration_link || '#'}" target="${event.registration_link ? '_blank' : '_self'}" class="btn btn-primary" id="btn-details-register" style="width: 100%; text-decoration: none;">
                            Register Online
                        </a>
                        <button class="btn btn-outline" id="btn-details-calendar" style="width: 100%;">
                            Add to Calendar
                        </button>
                    </div>
                ` : `
                    <p style="font-size: 0.85rem; color: var(--text-muted)">This event is completed. Registrations are disabled.</p>
                `}
            </div>

            <div class="info-sidebar-widget">
                <h4 class="widget-title">Event Schedule</h4>
                <div class="widget-item">
                    <div class="widget-item-value">
                        <h5>Date</h5>
                        <p>${new Date(event.event_date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
                <div class="widget-item">
                    <div class="widget-item-value">
                        <h5>Time & Venue</h5>
                        <p>${event.event_time.substring(0, 5)} Hrs | ${event.venue}</p>
                    </div>
                </div>
                <div class="widget-item">
                    <div class="widget-item-value">
                        <h5>Registration Fees</h5>
                        <p>${event.fees}</p>
                    </div>
                </div>
                <div class="widget-item">
                    <div class="widget-item-value">
                        <h5>Deadline</h5>
                        <p style="font-weight: 600; color: var(--error-color)">
                            ${new Date(event.registration_deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </div>

            <div class="info-sidebar-widget">
                <h4 class="widget-title">Contacts & Coordinators</h4>
                <div class="widget-item">
                    <div class="widget-item-value">
                        <h5>Faculty Coordinator</h5>
                        <p>${event.faculty_coordinator || 'N/A'}</p>
                    </div>
                </div>
                <div class="widget-item">
                    <div class="widget-item-value">
                        <h5>Student Coordinator</h5>
                        <p>${event.student_coordinator || 'N/A'}</p>
                    </div>
                </div>
                ${event.contact_1 ? `
                    <div class="widget-item">
                        <div class="widget-item-value">
                            <h5>Primary Helpdesk</h5>
                            <p>${event.contact_1}</p>
                        </div>
                    </div>
                ` : ''}
                ${event.contact_2 ? `
                    <div class="widget-item">
                        <div class="widget-item-value">
                            <h5>Secondary Helpdesk</h5>
                            <p>${event.contact_2}</p>
                        </div>
                    </div>
                ` : ''}
                ${event.contact_3 ? `
                    <div class="widget-item">
                        <div class="widget-item-value">
                            <h5>Alternative Helpdesk</h5>
                            <p>${event.contact_3}</p>
                        </div>
                    </div>
                ` : ''}

                ${event.payment_qr && event.fees !== 'Free' ? `
                    <div class="qr-code-box">
                        <img src="${event.payment_qr}" alt="Scan to Pay" class="qr-img">
                        <span class="qr-label">Scan to pay entry fee</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    // Bind schedule button download (.ics file creator)
    if (isUpcoming) {
        document.getElementById('btn-details-calendar').onclick = () => {
            const formattedDate = event.event_date.replace(/-/g, '');
            const titleClean = event.title.replace(/,/g, '\\,');
            const descClean = event.description.substring(0, 100).replace(/,/g, '\\,') + '...';

            const icsText = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'BEGIN:VEVENT',
                `SUMMARY:${titleClean}`,
                `DESCRIPTION:${descClean}`,
                `LOCATION:${event.venue}`,
                `DTSTART:${formattedDate}T090000`,
                `DTEND:${formattedDate}T170000`,
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\r\n');

            const blob = new Blob([icsText], { type: 'text/calendar;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${event.title.replace(/\s+/g, '_')}_Schedule.ics`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            showToast("ICS calendar schedule downloaded!");
        };

        document.getElementById('btn-details-register').onclick = (e) => {
            if (!event.registration_link) {
                e.preventDefault();
                showToast("Registration form is being prepared by coordinator.");
            }
        };
    }

    document.getElementById('details-share-btn').onclick = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => showToast("Simulated event page URL copied!"))
            .catch(() => showToast("Copy failed."));
    };

    document.getElementById('details-print-btn').onclick = () => {
        window.print();
    };
}

function loadDashboardView() {
    if (!appState.user) {
        navigateTo('login');
        return;
    }

    document.getElementById('dash-avatar').innerText = appState.user.fullName.charAt(0);
    document.getElementById('dash-name').innerText = appState.user.fullName;
    document.getElementById('dash-dept').innerText = appState.user.role === 'super_admin' ? 'Super Admin' : appState.user.departmentCode;


    document.getElementById('dash-alert').classList.add('hidden');


    const select = document.getElementById('form-dept');
    select.innerHTML = '';
    departments.forEach(d => {
        const option = document.createElement('option');
        option.value = d.id;
        option.innerText = d.name;
        select.appendChild(option);
    });

    if (appState.user.role !== 'super_admin') {
        select.value = appState.user.departmentId;
        select.disabled = true;
        document.getElementById('dash-context-subtitle').innerText = `${appState.user.departmentName} Branch Portal`;
    } else {
        select.disabled = false;
        document.getElementById('dash-context-subtitle').innerText = 'Super Admin: All college departments console';
    }


    loadDashboardTable();
    loadDashboardAnalytics();
}

function loadDashboardTable() {
    const tbody = document.getElementById('dash-events-table-body');
    const thDept = document.getElementById('th-dept');

    const filteredEvents = appState.user.role === 'super_admin'
        ? events
        : events.filter(e => e.department_id === appState.user.departmentId);

    if (appState.user.role === 'super_admin') {
        thDept.classList.remove('hidden');
    } else {
        thDept.classList.add('hidden');
    }

    if (filteredEvents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${appState.user.role === 'super_admin' ? 7 : 6}" style="text-align: center; padding: 2rem; color: var(--text-muted)">No events found. Click 'Add Event' to publish one.</td></tr>`;
        return;
    }

    tbody.innerHTML = '';
    const currentDate = new Date().toISOString().slice(0, 10);

    filteredEvents.forEach(e => {
        const tr = document.createElement('tr');
        const dept = departments.find(d => d.id === e.department_id);
        const isPast = e.event_date < currentDate;

        let row = `
            <td style="font-weight: 600">${e.title}</td>
        `;

        if (appState.user.role === 'super_admin') {
            row += `<td><span class="badge-tag">${dept ? dept.code : 'RIT'}</span></td>`;
        }

        row += `
            <td>${e.category}</td>
            <td>${new Date(e.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
            <td>${e.venue}</td>
            <td>
                <span class="status-badge ${isPast ? 'draft' : 'published'}">
                    ${isPast ? 'Archived' : 'Published'}
                </span>
            </td>
            <td>
                <div class="actions-cell" style="justify-content: center">
                    <button class="icon-btn icon-btn-edit btn-row-edit" title="Edit Event">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                    </button>
                    <button class="icon-btn icon-btn-delete btn-row-delete" title="Delete Event">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                    </button>
                </div>
            </td>
        `;

        tr.innerHTML = row;
        tbody.appendChild(tr);

        // Bind triggers
        tr.querySelector('.btn-row-edit').onclick = () => openEventModal('edit', e);
        tr.querySelector('.btn-row-delete').onclick = () => deleteEvent(e.id);
    });
}

function loadDashboardAnalytics() {
    const deptEvents = appState.user.role === 'super_admin'
        ? events
        : events.filter(e => e.department_id === appState.user.departmentId);

    const currentDate = new Date().toISOString().slice(0, 10);
    const total = deptEvents.length;
    const upcoming = deptEvents.filter(e => e.event_date >= currentDate).length;
    const completed = total - upcoming;

    document.getElementById('dash-stat-total').innerText = total;
    document.getElementById('dash-stat-upcoming').innerText = upcoming;
    document.getElementById('dash-stat-completed').innerText = completed;


    const deptCounts = {};
    const yearCounts = {};

    deptEvents.forEach(e => {
        const dept = departments.find(d => d.id === e.department_id);
        const code = dept ? dept.code : 'RIT';
        deptCounts[code] = (deptCounts[code] || 0) + 1;

        const year = e.academic_year;
        yearCounts[year] = (yearCounts[year] || 0) + 1;
    });

    const deptBars = document.getElementById('chart-dept-bars');
    const deptWrapper = document.getElementById('chart-dept-wrapper');

    if (appState.user.role === 'super_admin') {
        deptWrapper.classList.remove('hidden');
        deptBars.innerHTML = '';
        const maxVal = Math.max(...Object.values(deptCounts), 1);
        
        Object.entries(deptCounts).forEach(([code, count]) => {
            const pct = (count / maxVal) * 100;
            const bar = document.createElement('div');
            bar.className = 'bar-row';
            bar.innerHTML = `
                <div class="bar-label">${code}</div>
                <div class="bar-wrapper">
                    <div class="bar-fill" style="width: ${pct}%"></div>
                </div>
                <div class="bar-value">${count}</div>
            `;
            deptBars.appendChild(bar);
        });
    } else {
        deptWrapper.classList.add('hidden');
    }

    // Chart 2: Academic Year
    const yearBars = document.getElementById('chart-year-bars');
    yearBars.innerHTML = '';
    const maxYearVal = Math.max(...Object.values(yearCounts), 1);
    
    Object.entries(yearCounts).forEach(([year, count]) => {
        const pct = (count / maxYearVal) * 100;
        const bar = document.createElement('div');
        bar.className = 'bar-row';
        bar.innerHTML = `
            <div class="bar-label">${year}</div>
            <div class="bar-wrapper">
                <div class="bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, var(--accent-gold), #d97706)"></div>
            </div>
            <div class="bar-value">${count}</div>
        `;
        yearBars.appendChild(bar);
    });
}

let activeModalMode = 'add';
let activeModalEventId = null;

function openEventModal(mode, event = null) {
    activeModalMode = mode;
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const submitBtn = document.getElementById('form-submit-btn');

    if (mode === 'add') {
        modalTitle.innerText = 'Create New Event';
        submitBtn.innerText = 'Publish Event';
        activeModalEventId = null;

        // Clear values to defaults
        document.getElementById('form-title').value = '';
        document.getElementById('form-desc').value = '';
        document.getElementById('form-year').value = '2025-26';
        document.getElementById('form-category').value = 'Technical';
        document.getElementById('form-fees').value = 'Free';
        document.getElementById('form-date').value = '';
        document.getElementById('form-time').value = '10:00:00';
        document.getElementById('form-venue').value = '';
        document.getElementById('form-deadline').value = '';
        document.getElementById('form-reglink').value = '';
        document.getElementById('form-faculty').value = '';
        document.getElementById('form-student').value = '';
        document.getElementById('form-contact-1').value = '';
        document.getElementById('form-contact-2').value = '';
        document.getElementById('form-contact-3').value = '';
        document.getElementById('form-status').value = 'Published';
        document.getElementById('form-poster').value = '';
        document.getElementById('form-qr').value = '';

        if (appState.user.role !== 'super_admin') {
            document.getElementById('form-dept').value = appState.user.departmentId;
        }
    } else {
        modalTitle.innerText = 'Edit Event Details';
        submitBtn.innerText = 'Save Changes';
        activeModalEventId = event.id;

        document.getElementById('form-title').value = event.title;
        document.getElementById('form-desc').value = event.description;
        document.getElementById('form-dept').value = event.department_id;
        document.getElementById('form-year').value = event.academic_year;
        document.getElementById('form-category').value = event.category;
        document.getElementById('form-fees').value = event.fees || 'Free';
        document.getElementById('form-date').value = event.event_date;
        document.getElementById('form-time').value = event.event_time;
        document.getElementById('form-venue').value = event.venue;
        document.getElementById('form-deadline').value = event.registration_deadline;
        document.getElementById('form-reglink').value = event.registration_link || '';
        document.getElementById('form-faculty').value = event.faculty_coordinator || '';
        document.getElementById('form-student').value = event.student_coordinator || '';
        document.getElementById('form-contact-1').value = event.contact_1 || '';
        document.getElementById('form-contact-2').value = event.contact_2 || '';
        document.getElementById('form-contact-3').value = event.contact_3 || '';
        document.getElementById('form-status').value = event.status || 'Published';
        document.getElementById('form-poster').value = event.poster_image || '';
        document.getElementById('form-qr').value = event.payment_qr || '';
    }

    modal.classList.remove('hidden');
}

function handleEventFormSubmit(e) {
    e.preventDefault();

    const dateVal = document.getElementById('form-date').value;
    const deadlineVal = document.getElementById('form-deadline').value;

    if (deadlineVal > dateVal) {
        showDashboardAlert('danger', 'Registration deadline must be on or before the event date.');
        return;
    }

    // Pack input fields into object
    const eventData = {
        title: document.getElementById('form-title').value,
        description: document.getElementById('form-desc').value,
        department_id: parseInt(document.getElementById('form-dept').value),
        academic_year: document.getElementById('form-year').value,
        category: document.getElementById('form-category').value,
        fees: document.getElementById('form-fees').value,
        event_date: dateVal,
        event_time: document.getElementById('form-time').value,
        venue: document.getElementById('form-venue').value,
        registration_deadline: deadlineVal,
        registration_link: document.getElementById('form-reglink').value,
        faculty_coordinator: document.getElementById('form-faculty').value,
        student_coordinator: document.getElementById('form-student').value,
        contact_1: document.getElementById('form-contact-1').value,
        contact_2: document.getElementById('form-contact-2').value,
        contact_3: document.getElementById('form-contact-3').value,
        status: document.getElementById('form-status').value,
        poster_image: document.getElementById('form-poster').value || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60',
        payment_qr: document.getElementById('form-qr').value
    };

    if (activeModalMode === 'add') {
        // --- CREATE OPERATION ---
        eventData.id = nextEventId++;
        events.push(eventData);
        showDashboardAlert('success', 'New event published successfully!');
    } else {
        // --- UPDATE OPERATION ---
        const idx = events.findIndex(item => item.id === activeModalEventId);
        if (idx !== -1) {
            events[idx] = {
                id: activeModalEventId,
                ...eventData
            };
            showDashboardAlert('success', 'Event modifications saved!');
        }
    }

    document.getElementById('event-modal').classList.add('hidden');
    loadDashboardTable();
    loadDashboardAnalytics();
}

function deleteEvent(id) {
    if (!window.confirm('Delete this event permanently? This cannot be undone.')) {
        return;
    }

    // --- DELETE OPERATION ---
    // DSA Concept: Array filtering to delete record
    events = events.filter(item => item.id !== id);
    
    showDashboardAlert('success', 'Event record deleted.');
    loadDashboardTable();
    loadDashboardAnalytics();
}

function showDashboardAlert(type, text) {
    const alertBox = document.getElementById('dash-alert');
    alertBox.className = `alert alert-${type}`;
    alertBox.innerText = text;
    alertBox.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// LOGIN SUBMIT (Dummy credentials match)
// ============================================================================
function handleLoginSubmit(e) {
    e.preventDefault();
    const userVal = document.getElementById('username').value.trim();
    const passVal = document.getElementById('password').value.trim();

    const errorBox = document.getElementById('login-error');
    errorBox.classList.add('hidden');

    // Search username and password directly in static array
    // DSA Concept: Linear search in users array
    const found = users.find(u => u.username === userVal && u.password === passVal);

    if (found) {
        const dept = departments.find(d => d.id === found.department_id);
        
        // Pack session object
        appState.user = {
            id: found.id,
            username: found.username,
            fullName: found.full_name,
            role: found.role,
            departmentId: found.department_id,
            departmentName: dept ? dept.name : null,
            departmentCode: dept ? dept.code : null
        };

        // Cache session
        sessionStorage.setItem('rit_user', JSON.stringify(appState.user));

        // Sync header links
        document.getElementById('nav-dashboard').classList.remove('hidden');
        document.getElementById('nav-login').classList.add('hidden');

        navigateTo('dashboard');
    } else {
        errorBox.innerText = 'Invalid username or password. Review the seed credentials below.';
        errorBox.classList.remove('hidden');
    }
}

function handleLogout() {
    appState.user = null;
    sessionStorage.removeItem('rit_user');

    // Sync header links
    document.getElementById('nav-dashboard').classList.add('hidden');
    document.getElementById('nav-login').classList.remove('hidden');

    navigateTo('home');
}

// ============================================================================
// APPLICATION LIFECYCLE INITIALIZER (DOM Event Bindings)
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME LOAD SYNC ---
    const savedTheme = localStorage.getItem('rit_dark_mode');
    if (savedTheme === 'true') {
        appState.darkMode = true;
        document.body.classList.add('dark-mode');
        document.getElementById('sun-icon').classList.remove('hidden');
        document.getElementById('moon-icon').classList.add('hidden');
    }

    document.getElementById('theme-toggle').onclick = () => {
        appState.darkMode = !appState.darkMode;
        if (appState.darkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('rit_dark_mode', 'true');
            document.getElementById('sun-icon').classList.remove('hidden');
            document.getElementById('moon-icon').classList.add('hidden');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('rit_dark_mode', 'false');
            document.getElementById('sun-icon').classList.add('hidden');
            document.getElementById('moon-icon').classList.remove('hidden');
        }
    };

    // --- 2. SESSION RECOVERY ---
    const cachedSession = sessionStorage.getItem('rit_user');
    if (cachedSession) {
        appState.user = JSON.parse(cachedSession);
        document.getElementById('nav-dashboard').classList.remove('hidden');
        document.getElementById('nav-login').classList.add('hidden');
    }

    // --- 3. CORE HEADER NAVIGATION CLICKS ---
    document.getElementById('nav-logo').onclick = () => navigateTo('home');
    document.getElementById('nav-home').onclick = () => navigateTo('home');
    document.getElementById('nav-login').onclick = () => navigateTo('login');
    document.getElementById('nav-dashboard').onclick = () => navigateTo('dashboard');

    // --- 4. PANEL SWITCHES (DASHBOARD) ---
    document.getElementById('menu-events').onclick = () => {
        document.getElementById('menu-events').classList.add('active');
        document.getElementById('menu-analytics').classList.remove('active');
        document.getElementById('pane-events').classList.remove('hidden');
        document.getElementById('pane-analytics').classList.add('hidden');
    };

    document.getElementById('menu-analytics').onclick = () => {
        document.getElementById('menu-events').classList.remove('active');
        document.getElementById('menu-analytics').classList.add('active');
        document.getElementById('pane-events').classList.add('hidden');
        document.getElementById('pane-analytics').classList.remove('hidden');
    };

    // --- 5. BUTTON CLICKS & TRIGGERS ---
    document.getElementById('dash-logout').onclick = handleLogout;
    document.getElementById('add-event-btn').onclick = () => openEventModal('add');
    document.getElementById('modal-close-btn').onclick = () => document.getElementById('event-modal').classList.add('hidden');
    document.getElementById('form-cancel-btn').onclick = () => document.getElementById('event-modal').classList.add('hidden');
    document.getElementById('event-form').onsubmit = handleEventFormSubmit;
    document.getElementById('login-form').onsubmit = handleLoginSubmit;
    document.getElementById('dept-back-btn').onclick = () => navigateTo('home');

    // Temporary title clear on print to hide browser page title header
    let originalTitle = document.title;
    window.addEventListener('beforeprint', () => {
        originalTitle = document.title;
        document.title = '\u200B';
    });
    window.addEventListener('afterprint', () => {
        document.title = originalTitle;
    });

    // --- 6. LAUNCH PORTAL HOMEPAGE ---
    navigateTo('home');
});
