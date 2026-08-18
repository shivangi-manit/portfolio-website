/* Skills & About Tags Interactive Modal Popup Controller */

const skillDetailsMap = {
  "React.js": {
    category: "Frontend Framework",
    desc: "Used in Campus Placement Portal & MirrorTalk for component architecture, custom hooks, state management, and real-time Axios API updates.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Node.js": {
    category: "Backend Environment",
    desc: "Powering the REST API services, asynchronous event handlers, and server architecture for full-stack web applications.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Express.js": {
    category: "Backend Web Framework",
    desc: "Used to construct 20+ RESTful APIs, JWT authentication middleware, CORS configuration, and request validation routes.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "MySQL": {
    category: "Relational Database",
    desc: "Normalized database design with 10+ tables, primary/foreign key relationships, indexing, and multi-table joins for efficient data retrieval.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "C++": {
    category: "Core Language",
    desc: "Primary language for Data Structures & Algorithms. Earned 5-Star C++ Badge on HackerRank and solved 250+ DSA problems.",
    projects: ["250+ DSA Problems (LeetCode / HackerRank)"]
  },
  "Tailwind CSS": {
    category: "Frontend Styling",
    desc: "Utility-first CSS framework utilized for building responsive, accessible UI layouts for the Campus Placement Portal.",
    projects: ["Campus Placement Portal"]
  },
  "HTML5": {
    category: "Web Standard",
    desc: "Semantic layout structuring, accessible ARIA attributes, and clean DOM hierarchy across all frontend projects.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "CSS3": {
    category: "Web Styling",
    desc: "Custom CSS properties (variables), responsive flexbox/grid layouts, animations, and dark/light theme systems.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "REST APIs": {
    category: "Backend Architecture",
    desc: "Designed and implemented 20+ RESTful API endpoints for authentication, job applications, mood tracking, and recruiter workflows.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "JWT Authentication": {
    category: "Security & Auth",
    desc: "JSON Web Token implementation for role-based authorization (Student, Recruiter, Admin) and stateless session management.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Google OAuth": {
    category: "OAuth 2.0 Security",
    desc: "Integrated Google OAuth 2.0 authentication for seamless user sign-in and account verification.",
    projects: ["MirrorTalk"]
  },
  "Email Verification": {
    category: "Security Workflow",
    desc: "Automated account verification emails and password reset links with secure token expiration.",
    projects: ["MirrorTalk"]
  },
  "Password Reset": {
    category: "Security Workflow",
    desc: "Bcrypt password hashing and secure token-based password recovery functionality.",
    projects: ["MirrorTalk"]
  },
  "Multer": {
    category: "Node.js Middleware",
    desc: "Middleware handling multipart/form-data for file uploads, profile avatars, and document attachments.",
    projects: ["MirrorTalk"]
  },
  "SailPoint IdentityIQ": {
    category: "Identity & Governance",
    desc: "Configured identity lifecycle management, role-based access control (RBAC), and Joiner-Mover-Leaver capstone workflows during Accenture internship.",
    projects: ["Accenture Software Engineering Internship"]
  },
  "Git": {
    category: "Version Control",
    desc: "Distributed version control for code tracking, branching strategy, and pull request workflows.",
    projects: ["All Open Source Repositories"]
  },
  "GitHub": {
    category: "Code Hosting",
    desc: "Repository management, CI/CD actions, and project showcase hosting.",
    projects: ["github.com/shivangi-guptaa"]
  },
  "Postman": {
    category: "API Testing Tool",
    desc: "API endpoint testing, mock servers, and automated collection testing. Earned Postman Student Expert Certification.",
    projects: ["Certified Postman Student Expert"]
  },
  "VS Code": {
    category: "Primary IDE",
    desc: "Customized development environment for JavaScript, React, C++, and Node.js.",
    projects: ["Development Workspace"]
  },
  "Vercel": {
    category: "Cloud Deployment",
    desc: "Production hosting platform for live full-stack project deployments with automated GitHub integration.",
    projects: ["mirrortalk-app.vercel.app", "campus-placement-portal-website.vercel.app"]
  },
  "JavaScript (ES6)": {
    category: "Core Language",
    desc: "Modern ES6+ syntax including async/await, ES modules, promises, destructuring, and functional array methods.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "SQL": {
    category: "Database Query Language",
    desc: "Complex database queries, index creation, multi-table JOIN operations, and schema normalization.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Schema Design": {
    category: "Database Engineering",
    desc: "Normalized 3NF relational database schema design with primary/foreign key constraints.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Joins": {
    category: "Database Operations",
    desc: "INNER, LEFT, and RIGHT multi-table JOIN operations for relational data aggregation.",
    projects: ["Campus Placement Portal"]
  },
  "Indexing": {
    category: "Database Optimization",
    desc: "B-Tree database indexing on high-frequency query columns to optimize data retrieval performance.",
    projects: ["Campus Placement Portal"]
  }
};

export function initSkillModal() {
  const modalBackdrop = document.getElementById('skill-modal');
  const modalCloseBtn = document.getElementById('skill-modal-close');
  const modalBody = document.getElementById('skill-modal-body');

  if (!modalBackdrop || !modalCloseBtn || !modalBody) return;

  // Make every skill tag interactive across About & Skills section
  document.addEventListener('click', (e) => {
    const tagEl = e.target.closest('.editorial-tag');
    if (tagEl) {
      const skillName = tagEl.textContent.trim();
      const details = skillDetailsMap[skillName] || {
        category: "Technical Skill",
        desc: `${skillName} is a core component of Shivangi's software engineering toolkit used across full-stack applications and DSA problem solving.`,
        projects: ["Campus Placement Portal", "MirrorTalk"]
      };

      openSkillModal(skillName, details, modalBackdrop, modalBody);
    }
  });

  modalCloseBtn.addEventListener('click', () => closeSkillModal(modalBackdrop));
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeSkillModal(modalBackdrop);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeSkillModal(modalBackdrop);
    }
  });
}

function openSkillModal(skillName, details, backdrop, modalBody) {
  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
      <div>
        <span class="section-label" style="margin-bottom: 0.2rem;">${details.category}</span>
        <h2 style="font-size: 1.8rem; margin: 0; color: var(--text-primary);">${skillName}</h2>
      </div>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
      ${details.desc}
    </p>

    <div style="background: var(--bg-primary); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-medium);">
      <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Relevant Experience & Projects</span>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${details.projects.map(p => `<span class="badge badge-accent">${p}</span>`).join('')}
      </div>
    </div>
  `;

  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeSkillModal(backdrop) {
  backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}
