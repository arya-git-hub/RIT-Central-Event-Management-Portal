// ============================================================================
// RIT Central Event Management Portal - Main Logic Engine
// ============================================================================

// --- 1. INITIAL STATE & SEED DATABASE SYSTEM ---

const DEFAULT_DEPARTMENTS = [
  { id: 10, name: 'Computer Science & Information Technology', code: 'CSIT', banner_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80', description: 'Focuses on computing infrastructure, software development, data communication, and modern information systems.' },
  { id: 1, name: 'Computer Science Engineering', code: 'CSE', banner_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80', description: 'Focuses on high-quality technical education, algorithmic thinking, software engineering, and innovative project-based learning.' },
  { id: 2, name: 'Artificial Intelligence & Machine Learning', code: 'AIML', banner_image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=1200&auto=format&fit=crop&q=80', description: 'Equips students with core intelligence technologies, data analysis models, deep learning, and advanced automation.' },
  { id: 3, name: 'Mechanical Engineering', code: 'MECH', banner_image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80', description: 'Foundational department focusing on thermodynamics, machine design, CAD/CAM, and automotive robotics.' },
  { id: 4, name: 'Civil Engineering', code: 'CIVIL', banner_image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1200&auto=format&fit=crop&q=80', description: 'Focuses on structural design, environmental engineering, surveying, and modern architectural infrastructures.' },
  { id: 5, name: 'Electrical Engineering', code: 'ELECTRICAL', banner_image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80', description: 'Power systems engineering, smart grids, electrical machines, and clean renewable energy solutions.' },
  { id: 6, name: 'Electronics Engineering', code: 'ENTC', banner_image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1200&auto=format&fit=crop&q=80', description: 'Microprocessors, VLSI design, communication technology, embedded systems and signal processing.' },
  { id: 7, name: 'MCA (Computer Applications)', code: 'MCA', banner_image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80', description: 'Post-graduate program in software engineering, database management, and advanced computing paradigms.' },
  { id: 8, name: 'MBA (Business Administration)', code: 'MBA', banner_image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80', description: 'Specialized management studies covering marketing strategy, corporate finance, operations, and HR systems.' },
  { id: 9, name: 'BBA (Business Administration)', code: 'BBA', banner_image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80', description: 'Undergraduate business management studies focusing on corporate leadership, marketing tactics, finance, and HR management.' }
];

const DEFAULT_USERS = [
  { id: 1, username: 'superadmin', password: 'admin123', department_id: null, role: 'super_admin', full_name: 'Dr. P. V. Kulkarni (Director)' },
  { id: 2, username: 'cseadmin', password: 'cse123', department_id: 1, role: 'dept_admin', full_name: 'Prof. Amit Patil (CSE HOD)' }
];

const DEFAULT_EVENTS = [
  {
    id: 1,
    title: 'Hack-O-Fiesta 2026',
    description: 'A 24-hour national-level hackathon for engineering students to build innovative software solutions addressing real-world problems in Healthcare, FinTech, and Smart Cities.',
    department_id: 1,
    academic_year: '2025-2026',
    category: 'Technical',
    event_date: '2026-10-15',
    event_time: '09:00',
    venue: 'RIT CSE Lab Center',
    registration_deadline: '2026-10-10',
    registration_link: 'https://forms.gle/demo-hack-o-fiesta',
    payment_qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RIT-CSE-HACK-PAY',
    fees: 'Rs. 200 per team',
    faculty_coordinator: 'Prof. Amit Patil',
    student_coordinator: 'Rajesh Kulkarni',
    contact_1: '9876543210',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 124,
    downloads: 32
  },
  {
    id: 2,
    title: 'CodeQuest DSA Coding Contest',
    description: 'Test your data structures and algorithms skills! Solve complex coding puzzles under tight time constraints. Supports C++, Java, and Python.',
    department_id: 1,
    academic_year: '2025-2026',
    category: 'Technical',
    event_date: '2026-08-28',
    event_time: '14:00',
    venue: 'Online (HackerRank Platform)',
    registration_deadline: '2026-08-25',
    registration_link: 'https://hackerrank.com/rit-codequest',
    payment_qr: '',
    fees: 'Free',
    faculty_coordinator: 'Mrs. Priya Deshmukh',
    student_coordinator: 'Simran Shaikh',
    contact_1: '8765432109',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 89,
    downloads: 12
  },
  {
    id: 3,
    title: 'Hands-on Java Programming Workshop',
    description: 'Practical learning sessions for beginners. Covers Object Oriented Programming (OOP), interfaces, collections framework, and basic multi-threading principles.',
    department_id: 1,
    academic_year: '2024-2025',
    category: 'Technical',
    event_date: '2024-09-12',
    event_time: '10:00',
    venue: 'CSE Seminar Hall',
    registration_deadline: '2024-09-10',
    registration_link: '',
    payment_qr: '',
    fees: 'Free',
    faculty_coordinator: 'Prof. Amit Patil',
    student_coordinator: 'Ameya Joshi',
    contact_1: '9988776655',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 145,
    downloads: 41
  },
  {
    id: 4,
    title: 'Neural Network Masterclass',
    description: 'An advanced seminar on building deep learning neural networks from scratch. Topics include feedforward nodes, backpropagation, and training optimization.',
    department_id: 2,
    academic_year: '2025-2026',
    category: 'Technical',
    event_date: '2026-09-05',
    event_time: '10:30',
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
    status: 'Published',
    views: 73,
    downloads: 18
  },
  {
    id: 5,
    title: 'AI Movie Night & Ethics Discussion',
    description: 'Screening of classic science fiction films depicting AGI, followed by an interactive panel discussion with college HODs on ethics and real-world compliance.',
    department_id: 2,
    academic_year: '2024-2025',
    category: 'Non Technical',
    event_date: '2025-01-20',
    event_time: '17:00',
    venue: 'Mechanical Seminar Hall',
    registration_deadline: '2025-01-18',
    registration_link: '',
    payment_qr: '',
    fees: 'Free',
    faculty_coordinator: 'Dr. Snehal Shinde',
    student_coordinator: 'Neha Patil',
    contact_1: '9123456789',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 62,
    downloads: 5
  },
  {
    id: 6,
    title: 'CAD-O-MANIA 3D Design',
    description: 'Create computer-aided designs of functional industrial engines under specified engineering rules. Software allowed: AutoCAD, SolidWorks, CATIA.',
    department_id: 3,
    academic_year: '2025-2026',
    category: 'Technical',
    event_date: '2026-11-10',
    event_time: '09:00',
    venue: 'CAD Lab (Mechanical Wing)',
    registration_deadline: '2026-11-05',
    registration_link: '',
    payment_qr: '',
    fees: 'Rs. 100 per team',
    faculty_coordinator: 'Prof. Vikram Mane',
    student_coordinator: 'Harshal Bhosale',
    contact_1: '8888999900',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 55,
    downloads: 14
  },
  {
    id: 7,
    title: 'RIT Go-Kart Championship',
    description: 'A premium racing event showing custom go-karts. Teams present mechanical designs, aerodynamics reports, structural parameters, and race on the campus track.',
    department_id: 3,
    academic_year: '2023-2024',
    category: 'Technical',
    event_date: '2024-02-15',
    event_time: '08:00',
    venue: 'RIT Sports Ground Track',
    registration_deadline: '2024-02-01',
    registration_link: 'https://forms.gle/gokart',
    payment_qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RIT-MECH-GOKART-PAY',
    fees: 'Rs. 1000 per team',
    faculty_coordinator: 'Prof. Vikram Mane',
    student_coordinator: 'Saurabh Pawar',
    contact_1: '9090909090',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 198,
    downloads: 50
  },
  {
    id: 8,
    title: 'Concrete Cube Compressive Strength Test',
    description: 'Design concrete mixtures to achieve maximum compressive load-bearing limits with optimal concrete-to-filler ratios. Testing done in civil workshops.',
    department_id: 4,
    academic_year: '2024-2025',
    category: 'Technical',
    event_date: '2025-03-02',
    event_time: '11:00',
    venue: 'Concrete Technology Lab',
    registration_deadline: '2025-02-28',
    registration_link: '',
    payment_qr: '',
    fees: 'Free',
    faculty_coordinator: 'Prof. Sunil Naik',
    student_coordinator: 'Aniket Yadav',
    contact_1: '7778889990',
    contact_2: '',
    contact_3: '',
    poster_image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&auto=format&fit=crop&q=60',
    status: 'Published',
    views: 47,
    downloads: 9
  },
  {
    id: 9,
    title: 'CodeDash',
    description: 'A premium coding competition and tech-symposium for Computer Science & Information Technology students showcasing logical thinking, problem-solving, and speed coding contests.',
    department_id: 10,
    academic_year: '2024-2025',
    category: 'Technical',
    event_date: '2025-02-25',
    event_time: '10:00',
    venue: 'RIT CSIT Advanced Lab',
    registration_deadline: '2025-02-23',
    registration_link: '',
    payment_qr: '',
    fees: 'Free',
    faculty_coordinator: 'Dr. S. R. Patil',
    student_coordinator: 'Vinay Kulkarni',
    contact_1: '9111222333',
    contact_2: '',
    contact_3: '',
    poster_image: 'assets/codedash/pic1.jpg',
    gallery_images: [
      'assets/codedash/pic2.jpg',
      'assets/codedash/pic3.jpg',
      'assets/codedash/pic4.jpg'
    ],
    status: 'Published',
    views: 245,
    downloads: 68
  },
  {
    id: 10,
    title: 'ORION 2026',
    description: 'Electronics and Telecommunication Engineering Students\' Association (ETESA) presents ORION 2026. Featuring Robo-Race (Group of 2, Entry Fee: Rs. 200 per group) and Shark Tank (Group of 1-4, Entry Fee: Rs. 120 per person) contests with a total prize pool of Rs. 25,000.',
    department_id: 6,
    academic_year: '2025-2026',
    category: 'Technical',
    event_date: '2026-02-26',
    event_time: '09:00',
    venue: 'ETC Department',
    registration_deadline: '2026-02-24',
    registration_link: '',
    payment_qr: '',
    fees: 'Robo-Race: Rs. 200/Group, Shark Tank: Rs. 120/Person',
    faculty_coordinator: 'Prof. D. M. Mali',
    student_coordinator: 'Shreyash Kore / Shravani Jadhav',
    contact_1: '8055747576 (Robo-Race)',
    contact_2: '7798699697 (Shark Tank)',
    contact_3: '9370307376 (Rohan Kadam)',
    poster_image: 'assets/orion/poster.jpg',
    gallery_images: [
      'assets/orion/pic1.png',
      'assets/orion/pic2.png',
      'assets/orion/pic3.png'
    ],
    status: 'Published',
    views: 85,
    downloads: 12
  }
];

const DEFAULT_REGISTRATIONS = [
  { id: 1, event_id: 1, name: 'Sanjay Deshmukh', email: 'sanjay.deshmukh@rit.edu', department_id: 1, ticket_id: 'RIT-REG-987151', paid: true, checked_in: true },
  { id: 2, event_id: 1, name: 'Arya Kulkarni', email: 'arya.kulkarni@rit.edu', department_id: 1, ticket_id: 'RIT-REG-324151', paid: true, checked_in: false },
  { id: 3, event_id: 2, name: 'Rahul Shinde', email: 'rahul.shinde@rit.edu', department_id: 2, ticket_id: 'RIT-REG-112233', paid: true, checked_in: true },
  { id: 4, event_id: 4, name: 'Tejaswini Patil', email: 'tejaswini.patil@rit.edu', department_id: 1, ticket_id: 'RIT-REG-456789', paid: true, checked_in: false }
];

const DEFAULT_LOGS = [
  { timestamp: '2026-08-20T10:15:30Z', user: 'system', department: 'System', ip: '127.0.0.1', env: 'Chrome 128 / Windows 11', action: 'Database Seed', details: 'Initialized data models with default records.' }
];

// Database state lists
let departments = [];
let users = [];
let events = [];
let registrations = [];
let auditLogs = [];

// App runtime states
const appState = {
  activeView: 'home',
  params: {},
  user: null,
  darkMode: false,
  heroIndex: 0,
  heroInterval: null,
  currentCalendarDate: new Date(2026, 7, 20), // August 2026 (matching system date context)
  activeGalleryEventId: null
};

// Global chart references to allow clean destruction and avoid canvas conflicts
let deptChartInstance = null;
let yearChartInstance = null;
let monthChartInstance = null;
let popularChartInstance = null;

// Initialize and persistence hooks
function initDatabase() {
  // Clear stale local storage format to force migration (BBA addition and year formats update)
  const storedDepts = localStorage.getItem('rit_departments');
  const storedEvents = localStorage.getItem('rit_events');

  let needsReset = false;
  if (storedDepts) {
    try {
      const parsed = JSON.parse(storedDepts);
      if (parsed.length > 0 && parsed[0].code !== 'CSIT') {
        needsReset = true;
      }
    } catch (e) {
      needsReset = true;
    }
  }

  if (storedDepts && (!storedDepts.includes('CSIT') || needsReset || !storedEvents || !storedEvents.includes('CodeDash') || !storedEvents.includes('2025-02-25') || !storedEvents.includes('ORION') || (storedEvents && (storedEvents.includes('contact_info') || storedEvents.includes('RIT-AIML-NEURAL-PAY'))))) {
    localStorage.removeItem('rit_departments');
    localStorage.removeItem('rit_users');
    localStorage.removeItem('rit_events');
    localStorage.removeItem('rit_registrations');
    localStorage.removeItem('rit_audit_logs');
  }

  if (!localStorage.getItem('rit_departments')) {
    localStorage.setItem('rit_departments', JSON.stringify(DEFAULT_DEPARTMENTS));
  }
  if (!localStorage.getItem('rit_users')) {
    localStorage.setItem('rit_users', JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem('rit_events')) {
    localStorage.setItem('rit_events', JSON.stringify(DEFAULT_EVENTS));
  }
  if (!localStorage.getItem('rit_registrations')) {
    localStorage.setItem('rit_registrations', JSON.stringify(DEFAULT_REGISTRATIONS));
  }
  if (!localStorage.getItem('rit_audit_logs')) {
    localStorage.setItem('rit_audit_logs', JSON.stringify(DEFAULT_LOGS));
  }

  // Load from local storage into application memory
  departments = JSON.parse(localStorage.getItem('rit_departments'));
  users = JSON.parse(localStorage.getItem('rit_users'));
  events = JSON.parse(localStorage.getItem('rit_events'));
  registrations = JSON.parse(localStorage.getItem('rit_registrations'));
  auditLogs = JSON.parse(localStorage.getItem('rit_audit_logs'));
}

function syncLocalStorage(key) {
  if (key === 'departments' || !key) localStorage.setItem('rit_departments', JSON.stringify(departments));
  if (key === 'users' || !key) localStorage.setItem('rit_users', JSON.stringify(users));
  if (key === 'events' || !key) localStorage.setItem('rit_events', JSON.stringify(events));
  if (key === 'registrations' || !key) localStorage.setItem('rit_registrations', JSON.stringify(registrations));
  if (key === 'audit_logs' || !key) localStorage.setItem('rit_audit_logs', JSON.stringify(auditLogs));
}

// --- 2. AUDIT LOG GENERATOR & DEVICE ANALYSIS ---

function getSystemSignature() {
  const ua = navigator.userAgent;
  let browser = 'Unknown Browser';
  let os = 'Unknown OS';
  
  if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Edge')) browser = 'Edge';

  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Macintosh')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  return `${browser} / ${os}`;
}

function generateMockIP() {
  // Simple generator to resemble local client networks
  return `10.45.12.${Math.floor(Math.random() * 250) + 1}`;
}

function addAuditLog(action, beforeData = 'N/A', afterData = 'N/A') {
  const operator = appState.user ? appState.user.fullName : 'Guest Visitor';
  const dept = appState.user ? (appState.user.role === 'super_admin' ? 'Super Admin' : appState.user.departmentCode) : 'Public';
  
  const newLog = {
    timestamp: new Date().toISOString(),
    user: operator,
    department: dept,
    ip: generateMockIP(),
    env: getSystemSignature(),
    action: action,
    details: `${beforeData} \u2192 ${afterData}`
  };

  auditLogs.unshift(newLog); // Prepend to show latest logs first
  syncLocalStorage('audit_logs');
}

// --- 3. CORE ROUTING & BREADCRUMBS ENGINE ---

function updateBreadcrumbs(viewName, params = {}) {
  const container = document.getElementById('breadcrumbs-holder');
  if (!container) return;

  container.innerHTML = '';
  
  // Home is always first
  const home = document.createElement('span');
  home.className = 'breadcrumb-item';
  home.style.cursor = 'pointer';
  home.innerText = 'Home';
  home.onclick = () => navigateTo('home');
  container.appendChild(home);

  if (viewName === 'department') {
    const dept = departments.find(d => d.id === parseInt(params.id));
    if (dept) {
      const activeDept = document.createElement('span');
      activeDept.className = 'breadcrumb-item active';
      activeDept.innerText = `${dept.code} Portal`;
      container.appendChild(activeDept);
    }
  } else if (viewName === 'event-details') {
    const event = events.find(e => e.id === parseInt(params.id));
    if (event) {
      const dept = departments.find(d => d.id === event.department_id);
      if (dept) {
        const deptLink = document.createElement('span');
        deptLink.className = 'breadcrumb-item';
        deptLink.style.cursor = 'pointer';
        deptLink.innerText = `${dept.code} Department`;
        deptLink.onclick = () => navigateTo('department', { id: dept.id });
        container.appendChild(deptLink);
      }
      
      const activeEvent = document.createElement('span');
      activeEvent.className = 'breadcrumb-item active';
      activeEvent.innerText = event.title;
      container.appendChild(activeEvent);
    }
  } else if (viewName === 'certificates') {
    const certItem = document.createElement('span');
    certItem.className = 'breadcrumb-item active';
    certItem.innerText = 'Certificate Desk';
    container.appendChild(certItem);
  } else if (viewName === 'login') {
    const loginItem = document.createElement('span');
    loginItem.className = 'breadcrumb-item active';
    loginItem.innerText = 'Coordinator Desk Login';
    container.appendChild(loginItem);
  } else if (viewName === 'dashboard') {
    const dashItem = document.createElement('span');
    dashItem.className = 'breadcrumb-item active';
    dashItem.innerText = 'Administrator Control Panel';
    container.appendChild(dashItem);
  }
}

function navigateTo(viewName, params = {}, push = true) {
  appState.activeView = viewName;
  appState.params = params;

  // Clear homepage hero sliders if moving away
  if (viewName !== 'home' && appState.heroInterval) {
    clearInterval(appState.heroInterval);
    appState.heroInterval = null;
  }

  // Manage view visibility
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

  // Sync Nav highlight states
  if (viewName === 'home') {
    document.getElementById('nav-home').classList.add('active');
  } else if (viewName === 'dashboard') {
    document.getElementById('nav-dashboard').classList.add('active');
  } else if (viewName === 'login') {
    document.getElementById('nav-login').classList.add('active');
  } else if (viewName === 'certificates') {
    const navCert = document.getElementById('nav-certificates');
    if (navCert) navCert.classList.add('active');
  }

  // Insert breadcrumb trails
  updateBreadcrumbs(viewName, params);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Execute view triggers
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
    case 'certificates':
      document.getElementById('cert-result-box').classList.add('hidden');
      document.getElementById('cert-error').classList.add('hidden');
      document.getElementById('cert-ticket-id').value = '';
      break;
  }

  if (push) {
    try {
      history.pushState({ viewName, params }, "");
    } catch (e) {
      console.warn("Could not push state to history:", e);
    }
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

// --- 4. PUBLIC VIEWS ENGINE (HOME, DEPT, DETAILS) ---

function loadHomeView() {
  renderStatsSection();
  renderDeptFilterDropdown();
  renderUpcomingEventsGrid();
  renderDepartmentsGrid();
  renderHeroSlider();
  renderGlobalCalendar();

  document.getElementById('filter-dept').onchange = filterEvents;
  document.getElementById('filter-year').onchange = filterEvents;
  document.getElementById('filter-category').onchange = filterEvents;
  document.getElementById('filter-status').onchange = filterEvents;
  document.getElementById('filter-month').onchange = filterEvents;
  document.getElementById('filter-date').oninput = filterEvents;
  document.getElementById('search-input').oninput = filterEvents;
}

function renderStatsSection() {
  const currentDate = '2026-08-20'; // Current simulation date
  const total = events.filter(e => e.status === 'Published').length;
  const upcoming = events.filter(e => e.status === 'Published' && e.event_date >= currentDate).length;
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
  // If not filtering, only show public "Published" events
  const baseList = filteredList || events.filter(e => e.status === 'Published');
  const currentDate = '2026-08-20';

  // Sort upcoming events by date ascending
  const upcomingList = baseList
    .filter(e => e.event_date >= currentDate)
    .sort((a, b) => a.event_date.localeCompare(b.event_date));

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
    card.style.cursor = 'pointer';
    card.onclick = () => navigateTo('event-details', { id: event.id });
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${event.poster_image}" alt="${event.title}" class="card-img" loading="lazy">
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
          <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem;">
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
    const count = events.filter(e => e.department_id === dept.id && e.status === 'Published').length;
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
  const heroList = events.filter(e => e.poster_image && e.status === 'Published').slice(0, 4);

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
  const statusVal = document.getElementById('filter-status').value;
  const monthVal = document.getElementById('filter-month').value;
  const dateVal = document.getElementById('filter-date').value;

  const currentDate = '2026-08-20';

  const filtered = events.filter(e => {
    if (e.status !== 'Published') return false;

    const matchesSearch = searchVal === '' || 
      e.title.toLowerCase().includes(searchVal) || 
      e.description.toLowerCase().includes(searchVal) ||
      (e.faculty_coordinator && e.faculty_coordinator.toLowerCase().includes(searchVal)) ||
      (e.student_coordinator && e.student_coordinator.toLowerCase().includes(searchVal));
    
    const matchesDept = deptVal === '' || e.department_id === parseInt(deptVal);
    const matchesYear = yearVal === '' || e.academic_year === yearVal;
    const matchesCategory = catVal === '' || e.category === catVal;
    
    let matchesStatus = true;
    if (statusVal === 'Upcoming') {
      matchesStatus = e.event_date >= currentDate;
    } else if (statusVal === 'Completed') {
      matchesStatus = e.event_date < currentDate;
    }

    let matchesMonth = true;
    if (monthVal !== '') {
      const eventMonth = e.event_date.split('-')[1];
      matchesMonth = eventMonth === monthVal;
    }

    const matchesDate = dateVal === '' || e.event_date === dateVal;

    return matchesSearch && matchesDept && matchesYear && matchesCategory && matchesStatus && matchesMonth && matchesDate;
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

  appState.activeGalleryEventId = null;

  const deptEvents = events.filter(e => e.department_id === dept.id && e.status === 'Published');
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

  // Bind Tabs
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

  // 1. Upcoming Panel
  const paneGrid = document.getElementById('dept-upcoming-events-grid');
  const currentDate = '2026-08-20';
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
      card.onclick = () => navigateTo('event-details', { id: event.id });
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${event.poster_image}" alt="${event.title}" class="card-img" loading="lazy">
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
            <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem;">
              View Details
            </button>
          </div>
        </div>
      `;
      paneGrid.appendChild(card);
    });
  }

  // 2. Archives Panel
  const archivesWrapper = document.getElementById('dept-archives-wrapper');
  const completed = deptEvents.filter(e => e.event_date < currentDate);

  if (completed.length === 0) {
    archivesWrapper.innerHTML = `
      <div style="text-align: center; padding: 3rem; background-color: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color)">
        <p style="color: var(--text-secondary)">No previous events archived.</p>
      </div>
    `;
  } else {
    // Group completed events by Academic Year
    const grouped = {};
    completed.forEach(e => {
      const year = e.academic_year;
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(e);
    });

    const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
    archivesWrapper.innerHTML = '';
    
    years.forEach(year => {
      const section = document.createElement('div');
      section.style.marginBottom = '3rem';
      const cleanYearId = year.replace('-', '_');
      section.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold);"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          <h3 style="font-size: 1.25rem; font-weight: 700;">Academic Year ${year}</h3>
        </div>
        <div class="events-grid" id="dept-grid-${cleanYearId}"></div>
      `;
      archivesWrapper.appendChild(section);

      const subgrid = document.getElementById(`dept-grid-${cleanYearId}`);
      grouped[year].forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.onclick = () => navigateTo('event-details', { id: event.id });
        card.style.opacity = '0.9';
        card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${event.poster_image}" alt="${event.title}" class="card-img" style="filter: grayscale(20%)" loading="lazy">
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
              <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.8rem;">
                View Details
              </button>
            </div>
          </div>
        `;
        subgrid.appendChild(card);
      });
    });
  }

  // 3. Coordinators Panel
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

  // 4. Gallery Panel (Grid and Lightbox preview support)
  renderDepartmentGallery(deptEvents);
}

function renderDepartmentGallery(deptEvents) {
  const galleryGrid = document.getElementById('dept-gallery-grid');
  galleryGrid.innerHTML = '';

  const eventsWithImages = deptEvents.filter(e => e.gallery_images && e.gallery_images.length > 0);

  if (eventsWithImages.length === 0) {
    galleryGrid.innerHTML = `
      <div style="text-align: center; padding: 3rem; background-color: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color)">
        <p style="color: var(--text-secondary)">No images in department gallery.</p>
      </div>
    `;
    return;
  }

  // If a specific event album folder is open:
  if (appState.activeGalleryEventId) {
    const activeEvent = eventsWithImages.find(e => e.id === appState.activeGalleryEventId);
    if (activeEvent) {
      // Render back button and event photos grid
      const backBtn = document.createElement('button');
      backBtn.className = 'btn btn-outline';
      backBtn.style.marginBottom = '1.5rem';
      backBtn.style.display = 'flex';
      backBtn.style.alignItems = 'center';
      backBtn.style.gap = '0.5rem';
      backBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Albums
      `;
      backBtn.onclick = () => {
        appState.activeGalleryEventId = null;
        renderDepartmentGallery(deptEvents);
      };

      const header = document.createElement('h3');
      header.style.fontSize = '1.25rem';
      header.style.fontWeight = '700';
      header.style.color = 'var(--text-primary)';
      header.style.marginBottom = '1.25rem';
      header.style.borderLeft = '4px solid var(--accent-color)';
      header.style.paddingLeft = '0.75rem';
      header.style.textTransform = 'uppercase';
      header.style.letterSpacing = '0.05em';
      header.innerText = activeEvent.title;

      const grid = document.createElement('div');
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(220px, 1fr))';
      grid.style.gap = '1.25rem';

      // Collect all images for this event
      const imgs = [];
      if (activeEvent.gallery_images && Array.isArray(activeEvent.gallery_images)) {
        activeEvent.gallery_images.forEach((imgSrc, idx) => {
          imgs.push({ src: imgSrc, title: `${activeEvent.title} (Photo ${idx + 1})` });
        });
      }

      imgs.forEach(imgData => {
        const box = document.createElement('div');
        box.style.position = 'relative';
        box.style.borderRadius = '12px';
        box.style.overflow = 'hidden';
        box.style.height = '160px';
        box.style.boxShadow = 'var(--card-shadow)';
        box.style.border = '1px solid var(--border-color)';
        box.style.cursor = 'zoom-in';
        box.className = 'select-none';
        
        box.onclick = () => launchLightbox(imgData.src, imgData.title);

        box.innerHTML = `
          <img src="${imgData.src}" alt="${imgData.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
          <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 0.5rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; font-size: 0.75rem; font-weight: 500;">
            ${imgData.title}
          </div>
        `;
        grid.appendChild(box);
      });

      galleryGrid.appendChild(backBtn);
      galleryGrid.appendChild(header);
      galleryGrid.appendChild(grid);
      return;
    }
  }

  // Otherwise, render folders/albums list:
  const folderGrid = document.createElement('div');
  folderGrid.style.display = 'grid';
  folderGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(260px, 1fr))';
  folderGrid.style.gap = '1.5rem';

  eventsWithImages.forEach(e => {
    // Collect all images to count them
    const imgsCount = e.gallery_images ? e.gallery_images.length : 0;
    const coverImage = e.poster_image || (e.gallery_images && e.gallery_images[0]) || '';

    const folderCard = document.createElement('div');
    folderCard.className = 'gallery-folder-card glass-panel select-none';
    folderCard.style.cursor = 'pointer';
    folderCard.style.borderRadius = '16px';
    folderCard.style.overflow = 'hidden';
    folderCard.style.border = '1px solid var(--border-color)';
    folderCard.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    folderCard.style.backgroundColor = 'var(--bg-secondary)';
    
    // Add nice hover effects programmatically
    folderCard.onmouseenter = () => {
      folderCard.style.transform = 'translateY(-4px)';
      folderCard.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
    };
    folderCard.onmouseleave = () => {
      folderCard.style.transform = 'translateY(0)';
      folderCard.style.boxShadow = 'var(--card-shadow)';
    };

    folderCard.onclick = () => {
      appState.activeGalleryEventId = e.id;
      renderDepartmentGallery(deptEvents);
    };

    folderCard.innerHTML = `
      <div style="position: relative; height: 160px; overflow: hidden; background-color: #f1f5f9;">
        ${coverImage ? `<img src="${coverImage}" alt="${e.title}" style="width: 100%; height: 100%; object-fit: cover;">` : ''}
        <div style="position: absolute; top: 12px; right: 12px; background-color: rgba(15, 23, 42, 0.85); color: white; padding: 0.25rem 0.6rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.25rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
          ${imgsCount}
        </div>
      </div>
      <div style="padding: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
        <div style="background-color: rgba(99, 102, 241, 0.1); color: var(--accent-color); padding: 0.5rem; border-radius: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>
          </svg>
        </div>
        <div style="overflow: hidden; flex-grow: 1;">
          <h4 style="margin: 0; font-size: 0.95rem; font-weight: 700; color: var(--text-primary); white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${e.title}</h4>
          <span style="font-size: 0.75rem; color: var(--text-secondary); display: block; margin-top: 0.2rem;">Event Photo Album</span>
        </div>
      </div>
    `;
    folderGrid.appendChild(folderCard);
  });

  galleryGrid.appendChild(folderGrid);
}

function launchLightbox(imgSrc, title) {
  // Create dynamic lightbox overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.style.zIndex = 3000;
  overlay.onclick = () => overlay.remove();
  
  overlay.innerHTML = `
    <div style="position: relative; max-width: 90%; max-height: 85vh; text-align: center;" onclick="event.stopPropagation()">
      <img src="${imgSrc}" alt="${title}" style="max-width: 100%; max-height: 75vh; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
      <h3 style="color: white; margin-top: 1rem; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${title}</h3>
      <button style="position: absolute; top: -2.5rem; right: 0; background: none; border: none; font-size: 1.5rem; color: white; cursor: pointer;" onclick="this.closest('.modal-overlay').remove()">&times;</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function loadEventDetailsView(eventId) {
  const event = events.find(e => e.id === parseInt(eventId));
  if (!event) {
    alert('Event not found.');
    navigateTo('home');
    return;
  }

  // Increment event view count
  event.views = (event.views || 0) + 1;
  syncLocalStorage('events');

  const dept = departments.find(d => d.id === event.department_id);
  const currentDate = '2026-08-20';
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
          <p style="color: var(--text-secondary); line-height: 1.8;">
            1. All participants must represent their institute with a valid physical identity card.<br>
            2. Teams must present project codes or designs strictly within their designated timeline windows.<br>
            3. Decision criteria are managed by external evaluator panels; HOD decision is final.<br>
            4. Participation fee payments must be settled online prior to the event registration deadline.
          </p>
        </div>
      </div>
    </div>

    <div class="details-sidebar">
      <div class="info-sidebar-widget" style="text-align: center;">
        <h4 class="widget-title">Registration Desk</h4>
        <div style="margin: 1rem 0;">
          <span class="status-badge ${isUpcoming ? 'published' : 'draft'}" style="font-size: 0.9rem; padding: 0.4rem 1rem;">
            ${isUpcoming ? 'Registrations Open' : 'Event Completed / Archived'}
          </span>
        </div>

        ${isUpcoming ? `
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button class="btn btn-primary" id="btn-details-register-modal" style="width: 100%;">
              Register Now
            </button>
            <button class="btn btn-outline" id="btn-details-calendar" style="width: 100%;">
              Add to Calendar
            </button>
            <button class="btn btn-outline" id="btn-details-brochure" style="width: 100%; border-color: var(--accent-gold); color: var(--accent-gold);">
              Download Brochure
            </button>
          </div>
        ` : `
          <p style="font-size: 0.85rem; color: var(--text-muted)">This event is completed. Public registration desk closed.</p>
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
            <p>${event.event_time} Hrs | ${event.venue}</p>
          </div>
        </div>
        <div class="widget-item">
          <div class="widget-item-value">
            <h5>Registration Fees</h5>
            <p style="font-weight:600; color: var(--accent-gold);">${event.fees}</p>
          </div>
        </div>
        <div class="widget-item">
          <div class="widget-item-value">
            <h5>Deadline</h5>
            <p style="font-weight: 700; color: var(--error-color)">
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
            <span class="qr-label">Scan QR to settle Entry Fees</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Bind Actions if upcoming
  if (isUpcoming) {
    document.getElementById('btn-details-register-modal').onclick = () => {
      if (event.registration_link && event.registration_link.trim() !== '') {
        window.open(event.registration_link.trim(), '_blank');
      } else {
        openRegistrationModal(event);
      }
    };

    document.getElementById('btn-details-calendar').onclick = () => {
      downloadICS(event);
    };

    document.getElementById('btn-details-brochure').onclick = () => {
      downloadBrochurePDF(event);
    };
  }

  // Bind Navbar Social Sharing
  document.getElementById('details-share-btn').onclick = () => {
    // Web Share API support or fallback clipboard
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Check out ${event.title} at RIT!`,
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showToast("Simulated event page URL copied! Share it with your peers."))
        .catch(() => showToast("Copy failed."));
    }
  };

  document.getElementById('details-print-btn').onclick = () => {
    window.print();
  };
}

// Download event calendar invite (.ics)
function downloadICS(event) {
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
  showToast("ICS calendar invite downloaded!");
}

// Generate & download beautiful PDF brochure via jsPDF
function downloadBrochurePDF(event) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'letter'
  });

  // Border designs
  doc.setLineWidth(0.02);
  doc.rect(0.5, 0.5, 7.5, 10.0);
  doc.setDrawColor(180, 83, 9); // Gold
  doc.rect(0.55, 0.55, 7.4, 9.9);

  // Title
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(30, 58, 138); // Navy blue
  doc.text("Rajarambapu Institute of Technology (RIT)", 4.0, 1.2, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text("Rajaramnagar, Islampur, Maharashtra, India", 4.0, 1.5, { align: "center" });

  doc.setLineWidth(0.01);
  doc.setDrawColor(226, 232, 240);
  doc.line(0.8, 1.8, 7.2, 1.8);

  // Event title & Category
  doc.setFontSize(18);
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text(event.title, 4.0, 2.3, { align: "center" });

  doc.setFontSize(11);
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(180, 83, 9);
  doc.text(`${event.category} Event | Academic Year ${event.academic_year}`, 4.0, 2.6, { align: "center" });

  // Description
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text("Event Overview", 0.9, 3.2);
  
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  const splitDesc = doc.splitTextToSize(event.description, 6.2);
  doc.text(splitDesc, 0.9, 3.5);

  // Details box
  const startY = 3.5 + (splitDesc.length * 0.2) + 0.3;
  doc.setFillColor(248, 250, 252);
  doc.rect(0.9, startY, 6.2, 2.0, "F");
  doc.rect(0.9, startY, 6.2, 2.0);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 58, 138);
  doc.text("Schedule & Coordination Details", 1.1, startY + 0.3);

  doc.setFontSize(9.5);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(15, 23, 42);
  doc.text(`Event Date: ${new Date(event.event_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, 1.1, startY + 0.7);
  doc.text(`Time & Venue: ${event.event_time} Hrs | ${event.venue}`, 1.1, startY + 1.0);
  doc.text(`Registration Deadline: ${event.registration_deadline}`, 1.1, startY + 1.3);
  doc.text(`Participation Fees: ${event.fees}`, 1.1, startY + 1.6);

  // Coordinators
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text("Coordinating Team", 0.9, startY + 2.5);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`Faculty Coordinator: ${event.faculty_coordinator || 'N/A'}`, 0.9, startY + 2.8);
  doc.text(`Student Coordinator: ${event.student_coordinator || 'N/A'}`, 0.9, startY + 3.1);
  const contactsArray = [event.contact_1, event.contact_2, event.contact_3].filter(Boolean);
  doc.text(`Helpdesk Numbers: ${contactsArray.join(', ') || 'N/A'}`, 0.9, startY + 3.4);

  // Footer note
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text("RIT Central Event Portal - Compiled Brochure PDF", 4.0, 10.0, { align: "center" });

  doc.save(`${event.title.replace(/\s+/g, '_')}_Brochure.pdf`);
  
  // Track downloads
  event.downloads = (event.downloads || 0) + 1;
  syncLocalStorage('events');
  showToast("Brochure PDF compiled and downloaded!");
}

// --- 5. GLOBAL INTERACTIVE CALENDAR MODULE ---

function renderGlobalCalendar() {
  const container = document.getElementById('calendar-days-container');
  const title = document.getElementById('cal-month-title');
  if (!container || !title) return;

  const year = appState.currentCalendarDate.getFullYear();
  const month = appState.currentCalendarDate.getMonth(); // 0-indexed

  // Month title header
  title.innerText = appState.currentCalendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Get date specs
  const firstDayIndex = new Date(year, month, 1).getDay(); // day of week Sun-Sat
  const totalDays = new Date(year, month + 1, 0).getDate(); // days in current month
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  container.innerHTML = '';
  
  // Render prev month padding days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const day = prevMonthTotalDays - i;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell inactive';
    cell.innerHTML = `<span class="cal-day-num">${day}</span>`;
    container.appendChild(cell);
  }

  // Render current month days
  const currentDateStr = '2026-08-20';
  const todayDateObj = new Date(currentDateStr);

  for (let day = 1; day <= totalDays; day++) {
    const cellDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell';
    
    // Check if cell matches "today" context
    if (year === todayDateObj.getFullYear() && month === todayDateObj.getMonth() && day === todayDateObj.getDate()) {
      cell.classList.add('today');
    }

    cell.innerHTML = `
      <span class="cal-day-num">${day}</span>
      <div class="cal-events-list" id="cal-events-${cellDateStr}"></div>
    `;
    container.appendChild(cell);

    // Look up and render published events on this specific date
    const dayEvents = events.filter(e => e.event_date === cellDateStr && e.status === 'Published');
    const eventsList = cell.querySelector('.cal-events-list');
    
    dayEvents.forEach(evt => {
      const badge = document.createElement('div');
      badge.className = `cal-event-badge ${evt.category === 'Technical' ? 'cal-badge-tech' : 'cal-badge-nontech'}`;
      badge.innerText = evt.title;
      badge.title = `${evt.title} (${evt.category})`;
      badge.onclick = (e) => {
        e.stopPropagation();
        navigateTo('event-details', { id: evt.id });
      };
      eventsList.appendChild(badge);
    });
  }

  // Render next month padding days to fill 42 cells grid
  const cellsRendered = firstDayIndex + totalDays;
  const remainingCells = 42 - cellsRendered;
  for (let day = 1; day <= remainingCells; day++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell inactive';
    cell.innerHTML = `<span class="cal-day-num">${day}</span>`;
    container.appendChild(cell);
  }
}

// Bind Calendar Nav clicks
document.getElementById('cal-prev-btn').onclick = () => {
  appState.currentCalendarDate.setMonth(appState.currentCalendarDate.getMonth() - 1);
  renderGlobalCalendar();
};

document.getElementById('cal-next-btn').onclick = () => {
  appState.currentCalendarDate.setMonth(appState.currentCalendarDate.getMonth() + 1);
  renderGlobalCalendar();
};

// --- 6. PARTICIPANT REGISTRATION & CERTIFICATES SYSTEM ---

let activeRegisteringEvent = null;

function openRegistrationModal(event) {
  activeRegisteringEvent = event;
  const modal = document.getElementById('register-modal');
  const modalFees = document.getElementById('reg-modal-fees-notice');
  const paymentArea = document.getElementById('reg-form-payment-area');
  const txidInput = document.getElementById('reg-form-txid');
  const qrImg = document.getElementById('reg-form-payment-qr');

  // Load departments into dropdown selection
  const deptSelect = document.getElementById('reg-form-dept');
  deptSelect.innerHTML = '';
  departments.forEach(d => {
    const option = document.createElement('option');
    option.value = d.id;
    option.innerText = d.name;
    deptSelect.appendChild(option);
  });

  modalFees.innerText = `Registration Entry Fees: ${event.fees}`;

  if (event.fees && event.fees.toLowerCase() !== 'free') {
    paymentArea.classList.remove('hidden');
    txidInput.required = true;
    qrImg.src = event.payment_qr || `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RIT-FEE-PAY-${event.id}`;
  } else {
    paymentArea.classList.add('hidden');
    txidInput.required = false;
    txidInput.value = '';
  }

  // Clear modal inputs
  document.getElementById('reg-form-name').value = '';
  document.getElementById('reg-form-email').value = '';

  modal.classList.remove('hidden');
}

// Handle Registration Submit Form
document.getElementById('public-reg-form').onsubmit = (e) => {
  e.preventDefault();
  if (!activeRegisteringEvent) return;

  const nameVal = document.getElementById('reg-form-name').value.trim();
  const emailVal = document.getElementById('reg-form-email').value.trim();
  const studentDeptId = parseInt(document.getElementById('reg-form-dept').value);
  const txId = document.getElementById('reg-form-txid').value.trim();

  // Create clean database record
  const ticketId = `RIT-REG-${Math.floor(100000 + Math.random() * 900000)}`;
  const newReg = {
    id: registrations.length + 1,
    event_id: activeRegisteringEvent.id,
    name: nameVal,
    email: emailVal,
    department_id: studentDeptId,
    ticket_id: ticketId,
    paid: activeRegisteringEvent.fees.toLowerCase() === 'free' ? true : (txId !== ''),
    checked_in: false
  };

  registrations.push(newReg);
  syncLocalStorage('registrations');

  // Trigger system audit logging
  addAuditLog(`Student Registered for ${activeRegisteringEvent.title}`, 'N/A', `Ticket ID: ${ticketId}`);

  // Display receipt modal to user
  document.getElementById('register-modal').classList.add('hidden');
  launchTicketReceipt(newReg, activeRegisteringEvent);
};

function launchTicketReceipt(reg, event) {
  const modal = document.getElementById('ticket-modal');
  const content = document.getElementById('ticket-content');
  const dept = departments.find(d => d.id === event.department_id);

  content.innerHTML = `
    <div class="ticket-brand">
      <div>
        <h4 style="font-weight:800; color:#1e3a8a; margin:0;">RIT CENTRAL PORTAL</h4>
        <span style="font-size:0.7rem; color:#b45309; text-transform:uppercase; font-weight:600;">College Event Admission Pass</span>
      </div>
      <div style="font-weight:800; font-size:1.15rem; color:#1e3a8a;">R</div>
    </div>
    
    <div style="margin: 1rem 0; text-align:center;">
      <h3 style="font-weight:700; margin:0 0 0.5rem; color:#0f172a; font-size:1.2rem;">${event.title}</h3>
      <span class="status-badge published" style="font-size:0.75rem;">Admit One</span>
    </div>

    <div class="ticket-details-grid">
      <div>
        <span class="ticket-label">Participant</span>
        <div class="ticket-value" style="font-weight:600;">${reg.name}</div>
      </div>
      <div>
        <span class="ticket-label">Ticket ID</span>
        <div class="ticket-value" style="font-family:monospace; font-weight:700;">${reg.ticket_id}</div>
      </div>
      <div>
        <span class="ticket-label">Host Dept</span>
        <div class="ticket-value">${dept ? dept.code : 'RIT'}</div>
      </div>
      <div>
        <span class="ticket-label">Venue</span>
        <div class="ticket-value">${event.venue}</div>
      </div>
      <div>
        <span class="ticket-label">Date & Time</span>
        <div class="ticket-value">${event.event_date} | ${event.event_time}</div>
      </div>
    </div>

    <div class="ticket-qr-area">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${reg.ticket_id}" alt="Ticket Code" style="width:100px; height:100px; margin-bottom:0.25rem;">
      <span style="font-size:0.65rem; color:#64748b; font-weight:500;">Present QR code at venue desk for digital check-in</span>
    </div>
  `;

  // Bind ticket print trigger
  document.getElementById('btn-print-ticket').onclick = () => {
    window.print();
  };

  modal.classList.remove('hidden');
}

// Certificate Search Flow
let activeCertificateRecord = null;
document.getElementById('certificate-form').onsubmit = (e) => {
  e.preventDefault();
  const searchVal = document.getElementById('cert-ticket-id').value.trim().toUpperCase();
  const errorAlert = document.getElementById('cert-error');
  const resultBox = document.getElementById('cert-result-box');

  errorAlert.classList.add('hidden');
  resultBox.classList.add('hidden');

  // Search registrations list
  const foundReg = registrations.find(r => r.ticket_id.toUpperCase() === searchVal || r.email.toUpperCase() === searchVal);
  if (foundReg) {
    const event = events.find(evt => evt.id === foundReg.event_id);
    if (!event) {
      errorAlert.innerText = "Target event record deleted.";
      errorAlert.classList.remove('hidden');
      return;
    }
    
    // Check if event is completed (certificates only for archives)
    const currentDate = '2026-08-20';
    if (event.event_date >= currentDate) {
      errorAlert.innerText = `The event '${event.title}' is not yet completed. Certificates will release after completion.`;
      errorAlert.classList.remove('hidden');
      return;
    }

    activeCertificateRecord = { reg: foundReg, event: event };
    document.getElementById('cert-event-title').innerText = event.title;
    document.getElementById('cert-recipient-name').innerText = foundReg.name;
    resultBox.classList.remove('hidden');
    
    // Build certificate html preview
    const previewWrapper = document.getElementById('cert-canvas-wrapper');
    previewWrapper.innerHTML = `
      <div style="border: 4px double #b45309; padding: 2rem; text-align:center; background-color:#fffdfa;">
        <h2 style="font-family:serif; color:#1e3a8a; font-size:1.75rem; margin:0 0 0.5rem;">CERTIFICATE OF PARTICIPATION</h2>
        <p style="font-size:0.85rem; color:#64748b; margin-bottom:1.5rem;">RAJARAMBAPU INSTITUTE OF TECHNOLOGY, ISLAMPUR</p>
        <span style="font-size:0.9rem; font-style:italic;">This is proudly presented to</span>
        <h3 style="font-size:1.5rem; color:#b45309; margin:0.75rem 0; font-family:serif;">${foundReg.name}</h3>
        <p style="font-size:0.9rem; line-height:1.6; max-width:400px; margin:0 auto;">
          for active participation and successful completion of the college event 
          <strong>"${event.title}"</strong> organized by the Department of ${departments.find(d => d.id === event.department_id).name} during Academic Year ${event.academic_year}.
        </p>
        <div style="margin-top:2rem; display:flex; justify-content:space-between; font-size:0.8rem; border-top:1px solid #e2e8f0; padding-top:0.75rem;">
          <div>Date: ${event.event_date}</div>
          <div>Director, RIT</div>
        </div>
      </div>
    `;
  } else {
    errorAlert.innerText = "No registration records found matching that ID or Email.";
    errorAlert.classList.remove('hidden');
  }
};

document.getElementById('btn-cert-preview').onclick = () => {
  const previewWrapper = document.getElementById('cert-canvas-wrapper');
  if (previewWrapper.style.display === 'none') {
    previewWrapper.style.display = 'block';
  } else {
    previewWrapper.style.display = 'none';
  }
};

document.getElementById('btn-cert-download').onclick = () => {
  if (!activeCertificateRecord) return;
  const { reg, event } = activeCertificateRecord;
  const { jsPDF } = window.jspdf;
  
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'in',
    format: 'letter'
  });

  // Certificate Layout designs
  doc.setLineWidth(0.04);
  doc.setDrawColor(30, 58, 138); // Navy
  doc.rect(0.4, 0.4, 10.2, 7.7);
  doc.setLineWidth(0.02);
  doc.setDrawColor(180, 83, 9); // Gold
  doc.rect(0.45, 0.45, 10.1, 7.6);

  doc.setFont("serif", "bold");
  doc.setFontSize(28);
  doc.setTextColor(30, 58, 138);
  doc.text("CERTIFICATE OF PARTICIPATION", 5.5, 1.8, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139);
  doc.text("RAJARAMBAPU INSTITUTE OF TECHNOLOGY", 5.5, 2.2, { align: "center" });
  doc.text("Islampur, Maharashtra, India | Autonomous Institute", 5.5, 2.4, { align: "center" });

  doc.setFont("serif", "italic");
  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text("This certificate is proudly awarded to", 5.5, 3.2, { align: "center" });

  doc.setFont("serif", "bold");
  doc.setFontSize(24);
  doc.setTextColor(180, 83, 9);
  doc.text(reg.name, 5.5, 3.8, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  
  const certBody = `for active participation in the academic event "${event.title}" organized and conducted by the Department of ${departments.find(d => d.id === event.department_id).name} during the Academic Year ${event.academic_year}.`;
  const splitBody = doc.splitTextToSize(certBody, 8.0);
  doc.text(splitBody, 5.5, 4.4, { align: "center" });

  // Verification Details footer
  doc.setLineWidth(0.01);
  doc.setDrawColor(226, 232, 240);
  doc.line(1.5, 6.0, 9.5, 6.0);

  doc.setFontSize(10);
  doc.setFont("Helvetica", "bold");
  doc.text("Dr. P. V. Kulkarni", 2.5, 6.4, { align: "center" });
  doc.setFont("Helvetica", "normal");
  doc.text("Director, RIT", 2.5, 6.6, { align: "center" });

  doc.setFont("Helvetica", "bold");
  doc.text(`${event.event_date}`, 8.5, 6.4, { align: "center" });
  doc.setFont("Helvetica", "normal");
  doc.text("Issue Date", 8.5, 6.6, { align: "center" });

  // Verification QR watermark
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(`Verify online with Ticket ID: ${reg.ticket_id}`, 5.5, 7.3, { align: "center" });

  doc.save(`${reg.name.replace(/\s+/g, '_')}_Participation_Certificate.pdf`);
  
  addAuditLog(`Student Downloaded Certificate`, 'N/A', `Ticket ID: ${reg.ticket_id}`);
  showToast("Certificate PDF compiled and downloaded!");
};

// --- 7. ADMIN DASHBOARDS & LOGIC SYSTEMS ---

function loadDashboardView() {
  if (!appState.user) {
    navigateTo('login');
    return;
  }

  // Dashboard Header Profile
  document.getElementById('dash-avatar').innerText = appState.user.fullName.charAt(0);
  document.getElementById('dash-name').innerText = appState.user.fullName;
  document.getElementById('dash-dept').innerText = appState.user.role === 'super_admin' ? 'Super Admin' : appState.user.departmentCode;

  // Sync Form event department selections based on login roles
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
    document.getElementById('dash-context-subtitle').innerText = `${appState.user.departmentName} Coordinator Desk`;
    
    // Hide Super admin sidebar menus
    document.getElementById('menu-depts').classList.add('hidden');
    document.getElementById('menu-admins').classList.add('hidden');
    document.getElementById('menu-logs').classList.add('hidden');
  } else {
    select.disabled = false;
    document.getElementById('dash-context-subtitle').innerText = 'Super Admin: All college departments console';
    
    // Show Super admin sidebar menus
    document.getElementById('menu-depts').classList.remove('hidden');
    document.getElementById('menu-admins').classList.remove('hidden');
    document.getElementById('menu-logs').classList.remove('hidden');
  }

  // Default display pane
  document.getElementById('menu-events').click();
}

// Sidebar Panes routing
const sidebarPanes = ['events', 'registrations', 'depts', 'admins', 'logs', 'analytics'];
sidebarPanes.forEach(pane => {
  const item = document.getElementById(`menu-${pane}`);
  if (item) {
    item.onclick = () => {
      sidebarPanes.forEach(p => {
        const menuItem = document.getElementById(`menu-${p}`);
        if (menuItem) menuItem.classList.remove('active');
        const paneDOM = document.getElementById(`pane-${p}`);
        if (paneDOM) paneDOM.classList.add('hidden');
      });

      item.classList.add('active');
      const targetPane = document.getElementById(`pane-${pane}`);
      if (targetPane) targetPane.classList.remove('hidden');

      // Refresh corresponding pane tables or graphs
      switch (pane) {
        case 'events':
          loadDashboardTable();
          break;
        case 'registrations':
          loadRegistrationsPane();
          break;
        case 'depts':
          loadDepartmentsPane();
          break;
        case 'admins':
          loadAdminsPane();
          break;
        case 'logs':
          loadLogsPane();
          break;
        case 'analytics':
          loadAnalyticsPane();
          break;
      }
    };
  }
});

// A. Manage Events Dashboard
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
  filteredEvents.forEach(e => {
    const tr = document.createElement('tr');
    const dept = departments.find(d => d.id === e.department_id);
    
    // Status Badge mappings
    let statusClass = 'draft';
    if (e.status === 'Published') statusClass = 'published';
    else if (e.status === 'Pending Approval') statusClass = 'warning';
    
    let row = `<td style="font-weight: 600">${e.title}</td>`;

    if (appState.user.role === 'super_admin') {
      row += `<td><span class="badge-tag">${dept ? dept.code : 'RIT'}</span></td>`;
    }

    row += `
      <td>${e.category}</td>
      <td>${new Date(e.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
      <td>${e.venue}</td>
      <td>
        <span class="status-badge ${statusClass}">
          ${e.status}
        </span>
      </td>
      <td>
        <div class="actions-cell" style="justify-content: center">
          ${appState.user.role === 'super_admin' && e.status === 'Pending Approval' ? `
            <button class="icon-btn btn-row-approve" title="Approve & Publish Event" style="color: var(--success-color);">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
          ` : ''}
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

    // Bind edit/delete triggers
    if (tr.querySelector('.btn-row-approve')) {
      tr.querySelector('.btn-row-approve').onclick = () => approveEvent(e.id);
    }
    tr.querySelector('.btn-row-edit').onclick = () => openEventModal('edit', e);
    tr.querySelector('.btn-row-delete').onclick = () => deleteEvent(e.id);
  });
}

function approveEvent(id) {
  const idx = events.findIndex(item => item.id === id);
  if (idx !== -1) {
    const beforeStatus = events[idx].status;
    events[idx].status = 'Published';
    syncLocalStorage('events');
    addAuditLog(`Approved Pending Event`, `Status: ${beforeStatus}`, `Status: Published (${events[idx].title})`);
    showDashboardAlert('success', `Event '${events[idx].title}' has been successfully approved and is now public!`);
    loadDashboardTable();
  }
}

// B. Manage Registrations Dashboard
function loadRegistrationsPane() {
  const select = document.getElementById('reg-event-select');
  const tbody = document.getElementById('dash-registrations-table-body');
  
  // Filter events by department credentials
  const availableEvents = appState.user.role === 'super_admin'
    ? events
    : events.filter(e => e.department_id === appState.user.departmentId);

  if (availableEvents.length === 0) {
    select.innerHTML = '<option value="">No events available</option>';
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted)">No active events to fetch participants list.</td></tr>';
    return;
  }

  // Populate events selector
  const prevSelectedValue = select.value;
  select.innerHTML = '';
  availableEvents.forEach(evt => {
    const option = document.createElement('option');
    option.value = evt.id;
    option.innerText = `[${evt.academic_year}] ${evt.title}`;
    select.appendChild(option);
  });

  if (prevSelectedValue && availableEvents.some(evt => evt.id === parseInt(prevSelectedValue))) {
    select.value = prevSelectedValue;
  }

  select.onchange = renderRegistrationsTable;
  document.getElementById('reg-search-input').oninput = renderRegistrationsTable;

  renderRegistrationsTable();
}

function renderRegistrationsTable() {
  const select = document.getElementById('reg-event-select');
  const tbody = document.getElementById('dash-registrations-table-body');
  const searchVal = document.getElementById('reg-search-input').value.toLowerCase();

  if (!select.value) return;

  const eventId = parseInt(select.value);
  const event = events.find(e => e.id === eventId);
  
  const list = registrations.filter(r => r.event_id === eventId && 
    (searchVal === '' || r.name.toLowerCase().includes(searchVal) || r.email.toLowerCase().includes(searchVal) || r.ticket_id.toLowerCase().includes(searchVal))
  );

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted)">No participant registrations found for this event.</td></tr>';
    return;
  }

  tbody.innerHTML = '';
  list.forEach(reg => {
    const tr = document.createElement('tr');
    const dept = departments.find(d => d.id === reg.department_id);

    tr.innerHTML = `
      <td>${reg.name}</td>
      <td>${reg.email}</td>
      <td style="font-family: monospace; font-weight:700;">${reg.ticket_id}</td>
      <td><span class="badge-tag">${dept ? dept.code : 'RIT'}</span></td>
      <td>
        <span class="status-badge ${reg.paid ? 'published' : 'draft'}">
          ${reg.paid ? 'Paid' : 'Unpaid'}
        </span>
      </td>
      <td style="text-align: center;">
        <input type="checkbox" class="attendance-check" ${reg.checked_in ? 'checked' : ''} style="width:16px; height:16px; cursor:pointer;">
      </td>
    `;

    tbody.appendChild(tr);

    // Bind check-in trigger
    tr.querySelector('.attendance-check').onchange = (e) => {
      const idx = registrations.findIndex(r => r.id === reg.id);
      if (idx !== -1) {
        registrations[idx].checked_in = e.target.checked;
        syncLocalStorage('registrations');
        addAuditLog(`Participant Attendance Check-In`, `Checked: ${reg.checked_in}`, `Checked: ${e.target.checked} (Ticket: ${reg.ticket_id})`);
        showToast(`Attendance checked: ${reg.name}`);
      }
    };
  });
}

// C. Manage Departments Dashboard (CRUD)
let activeDeptEditId = null;

function loadDepartmentsPane() {
  const tbody = document.getElementById('dash-depts-table-body');
  tbody.innerHTML = '';

  departments.forEach(dept => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700;">${dept.code}</td>
      <td style="font-weight: 600;">${dept.name}</td>
      <td>
        <img src="${dept.banner_image}" alt="Banner" style="width: 70px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border-color);">
      </td>
      <td style="max-width: 250px; font-size: 0.8rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; border:none; padding-top: 1.5rem;">${dept.description}</td>
      <td>
        <div class="actions-cell" style="justify-content: center">
          <button class="icon-btn icon-btn-edit btn-dept-edit" title="Edit Department Details">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
          <button class="icon-btn icon-btn-delete btn-dept-delete" title="Delete Department">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);

    // Bind triggers
    tr.querySelector('.btn-dept-edit').onclick = () => openDeptModal('edit', dept);
    tr.querySelector('.btn-dept-delete').onclick = () => deleteDepartment(dept.id);
  });
}

function openDeptModal(mode, dept = null) {
  const modal = document.getElementById('dept-modal');
  const modalTitle = document.getElementById('dept-modal-title');
  const code = document.getElementById('dept-form-code');
  const name = document.getElementById('dept-form-name');
  const banner = document.getElementById('dept-form-banner');
  const desc = document.getElementById('dept-form-desc');

  if (mode === 'add') {
    modalTitle.innerText = 'Add New Department';
    activeDeptEditId = null;
    code.value = '';
    name.value = '';
    banner.value = '';
    desc.value = '';
    code.disabled = false;
  } else {
    modalTitle.innerText = 'Edit Department Details';
    activeDeptEditId = dept.id;
    code.value = dept.code;
    name.value = dept.name;
    banner.value = dept.banner_image;
    desc.value = dept.description;
    code.disabled = true; // Department codes are primary key structures in URL route routing
  }

  modal.classList.remove('hidden');
}

document.getElementById('dept-form').onsubmit = (e) => {
  e.preventDefault();
  const codeVal = document.getElementById('dept-form-code').value.trim().toUpperCase();
  const nameVal = document.getElementById('dept-form-name').value.trim();
  const bannerVal = document.getElementById('dept-form-banner').value.trim();
  const descVal = document.getElementById('dept-form-desc').value.trim();

  if (activeDeptEditId === null) {
    // CRUD Create
    const newId = departments.length > 0 ? Math.max(...departments.map(d => d.id)) + 1 : 1;
    const newDept = { id: newId, name: nameVal, code: codeVal, banner_image: bannerVal, description: descVal };
    departments.push(newDept);
    syncLocalStorage('departments');
    addAuditLog('Created Department', 'N/A', `${codeVal}: ${nameVal}`);
    showDashboardAlert('success', `Department '${codeVal}' added successfully!`);
  } else {
    // CRUD Update
    const idx = departments.findIndex(d => d.id === activeDeptEditId);
    if (idx !== -1) {
      const beforeStr = `${departments[idx].code}: ${departments[idx].name}`;
      departments[idx].name = nameVal;
      departments[idx].banner_image = bannerVal;
      departments[idx].description = descVal;
      syncLocalStorage('departments');
      addAuditLog('Updated Department', beforeStr, `${codeVal}: ${nameVal}`);
      showDashboardAlert('success', `Department details for '${codeVal}' updated!`);
    }
  }

  document.getElementById('dept-modal').classList.add('hidden');
  loadDepartmentsPane();
};

function deleteDepartment(id) {
  const dept = departments.find(d => d.id === id);
  if (!dept) return;

  if (!window.confirm(`Are you sure you want to delete '${dept.name}'? This will archive all events linked to it.`)) {
    return;
  }

  departments = departments.filter(d => d.id !== id);
  syncLocalStorage('departments');
  addAuditLog('Deleted Department', `${dept.code}: ${dept.name}`, 'Deleted');
  showDashboardAlert('success', `Department '${dept.code}' and coordinator logins removed.`);
  loadDepartmentsPane();
}

// D. Manage Admins Dashboard (CRUD)
let activeAdminEditId = null;

function loadAdminsPane() {
  const tbody = document.getElementById('dash-admins-table-body');
  tbody.innerHTML = '';

  users.forEach(usr => {
    const tr = document.createElement('tr');
    const dept = departments.find(d => d.id === usr.department_id);
    const deptCode = dept ? dept.code : 'Central / Super';

    tr.innerHTML = `
      <td style="font-weight:600;">${usr.full_name}</td>
      <td style="font-family: monospace;">${usr.username}</td>
      <td><span class="badge-tag">${deptCode}</span></td>
      <td>
        <span class="status-badge ${usr.role === 'super_admin' ? 'published' : 'draft'}">
          ${usr.role === 'super_admin' ? 'Super Admin' : 'Coordinator'}
        </span>
      </td>
      <td>
        <div class="actions-cell" style="justify-content: center">
          <button class="icon-btn icon-btn-edit btn-admin-edit" title="Edit Credentials">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
          <button class="icon-btn icon-btn-delete btn-admin-delete" title="Remove Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);

    // Bind triggers
    tr.querySelector('.btn-admin-edit').onclick = () => openAdminModal('edit', usr);
    tr.querySelector('.btn-admin-delete').onclick = () => deleteAdmin(usr.id);
  });
}

function openAdminModal(mode, usr = null) {
  const modal = document.getElementById('admin-modal');
  const modalTitle = document.getElementById('admin-modal-title');
  const name = document.getElementById('admin-form-name');
  const usernameInput = document.getElementById('admin-form-user');
  const pass = document.getElementById('admin-form-pass');
  const role = document.getElementById('admin-form-role');
  const deptSelect = document.getElementById('admin-form-dept');
  const deptGroup = document.getElementById('admin-form-dept-group');

  // Load department options
  deptSelect.innerHTML = '';
  departments.forEach(d => {
    const option = document.createElement('option');
    option.value = d.id;
    option.innerText = d.name;
    deptSelect.appendChild(option);
  });

  role.onchange = () => {
    if (role.value === 'super_admin') {
      deptGroup.classList.add('hidden');
    } else {
      deptGroup.classList.remove('hidden');
    }
  };

  if (mode === 'add') {
    modalTitle.innerText = 'Create Coordinator Account';
    activeAdminEditId = null;
    name.value = '';
    usernameInput.value = '';
    usernameInput.disabled = false;
    pass.value = '';
    role.value = 'dept_admin';
    deptGroup.classList.remove('hidden');
  } else {
    modalTitle.innerText = 'Edit Coordinator Credentials';
    activeAdminEditId = usr.id;
    name.value = usr.full_name;
    usernameInput.value = usr.username;
    usernameInput.disabled = true; // Username is primary key identification credential
    pass.value = usr.password;
    role.value = usr.role;
    
    if (usr.role === 'super_admin') {
      deptGroup.classList.add('hidden');
    } else {
      deptGroup.classList.remove('hidden');
      deptSelect.value = usr.department_id;
    }
  }

  modal.classList.remove('hidden');
}

document.getElementById('admin-form').onsubmit = (e) => {
  e.preventDefault();
  const nameVal = document.getElementById('admin-form-name').value.trim();
  const userVal = document.getElementById('admin-form-user').value.trim();
  const passVal = document.getElementById('admin-form-pass').value.trim();
  const roleVal = document.getElementById('admin-form-role').value;
  const deptIdVal = roleVal === 'super_admin' ? null : parseInt(document.getElementById('admin-form-dept').value);

  if (activeAdminEditId === null) {
    // Duplicate check
    if (users.some(u => u.username === userVal)) {
      alert("Username already exists. Please pick another one.");
      return;
    }

    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUsr = { id: newId, username: userVal, password: passVal, department_id: deptIdVal, role: roleVal, full_name: nameVal };
    users.push(newUsr);
    syncLocalStorage('users');
    addAuditLog('Created Coordinator Account', 'N/A', `${userVal} (${nameVal})`);
    showDashboardAlert('success', `Coordinator account for '${nameVal}' created successfully.`);
  } else {
    const idx = users.findIndex(u => u.id === activeAdminEditId);
    if (idx !== -1) {
      const beforeStr = `${users[idx].full_name} (${users[idx].role})`;
      users[idx].full_name = nameVal;
      users[idx].password = passVal;
      users[idx].role = roleVal;
      users[idx].department_id = deptIdVal;
      syncLocalStorage('users');
      addAuditLog('Updated Coordinator Account', beforeStr, `${userVal} (${nameVal})`);
      showDashboardAlert('success', `Credentials for '${nameVal}' updated.`);
    }
  }

  document.getElementById('admin-modal').classList.add('hidden');
  loadAdminsPane();
};

function deleteAdmin(id) {
  // Prevent deleting oneself
  if (appState.user && appState.user.id === id) {
    alert("Self deletion is prohibited for security compliance.");
    return;
  }

  const usr = users.find(u => u.id === id);
  if (!usr) return;

  if (!window.confirm(`Delete administrator credentials for '${usr.full_name}' permanently?`)) {
    return;
  }

  users = users.filter(u => u.id !== id);
  syncLocalStorage('users');
  addAuditLog('Deleted Coordinator Account', `${usr.username} (${usr.full_name})`, 'Deleted');
  showDashboardAlert('success', `Account credentials for '${usr.full_name}' removed.`);
  loadAdminsPane();
}

// E. Audit Logs Search Desk
function loadLogsPane() {
  const deptFilter = document.getElementById('logs-filter-dept');
  deptFilter.innerHTML = '<option value="">All Departments</option>';
  departments.forEach(d => {
    const option = document.createElement('option');
    option.value = d.code;
    option.innerText = d.name;
    deptFilter.appendChild(option);
  });

  deptFilter.onchange = renderLogsTable;
  document.getElementById('logs-search').oninput = renderLogsTable;
  document.getElementById('logs-filter-date').onchange = renderLogsTable;

  renderLogsTable();
}

function renderLogsTable() {
  const searchVal = document.getElementById('logs-search').value.toLowerCase();
  const deptVal = document.getElementById('logs-filter-dept').value;
  const dateVal = document.getElementById('logs-filter-date').value;
  const tbody = document.getElementById('dash-logs-table-body');

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = searchVal === '' || 
      log.user.toLowerCase().includes(searchVal) || 
      log.action.toLowerCase().includes(searchVal) || 
      log.details.toLowerCase().includes(searchVal);

    const matchesDept = deptVal === '' || log.department === deptVal;

    let matchesDate = true;
    if (dateVal !== '') {
      const logDate = log.timestamp.split('T')[0];
      matchesDate = logDate === dateVal;
    }

    return matchesSearch && matchesDept && matchesDate;
  });

  if (filteredLogs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted)">No system logs matching search filters.</td></tr>';
    return;
  }

  tbody.innerHTML = '';
  filteredLogs.forEach(log => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="white-space:nowrap; font-weight:600;">${new Date(log.timestamp).toLocaleString()}</td>
      <td style="font-weight:600;">${log.user}</td>
      <td><span class="badge-tag">${log.department}</span></td>
      <td>${log.ip}</td>
      <td style="font-size:0.75rem; color: var(--text-secondary);">${log.env}</td>
      <td style="color: var(--accent-gold); font-weight:600;">${log.action}</td>
      <td style="font-size: 0.75rem; max-width:200px; overflow:hidden; text-overflow:ellipsis;" title="${log.details}">${log.details}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Clear logs action
document.getElementById('btn-logs-clear').onclick = () => {
  if (!window.confirm("Purge system audit history permanently? This action requires compliance logging.")) {
    return;
  }
  const beforeLen = auditLogs.length;
  auditLogs = [];
  syncLocalStorage('audit_logs');
  addAuditLog("System Logs History Cleared", `${beforeLen} logs`, "0 logs");
  showDashboardAlert('success', "Audit history purged.");
  renderLogsTable();
};

// Excel and PDF Exports binds
document.getElementById('btn-logs-export').onclick = () => {
  exportToExcel(auditLogs, 'System_Audit_Logs');
};

document.getElementById('btn-reg-export-excel').onclick = () => {
  const select = document.getElementById('reg-event-select');
  if (!select.value) return;
  const eventId = parseInt(select.value);
  const list = registrations.filter(r => r.event_id === eventId);
  const event = events.find(e => e.id === eventId);
  exportToExcel(list, `${event.title.replace(/\s+/g, '_')}_Registrants`);
};

document.getElementById('btn-reg-export-pdf').onclick = () => {
  const select = document.getElementById('reg-event-select');
  if (!select.value) return;
  const eventId = parseInt(select.value);
  const list = registrations.filter(r => r.event_id === eventId);
  const event = events.find(e => e.id === eventId);
  exportRegistrationsToPDF(list, event);
};

// Excel sheet creator helper
function exportToExcel(data, fileNamePrefix) {
  if (data.length === 0) {
    showToast("No data to export.");
    return;
  }
  
  const cleanData = data.map(item => {
    // Remove unwanted visual HTML or deep object props
    const copy = { ...item };
    delete copy.id;
    return copy;
  });

  const ws = XLSX.utils.json_to_sheet(cleanData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data Export");
  
  XLSX.writeFile(wb, `${fileNamePrefix}_${new Date().toISOString().slice(0,10)}.xlsx`);
  showToast("Excel spreadsheet generated and downloaded successfully!");
}

// PDF registration lists compilations
function exportRegistrationsToPDF(list, event) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(30, 58, 138);
  doc.text("Rajarambapu Institute of Technology", 14, 20);
  
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(`Participants list for college activity: ${event.title}`, 14, 25);
  doc.text(`Date of Event: ${event.event_date} | Total Registrants: ${list.length}`, 14, 30);

  doc.setLineWidth(0.01);
  doc.setDrawColor(226, 232, 240);
  doc.line(14, 34, 196, 34);

  // Table header
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text("Ticket ID", 14, 40);
  doc.text("Student Name", 55, 40);
  doc.text("Email ID", 115, 40);
  doc.text("Check-In", 175, 40);
  doc.line(14, 43, 196, 43);

  // Table rows
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  let y = 50;
  
  list.forEach((reg, idx) => {
    if (y > 275) {
      doc.addPage();
      y = 20;
    }
    
    doc.text(reg.ticket_id, 14, y);
    doc.text(reg.name.substring(0, 24), 55, y);
    doc.text(reg.email.substring(0, 26), 115, y);
    doc.text(reg.checked_in ? "YES" : "NO", 175, y);
    
    doc.line(14, y + 3, 196, y + 3);
    y += 10;
  });

  doc.save(`${event.title.replace(/\s+/g, '_')}_Registrants.pdf`);
  showToast("Registrants PDF report compiled and downloaded!");
}

// Backup DB snapshot
document.getElementById('btn-backup-db').onclick = () => {
  const dbSnapshot = {
    departments: departments,
    users: users,
    events: events,
    registrations: registrations,
    auditLogs: auditLogs
  };

  const jsonStr = JSON.stringify(dbSnapshot, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `RIT_EventPortal_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  addAuditLog("System Database Backup Downloaded", "N/A", "Backup JSON file generated.");
  showToast("Database state backup JSON downloaded!");
};

// Restore DB snapshot
document.getElementById('db-restore-file').onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.departments && data.users && data.events && data.registrations && data.auditLogs) {
        // Overwrite memory variables
        departments = data.departments;
        users = data.users;
        events = data.events;
        registrations = data.registrations;
        auditLogs = data.auditLogs;

        // Persist back to local storage
        syncLocalStorage();
        
        addAuditLog("System Database Restored from Backup", "N/A", `Restored from file: ${file.name}`);
        showToast("Database restored successfully! Re-rendering page...");
        
        // Reload dashboard views to render restored data
        loadDashboardView();
      } else {
        alert("Invalid database backup file format. Missing core list attributes.");
      }
    } catch (err) {
      alert("Failed to parse the backup JSON file. Ensure correct format.");
    }
  };
  reader.readAsText(file);
};

// F. Analytics Panel (Chart.js charts generation)
function loadAnalyticsPane() {
  const currentDate = '2026-08-20';

  // Filters counts based on role permissions
  const activeEvents = appState.user.role === 'super_admin'
    ? events
    : events.filter(e => e.department_id === appState.user.departmentId);

  const total = activeEvents.length;
  const upcoming = activeEvents.filter(e => e.event_date >= currentDate).length;
  const completed = total - upcoming;

  document.getElementById('dash-stat-total').innerText = total;
  document.getElementById('dash-stat-upcoming').innerText = upcoming;
  document.getElementById('dash-stat-completed').innerText = completed;

  // Clean old charts if exist
  if (deptChartInstance) deptChartInstance.destroy();
  if (yearChartInstance) yearChartInstance.destroy();
  if (monthChartInstance) monthChartInstance.destroy();
  if (popularChartInstance) popularChartInstance.destroy();

  // 1. Chart 1: Department distribution (Super admin only)
  const deptWrapper = document.getElementById('chart-dept-wrapper');
  if (appState.user.role === 'super_admin') {
    deptWrapper.classList.remove('hidden');
    const deptCounts = {};
    activeEvents.forEach(e => {
      const d = departments.find(dep => dep.id === e.department_id);
      const code = d ? d.code : 'Unknown';
      deptCounts[code] = (deptCounts[code] || 0) + 1;
    });

    const ctx = document.getElementById('canvas-dept-chart').getContext('2d');
    deptChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(deptCounts),
        datasets: [{
          data: Object.values(deptCounts),
          backgroundColor: ['#1e3a8a', '#b45309', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899', '#3b82f6'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Outfit' } } }
        }
      }
    });
  } else {
    deptWrapper.classList.add('hidden');
  }

  // 2. Chart 2: Academic Year Timeline
  const yearCounts = {};
  activeEvents.forEach(e => {
    yearCounts[e.academic_year] = (yearCounts[e.academic_year] || 0) + 1;
  });

  const ctxYear = document.getElementById('canvas-year-chart').getContext('2d');
  yearChartInstance = new Chart(ctxYear, {
    type: 'bar',
    data: {
      labels: Object.keys(yearCounts),
      datasets: [{
        label: 'Events Count',
        data: Object.values(yearCounts),
        backgroundColor: '#b45309',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });

  // 3. Chart 3: Monthly Scheduling Velocity
  const monthlyCounts = Array(12).fill(0);
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  activeEvents.forEach(e => {
    const month = parseInt(e.event_date.split('-')[1]) - 1; // 0-indexed month
    if (!isNaN(month)) monthlyCounts[month]++;
  });

  const ctxMonth = document.getElementById('canvas-month-chart').getContext('2d');
  monthChartInstance = new Chart(ctxMonth, {
    type: 'line',
    data: {
      labels: monthLabels,
      datasets: [{
        label: 'Events Velocity',
        data: monthlyCounts,
        borderColor: '#1e3a8a',
        backgroundColor: 'rgba(30, 58, 138, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      }
    }
  });

  // 4. Chart 4: Popularity Leaderboard (Views, Registrations, Downloads)
  const popularList = [...activeEvents].sort((a,b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  const labels = popularList.map(e => e.title.substring(0, 15) + '...');
  
  const datasetViews = popularList.map(e => e.views || 0);
  const datasetRegs = popularList.map(e => registrations.filter(r => r.event_id === e.id).length);
  const datasetDownloads = popularList.map(e => e.downloads || 0);

  const ctxPopular = document.getElementById('canvas-popular-chart').getContext('2d');
  popularChartInstance = new Chart(ctxPopular, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        { label: 'Views Count', data: datasetViews, backgroundColor: 'rgba(30, 58, 138, 0.85)' },
        { label: 'Registrations', data: datasetRegs, backgroundColor: 'rgba(16, 185, 129, 0.85)' },
        { label: 'Brochures Downloaded', data: datasetDownloads, backgroundColor: 'rgba(180, 83, 9, 0.85)' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: { beginAtZero: true }
      }
    }
  });
}

// --- 8. EVENTS CREATION & EDIT MODALS SYSTEM ---

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

    // Clear form inputs
    document.getElementById('form-title').value = '';
    document.getElementById('form-desc').value = '';
    document.getElementById('form-year').value = '2025-2026';
    document.getElementById('form-category').value = 'Technical';
    document.getElementById('form-fees').value = 'Free';
    document.getElementById('form-date').value = '';
    document.getElementById('form-time').value = '10:00';
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

    // Load inputs
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
    showDashboardAlert('danger', 'Registration deadline date must be on or before the event execution date.');
    return;
  }

  // Pack variables
  const eventData = {
    title: document.getElementById('form-title').value.trim(),
    description: document.getElementById('form-desc').value.trim(),
    department_id: parseInt(document.getElementById('form-dept').value),
    academic_year: document.getElementById('form-year').value,
    category: document.getElementById('form-category').value,
    fees: document.getElementById('form-fees').value.trim(),
    event_date: dateVal,
    event_time: document.getElementById('form-time').value.trim(),
    venue: document.getElementById('form-venue').value.trim(),
    registration_deadline: deadlineVal,
    registration_link: document.getElementById('form-reglink').value.trim(),
    faculty_coordinator: document.getElementById('form-faculty').value.trim(),
    student_coordinator: document.getElementById('form-student').value.trim(),
    contact_1: document.getElementById('form-contact-1').value.trim(),
    contact_2: document.getElementById('form-contact-2').value.trim(),
    contact_3: document.getElementById('form-contact-3').value.trim(),
    status: document.getElementById('form-status').value,
    poster_image: document.getElementById('form-poster').value.trim() || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60',
    payment_qr: document.getElementById('form-qr').value.trim()
  };

  if (activeModalMode === 'add') {
    // Generate new event id
    const newId = events.length > 0 ? Math.max(...events.map(item => item.id)) + 1 : 1;
    eventData.id = newId;
    eventData.views = 0;
    eventData.downloads = 0;
    
    events.push(eventData);
    syncLocalStorage('events');
    addAuditLog('Created Event', 'N/A', `${eventData.title} (${eventData.status})`);
    showDashboardAlert('success', `New event '${eventData.title}' submitted! status: ${eventData.status}`);
  } else {
    // Update event record
    const idx = events.findIndex(item => item.id === activeModalEventId);
    if (idx !== -1) {
      const beforeStr = `${events[idx].title} (${events[idx].status})`;
      events[idx] = {
        ...events[idx],
        ...eventData
      };
      syncLocalStorage('events');
      addAuditLog('Updated Event Details', beforeStr, `${eventData.title} (${eventData.status})`);
      showDashboardAlert('success', `Event '${eventData.title}' configurations saved.`);
    }
  }

  document.getElementById('event-modal').classList.add('hidden');
  loadDashboardTable();
}

function deleteEvent(id) {
  const event = events.find(e => e.id === id);
  if (!event) return;

  if (!window.confirm(`Delete the event record for '${event.title}' permanently?`)) {
    return;
  }

  events = events.filter(item => item.id !== id);
  syncLocalStorage('events');
  addAuditLog('Deleted Event', `${event.title}`, 'Deleted');
  
  showDashboardAlert('success', `Event record '${event.title}' has been successfully deleted.`);
  loadDashboardTable();
}

function showDashboardAlert(type, text) {
  const alertBox = document.getElementById('dash-alert');
  alertBox.className = `alert alert-${type}`;
  alertBox.innerText = text;
  alertBox.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 9. AUTHORIZATION ACCESS CONTROLS (LOGIN/LOGOUT) ---

function handleLoginSubmit(e) {
  e.preventDefault();
  const userVal = document.getElementById('username').value.trim();
  const passVal = document.getElementById('password').value.trim();
  const errorBox = document.getElementById('login-error');

  errorBox.classList.add('hidden');

  const foundUser = users.find(u => u.username === userVal && u.password === passVal);
  if (foundUser) {
    const dept = departments.find(d => d.id === foundUser.department_id);

    // Pack session
    appState.user = {
      id: foundUser.id,
      username: foundUser.username,
      fullName: foundUser.full_name,
      role: foundUser.role,
      departmentId: foundUser.department_id,
      departmentName: dept ? dept.name : null,
      departmentCode: dept ? dept.code : null
    };

    sessionStorage.setItem('rit_user', JSON.stringify(appState.user));
    
    // Toggle header menus
    document.getElementById('nav-dashboard').classList.remove('hidden');
    document.getElementById('nav-login').classList.add('hidden');

    addAuditLog('User Logged In');
    navigateTo('dashboard');
  } else {
    errorBox.innerText = 'Invalid credential password combinations. Please review credentials checklist.';
    errorBox.classList.remove('hidden');
  }
}

function handleLogout() {
  if (appState.user) {
    addAuditLog('User Logged Out');
  }
  
  appState.user = null;
  sessionStorage.removeItem('rit_user');

  // Toggle header menus
  document.getElementById('nav-dashboard').classList.add('hidden');
  document.getElementById('nav-login').classList.remove('hidden');

  navigateTo('home');
}

// --- 10. PORTAL INITIALIZATION & LIFE HOOKS ---

document.addEventListener('DOMContentLoaded', () => {
  // Sync databases structures
  initDatabase();

  // Load local theme setting
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

  // Session retrieval
  const cachedSession = sessionStorage.getItem('rit_user');
  if (cachedSession) {
    appState.user = JSON.parse(cachedSession);
    document.getElementById('nav-dashboard').classList.remove('hidden');
    document.getElementById('nav-login').classList.add('hidden');
  }

  // Header Nav listeners
  document.getElementById('nav-logo').onclick = () => navigateTo('home');
  document.getElementById('nav-home').onclick = () => navigateTo('home');
  document.getElementById('nav-login').onclick = () => navigateTo('login');
  document.getElementById('nav-dashboard').onclick = () => navigateTo('dashboard');
  const navCert = document.getElementById('nav-certificates');
  if (navCert) {
    navCert.onclick = () => navigateTo('certificates');
  }

  // Core actions buttons
  document.getElementById('dash-logout').onclick = handleLogout;
  document.getElementById('add-event-btn').onclick = () => openEventModal('add');
  document.getElementById('modal-close-btn').onclick = () => document.getElementById('event-modal').classList.add('hidden');
  document.getElementById('form-cancel-btn').onclick = () => document.getElementById('event-modal').classList.add('hidden');
  
  // Custom dashboard buttons
  document.getElementById('add-dept-btn').onclick = () => openDeptModal('add');
  document.getElementById('add-admin-btn').onclick = () => openAdminModal('add');

  // Submit bindings
  document.getElementById('event-form').onsubmit = handleEventFormSubmit;
  document.getElementById('login-form').onsubmit = handleLoginSubmit;
  document.getElementById('dept-back-btn').onclick = () => navigateTo('home');
  document.getElementById('certificate-form').onsubmit = (e) => e.preventDefault(); // Controlled in trigger
  
  // Temporary title clear on print to hide browser page title header
  let originalTitle = document.title;
  window.addEventListener('beforeprint', () => {
    originalTitle = document.title;
    document.title = '\u200B';
  });
  window.addEventListener('afterprint', () => {
    document.title = originalTitle;
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.viewName) {
      navigateTo(event.state.viewName, event.state.params, false);
    } else {
      navigateTo('home', {}, false);
    }
  });

  // Set initial history state for home view
  try {
    history.replaceState({ viewName: 'home', params: {} }, "");
  } catch (e) {
    console.warn("Could not replace initial history state:", e);
  }

  // Launch Home View
  navigateTo('home', {}, false);
});
