/* Editorial Projects Renderer for Shivangi Gupta */

export const projectsData = [
  {
    num: "PROJECT 01",
    title: "Campus Placement Portal",
    url: "https://campus-placement-portal-website.vercel.app/",
    githubUrl: "https://github.com/shivangi-guptaa/Campus-Placement-Portal",
    desc: "Full-stack placement portal supporting Student, Recruiter, and Admin roles.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Axios", "Tailwind CSS"],
    highlights: [
      "Developed a full-stack placement portal supporting Student, Recruiter, and Admin roles with JWT-based authentication and role-based authorization.",
      "Built 20 RESTful APIs for authentication, job postings, applications, recruiter workflows, and administrative operations.",
      "Designed a normalized MySQL database with 10+ tables using foreign key constraints and indexing for efficient data retrieval.",
      "Implemented search and filtering by CGPA, branch, and skills with real-time updates using React.js and Axios."
    ],
    mockupAddress: "campus-placement-portal-website.vercel.app",
    mockupImage: "./assets/campus_placement_portal.png"
  },
  {
    num: "PROJECT 02",
    title: "MirrorTalk - Mental Wellness Platform",
    url: "https://mirrortalk-app.vercel.app/",
    githubUrl: "https://github.com/shivangi-guptaa/MirrorTalk",
    desc: "Full-stack platform for journaling, mood tracking, and personal dashboards.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Google OAuth", "Recharts"],
    highlights: [
      "Implemented secure authentication using JWT, Google OAuth, bcrypt password hashing, email verification, and password reset functionality.",
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
    `
  }
];

export function initProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projectsData.map((project, idx) => `
    <article class="project-editorial-card reveal-on-scroll stagger-${idx + 1}">
      <div class="project-info-side">
        <span class="project-number">${project.num}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc-text">${project.desc}</p>

        <ul class="project-highlights-list">
          ${project.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>

        <div class="project-tech-tags">
          ${project.techStack.map(t => `<span class="badge badge-accent">${t}</span>`).join('')}
        </div>

        <div class="project-links-row">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>

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
    </article>
  `).join('');
}
