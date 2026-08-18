/* Resume-Grounded Projects Engine for Shivangi Gupta */

export const projectsData = [
  {
    id: "campus-placement-portal",
    num: "FEATURED PROJECT 01",
    title: "Campus Placement Portal",
    url: "https://campus-placement-portal-website.vercel.app/",
    githubUrl: "https://github.com/shivangi-guptaa/Campus-Placement-Portal",
    desc: "Full-stack placement portal supporting Student, Recruiter, and Admin roles with JWT authentication.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Axios", "Tailwind CSS"],
    scaleMetrics: [
      { label: "REST APIs", value: "20 Endpoints" },
      { label: "Database Schema", value: "10+ Relational Tables" },
      { label: "Role System", value: "3 Roles (Student/Recruiter/Admin)" },
      { label: "Security & Access", value: "JWT + RBAC Middleware" }
    ],
    highlights: [
      "Developed a full-stack placement portal supporting Student, Recruiter, and Admin roles with JWT-based authentication and role-based authorization.",
      "Developed 20 REST API endpoints for authentication, job postings, applications, recruiter workflows, and administrative operations.",
      "Designed a normalized MySQL database with 10+ related tables using foreign key constraints and indexes.",
      "Implemented dynamic search and filtering by CGPA, branch, and skills using React.js and Axios."
    ],
    mockupAddress: "campus-placement-portal-website.vercel.app",
    mockupImage: "./assets/campus_placement_portal.png",
    caseStudy: {
      problem: "University placement management requires a unified portal to handle candidate eligibility evaluation, job postings, and multi-role application workflows efficiently.",
      solution: "Engineered a full-stack portal connecting students, recruiters, and admins through 20 REST APIs, JWT authentication, and a normalized MySQL database.",
      architectureFlow: [
        { layer: "Frontend Layer", tech: "React.js + Tailwind CSS", detail: "Dynamic filtering, state management, Axios API calls" },
        { layer: "Backend Server", tech: "Node.js + Express.js", detail: "20 REST API endpoints, routing, error handling" },
        { layer: "Security Middleware", tech: "JWT + RBAC", detail: "Role-based authorization (Student / Recruiter / Admin)" },
        { layer: "Database Layer", tech: "MySQL Relational DB", detail: "10+ related tables, foreign key constraints, indexes" }
      ],
      apiDesign: [
        "POST /api/auth/login - Authenticates user and issues signed JWT with role payload",
        "GET /api/jobs/search - Fetches job postings filtered dynamically by CGPA & branch",
        "POST /api/applications/apply - Submits candidate job applications with validation",
        "GET /api/admin/drives - Manages recruitment drives and applicant rosters"
      ],
      challenges: "Handled relational consistency and duplicate application concerns through database constraints and application-level validation.",
      learnings: "Gained practical expertise in relational database normalization, multi-table SQL joins, foreign key constraints, JWT role authorization, and asynchronous REST API integration."
    }
  },
  {
    id: "mirrortalk",
    num: "PROJECT 02",
    title: "MirrorTalk – Mental Wellness Platform",
    url: "https://mirrortalk-app.vercel.app/",
    githubUrl: "https://github.com/shivangi-guptaa/MirrorTalk",
    desc: "Full-Stack Journaling & Mood Analytics Platform with dual authentication and data visualization.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Google OAuth", "Recharts"],
    scaleMetrics: [
      { label: "Authentication", value: "JWT + Google OAuth" },
      { label: "Data Visualization", value: "Recharts Dashboards" },
      { label: "File Storage", value: "Multer Middleware" },
      { label: "Password Security", value: "bcrypt Hashing" }
    ],
    highlights: [
      "Implemented authentication using JWT, Google OAuth, bcrypt password hashing, email verification, and password reset functionality.",
      "Developed REST APIs for journaling, mood tracking, profile management, and file uploads with validation using Express.js and MySQL.",
      "Built interactive dashboards with Recharts to visualize mood trends, journaling history, and user engagement."
    ],
    mockupAddress: "mirrortalk-app.vercel.app",
    mockupUI: `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; padding: 1.2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; font-weight: 600;">Personal Analytics Dashboard</span>
          <span class="badge badge-accent" style="font-size: 0.75rem;">Google OAuth 2.0</span>
        </div>

        <div style="background: var(--bg-primary); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.4rem;">
            <span>Recharts Mood Analytics</span>
            <span style="color: var(--accent-primary);">Weekly Trend &uarr;</span>
          </div>
          <svg viewBox="0 0 200 40" style="width: 100%; height: 40px; overflow: visible;">
            <path d="M0,30 Q30,10 60,25 T120,8 T180,20 T200,5" fill="none" stroke="var(--accent-primary)" stroke-width="2" />
            <circle cx="60" cy="25" r="3" fill="var(--accent-primary)" />
            <circle cx="120" cy="8" r="3" fill="var(--accent-primary)" />
            <circle cx="180" cy="20" r="3" fill="var(--accent-primary)" />
          </svg>
        </div>

        <div style="background: var(--bg-primary); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem;">
          <span>Daily Journaling Log</span>
          <span style="color: var(--text-muted); font-size: 0.75rem;">Password Reset &bull; Multer Uploads</span>
        </div>
      </div>
    `,
    caseStudy: {
      problem: "Users require a secure full-stack platform to record journal entries and visualize personal mood analytics securely over time.",
      solution: "Developed a platform with Google OAuth and JWT authentication, bcrypt password security, Multer media handling, and Recharts interactive graphs.",
      architectureFlow: [
        { layer: "Frontend Layer", tech: "React.js + Recharts", detail: "Interactive analytics dashboards, journaling UI" },
        { layer: "Authentication", tech: "JWT + Google OAuth", detail: "Social OAuth 2.0, bcrypt hashed passwords, email verification" },
        { layer: "Backend Server", tech: "Express.js REST APIs", detail: "Protected routes, profile management, Multer file uploads" },
        { layer: "Database Layer", tech: "MySQL Schema", detail: "User credentials, journal records, mood logs" }
      ],
      apiDesign: [
        "POST /api/auth/google - Authenticates user session via Google OAuth 2.0",
        "POST /api/journal/create - Saves journal entry with file attachment validation",
        "GET /api/analytics/mood - Fetches aggregated mood tracking history"
      ],
      challenges: "Integrating dual authentication mechanisms (custom JWT login and Google OAuth) with unified session security.",
      learnings: "Mastered OAuth 2.0 integration, file upload handling with Multer, data security with bcrypt, and dynamic analytics graph rendering with Recharts."
    }
  }
];

export function initProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projectsData.map((project, idx) => `
    <article class="project-editorial-card reveal-on-scroll stagger-${idx + 1}" id="project-card-${project.id}">
      <div class="project-info-side">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span class="project-number">${project.num}</span>
          ${project.id === 'campus-placement-portal' ? `<span class="badge badge-accent" style="font-size: 0.7rem; font-weight: 700;">★ MAIN FEATURED PROJECT</span>` : ''}
        </div>
        
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc-text">${project.desc}</p>

        <!-- Scale Metrics Box -->
        <div class="project-scale-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem; margin-bottom: 1.2rem;">
          ${project.scaleMetrics.map(m => `
            <div style="background: var(--bg-primary); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-code); text-transform: uppercase;">${m.label}</div>
              <div style="font-size: 0.92rem; font-weight: 700; color: var(--accent-primary);">${m.value}</div>
            </div>
          `).join('')}
        </div>

        <ul class="project-highlights-list">
          ${project.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>

        <div class="project-tech-tags">
          ${project.techStack.map(t => `<span class="badge badge-accent">${t}</span>`).join('')}
        </div>

        <div class="project-links-row" style="margin-top: 1.5rem;">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <button class="btn btn-outline btn-sm open-casestudy-btn" data-project-id="${project.id}">
            Case Study &rarr;
          </button>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- Browser Window Mockup -->
        <div class="browser-mockup-frame">
          <div class="browser-header">
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="browser-address-bar">https://${project.mockupAddress}</div>
          </div>
          <div class="browser-content" style="padding: 0;">
            ${project.mockupImage 
              ? `<img src="${project.mockupImage}" alt="${project.title} Screenshot" style="width: 100%; height: auto; display: block; object-fit: cover;" />`
              : project.mockupUI.trim()
            }
          </div>
        </div>

        <!-- System Architecture Flow Diagram Card -->
        <div class="architecture-diagram-card">
          <div class="arch-card-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><rect x="2" y="2" width="8" height="8" rx="2"></rect><rect x="14" y="2" width="8" height="8" rx="2"></rect><rect x="14" y="14" width="8" height="8" rx="2"></rect><rect x="2" y="14" width="8" height="8" rx="2"></rect></svg>
            <span>System Architecture Flow</span>
          </div>
          <div class="arch-flow-pipeline">
            <div class="arch-step-node">React (Frontend)</div>
            <div class="arch-arrow">&rarr;</div>
            <div class="arch-step-node">Axios REST</div>
            <div class="arch-arrow">&rarr;</div>
            <div class="arch-step-node">Express + JWT/RBAC</div>
            <div class="arch-arrow">&rarr;</div>
            <div class="arch-step-node">MySQL DB</div>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Attach Case Study Modal Listeners
  document.querySelectorAll('.open-casestudy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = e.currentTarget.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projId);
      if (project) openCaseStudyModal(project);
    });
  });
}

function openCaseStudyModal(project) {
  const modal = document.getElementById('skill-modal');
  const modalBody = document.getElementById('skill-modal-body');
  if (!modal || !modalBody) return;

  const { caseStudy } = project;

  modalBody.innerHTML = `
    <div style="padding-right: 1.5rem;">
      <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700;">ENGINEERING CASE STUDY</span>
      <h2 style="font-size: 1.6rem; margin-top: 0.3rem; margin-bottom: 0.6rem; color: var(--text-primary);">${project.title}</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">${project.desc}</p>

      <div style="display: flex; gap: 0.8rem; margin-bottom: 1.5rem;">
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Live Demo ↗</a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub ↗</a>
      </div>

      <!-- Problem & Solution -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.4rem;">1. Problem Statement</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${caseStudy.problem}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.4rem;">2. What Was Built & Solution</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${caseStudy.solution}</p>
      </div>

      <!-- System Architecture Stack -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.6rem;">3. End-to-End Architecture Flow</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; background: var(--bg-primary); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          ${caseStudy.architectureFlow.map(f => `
            <div style="display: flex; align-items: baseline; justify-content: space-between; font-size: 0.82rem;">
              <span style="font-weight: 700; color: var(--text-primary); font-family: var(--font-code);">${f.layer}:</span>
              <span style="color: var(--accent-primary); font-weight: 600;">${f.tech}</span>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.3rem;">${f.detail}</div>
          `).join('')}
        </div>
      </div>

      <!-- Key API Design -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">4. Key API Endpoints & Design</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem;">
          ${caseStudy.apiDesign.map(api => `
            <li style="font-family: var(--font-code); font-size: 0.8rem; background: var(--bg-primary); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: var(--text-secondary);">
              ${api}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Engineering Challenges & Learnings -->
      <div style="margin-bottom: 1rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.3rem;">5. Key Technical Challenge</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${caseStudy.challenges}</p>

        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.3rem;">6. What I Learned</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${caseStudy.learnings}</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
