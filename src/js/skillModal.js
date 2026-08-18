/* Resume-Grounded Skills Modal Popup Engine */

const skillDetailsMap = {
  // Languages
  "C++": {
    category: "Languages",
    desc: "Primary programming language for Data Structures & Algorithms. Earned 5-Star C++ Badge on HackerRank and solved 250+ DSA problems.",
    projects: ["250+ DSA Problems (LeetCode & HackerRank)"]
  },
  "JavaScript (ES6)": {
    category: "Languages",
    desc: "Core scripting language used for frontend React.js components, asynchronous API calls, and backend Node.js / Express.js services.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "SQL": {
    category: "Languages",
    desc: "Structured Query Language utilized for relational database queries, table joins, schema creation, and database constraints.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },

  // Frontend
  "React.js": {
    category: "Frontend",
    desc: "Frontend library used in Campus Placement Portal & MirrorTalk for interactive component architecture, state management, and real-time Axios API updates.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "HTML5": {
    category: "Frontend",
    desc: "Standard markup language for semantic page structuring and accessible DOM layouts.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "CSS3": {
    category: "Frontend",
    desc: "Cascading style sheets for responsive layouts, custom CSS design system properties, animations, and theme styling.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Tailwind CSS": {
    category: "Frontend",
    desc: "Utility-first CSS framework utilized for building responsive, accessible UI layouts for the Campus Placement Portal.",
    projects: ["Campus Placement Portal"]
  },

  // Backend
  "Node.js": {
    category: "Backend",
    desc: "JavaScript runtime powering asynchronous server architectures, REST API endpoints, and backend application logic.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Express.js": {
    category: "Backend",
    desc: "Backend framework used to build 20 REST API endpoints, JWT authentication middleware, routing, and request validation.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "REST APIs": {
    category: "Backend",
    desc: "Designed and implemented 20 RESTful API endpoints for authentication, job postings, candidate applications, and user profiles.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "JWT": {
    category: "Backend",
    desc: "JSON Web Token implementation for role-based authorization (Student, Recruiter, Admin) and stateless session security.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "OAuth": {
    category: "Backend",
    desc: "Integrated Google OAuth 2.0 social authentication for user sign-in and account verification.",
    projects: ["MirrorTalk"]
  },
  "Multer": {
    category: "Backend",
    desc: "Node.js middleware handling multipart/form-data for file upload processing and document attachments.",
    projects: ["MirrorTalk"]
  },

  // Database
  "MySQL": {
    category: "Database",
    desc: "Relational database system configured with 10+ normalized tables, foreign key constraints, and indexing.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Schema Design": {
    category: "Database",
    desc: "Relational database schema normalization (3NF) using foreign keys and structured table relationships.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "Joins": {
    category: "Database",
    desc: "Multi-table SQL JOIN operations for retrieving relational data across users, job postings, and application records.",
    projects: ["Campus Placement Portal"]
  },
  "Indexing": {
    category: "Database",
    desc: "Database indexing on high-frequency query columns to optimize data retrieval execution speeds.",
    projects: ["Campus Placement Portal"]
  },

  // Tools
  "Git": {
    category: "Tools",
    desc: "Distributed version control system for tracking code changes and managing development history.",
    projects: ["All Repositories"]
  },
  "GitHub": {
    category: "Tools",
    desc: "Code repository hosting, project showcase management, and open-source version control.",
    projects: ["github.com/shivangi-guptaa"]
  },
  "Postman": {
    category: "Tools",
    desc: "API endpoint testing and documentation tool. Earned Postman Student Expert certification.",
    projects: ["Certified Postman Student Expert"]
  },
  "VS Code": {
    category: "Tools",
    desc: "Primary integrated development environment for C++, JavaScript, React.js, and Node.js.",
    projects: ["Development Workspace"]
  },
  "Vercel": {
    category: "Tools",
    desc: "Cloud deployment platform hosting live full-stack web application demonstrations.",
    projects: ["Campus Placement Portal", "MirrorTalk"]
  },
  "SailPoint IdentityIQ": {
    category: "Tools",
    desc: "Identity lifecycle management, role-based access control (RBAC), and Joiner-Mover-Leaver capstone workflows configured during Accenture internship.",
    projects: ["Accenture Software Engineering Internship"]
  }
};

export function initSkillModal() {
  const modalBackdrop = document.getElementById('skill-modal');
  const modalCloseBtn = document.getElementById('skill-modal-close');
  const modalBody = document.getElementById('skill-modal-body');

  if (!modalBackdrop || !modalCloseBtn || !modalBody) return;

  // Global click delegate for skill tags
  document.addEventListener('click', (e) => {
    const tagEl = e.target.closest('.editorial-tag');
    if (tagEl) {
      const skillName = tagEl.textContent.trim();
      const details = skillDetailsMap[skillName] || {
        category: "Technical Skill",
        desc: `${skillName} is listed under Shivangi's technical skill set from her official resume.`,
        projects: ["Campus Placement Portal", "MirrorTalk"]
      };

      openSkillModal(skillName, details, modalBackdrop, modalBody);
    }
  });

  // Universal Modal Close Event Listeners
  modalCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSkillModal(modalBackdrop);
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeSkillModal(modalBackdrop);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSkillModal(modalBackdrop);
    }
  });
}

function openSkillModal(skillName, details, backdrop, modalBody) {
  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-right: 1.5rem;">
      <div>
        <span class="section-label" style="margin-bottom: 0.2rem;">${details.category}</span>
        <h2 style="font-size: 1.8rem; margin: 0; color: var(--text-primary);">${skillName}</h2>
      </div>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
      ${details.desc}
    </p>

    <div style="background: var(--bg-primary); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
      <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Relevant Resume Context</span>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${details.projects.map(p => `<span class="badge badge-accent">${p}</span>`).join('')}
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

export function closeSkillModal(backdrop) {
  const modal = backdrop || document.getElementById('skill-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.remove('is-open');
  }
  document.body.style.overflow = '';
}
