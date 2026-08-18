(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();function v(){const t=document.getElementById("theme-toggle");if(!t)return;const e=localStorage.getItem("portfolio-theme")||"dark";u(e),t.addEventListener("click",()=>{const r=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";u(r)})}function u(t){document.documentElement.setAttribute("data-theme",t),localStorage.setItem("portfolio-theme",t);const e=document.getElementById("icon-sun"),a=document.getElementById("icon-moon");e&&a&&(t==="light"?(e.style.display="block",a.style.display="none"):(e.style.display="none",a.style.display="block"))}function f(){const t=document.getElementById("scroll-progress");t&&window.addEventListener("scroll",()=>{const e=window.scrollY,a=document.documentElement.scrollHeight-window.innerHeight,r=a>0?e/a*100:0;t.style.width=`${r}%`})}function b(){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const t=document.getElementById("cursor-dot"),e=document.getElementById("cursor-ring");if(!t||!e)return;let a=-100,r=-100,o=-100,n=-100;window.addEventListener("mousemove",s=>{a=s.clientX,r=s.clientY,t.style.left=`${a}px`,t.style.top=`${r}px`});function i(){o+=(a-o)*.18,n+=(r-n)*.18,e.style.left=`${o}px`,e.style.top=`${n}px`,requestAnimationFrame(i)}i(),document.querySelectorAll("a, button, input, textarea, .panel-row, .editorial-tag").forEach(s=>{s.addEventListener("mouseenter",()=>{e.style.transform="translate(-50%, -50%) scale(1.6)",e.style.borderColor="var(--accent-primary)"}),s.addEventListener("mouseleave",()=>{e.style.transform="translate(-50%, -50%) scale(1)"})})}function w(){const t=document.querySelectorAll(".reveal-on-scroll"),e={root:null,rootMargin:"0px 0px -40px 0px",threshold:.1},a=new IntersectionObserver((r,o)=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),o.unobserve(n.target))})},e);t.forEach(r=>a.observe(r))}const p=[{id:"campus-placement-portal",num:"FEATURED PROJECT 01",title:"Campus Placement Portal",url:"https://campus-placement-portal-website.vercel.app/",githubUrl:"https://github.com/shivangi-guptaa/Campus-Placement-Portal",desc:"Full-stack placement portal supporting Student, Recruiter, and Admin roles with JWT authentication.",techStack:["React.js","Node.js","Express.js","MySQL","JWT","Axios","Tailwind CSS"],scaleMetrics:[{label:"REST APIs",value:"20 Endpoints"},{label:"Database Schema",value:"10+ Relational Tables"},{label:"Role System",value:"3 Roles (Student/Recruiter/Admin)"},{label:"Security & Access",value:"JWT + RBAC Middleware"}],highlights:["Developed a full-stack placement portal supporting Student, Recruiter, and Admin roles with JWT-based authentication and role-based authorization.","Developed 20 REST API endpoints for authentication, job postings, applications, recruiter workflows, and administrative operations.","Designed a normalized MySQL database with 10+ related tables using foreign key constraints and indexes.","Implemented dynamic search and filtering by CGPA, branch, and skills using React.js and Axios."],mockupAddress:"campus-placement-portal-website.vercel.app",mockupImage:"./assets/campus_placement_portal.png",caseStudy:{problem:"University placement management requires a unified portal to handle candidate eligibility evaluation, job postings, and multi-role application workflows efficiently.",solution:"Engineered a full-stack portal connecting students, recruiters, and admins through 20 REST APIs, JWT authentication, and a normalized MySQL database.",architectureFlow:[{layer:"Frontend Layer",tech:"React.js + Tailwind CSS",detail:"Dynamic filtering, state management, Axios API calls"},{layer:"Backend Server",tech:"Node.js + Express.js",detail:"20 REST API endpoints, routing, error handling"},{layer:"Security Middleware",tech:"JWT + RBAC",detail:"Role-based authorization (Student / Recruiter / Admin)"},{layer:"Database Layer",tech:"MySQL Relational DB",detail:"10+ related tables, foreign key constraints, indexes"}],apiDesign:["POST /api/auth/login - Authenticates user and issues signed JWT with role payload","GET /api/jobs/search - Fetches job postings filtered dynamically by CGPA & branch","POST /api/applications/apply - Submits candidate job applications with validation","GET /api/admin/drives - Manages recruitment drives and applicant rosters"],challenges:"Handled relational consistency and duplicate application concerns through database constraints and application-level validation.",learnings:"Gained practical expertise in relational database normalization, multi-table SQL joins, foreign key constraints, JWT role authorization, and asynchronous REST API integration."}},{id:"mirrortalk",num:"PROJECT 02",title:"MirrorTalk – Mental Wellness Platform",url:"https://mirrortalk-app.vercel.app/",githubUrl:"https://github.com/shivangi-guptaa/MirrorTalk",desc:"Full-Stack Journaling & Mood Analytics Platform with dual authentication and data visualization.",techStack:["React.js","Node.js","Express.js","MySQL","JWT","Google OAuth","Recharts"],scaleMetrics:[{label:"Authentication",value:"JWT + Google OAuth"},{label:"Data Visualization",value:"Recharts Dashboards"},{label:"File Storage",value:"Multer Middleware"},{label:"Password Security",value:"bcrypt Hashing"}],highlights:["Implemented authentication using JWT, Google OAuth, bcrypt password hashing, email verification, and password reset functionality.","Developed REST APIs for journaling, mood tracking, profile management, and file uploads with validation using Express.js and MySQL.","Built interactive dashboards with Recharts to visualize mood trends, journaling history, and user engagement."],mockupAddress:"mirrortalk-app.vercel.app",mockupUI:`
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
    `,caseStudy:{problem:"Users require a secure full-stack platform to record journal entries and visualize personal mood analytics securely over time.",solution:"Developed a platform with Google OAuth and JWT authentication, bcrypt password security, Multer media handling, and Recharts interactive graphs.",architectureFlow:[{layer:"Frontend Layer",tech:"React.js + Recharts",detail:"Interactive analytics dashboards, journaling UI"},{layer:"Authentication",tech:"JWT + Google OAuth",detail:"Social OAuth 2.0, bcrypt hashed passwords, email verification"},{layer:"Backend Server",tech:"Express.js REST APIs",detail:"Protected routes, profile management, Multer file uploads"},{layer:"Database Layer",tech:"MySQL Schema",detail:"User credentials, journal records, mood logs"}],apiDesign:["POST /api/auth/google - Authenticates user session via Google OAuth 2.0","POST /api/journal/create - Saves journal entry with file attachment validation","GET /api/analytics/mood - Fetches aggregated mood tracking history"],challenges:"Integrating dual authentication mechanisms (custom JWT login and Google OAuth) with unified session security.",learnings:"Mastered OAuth 2.0 integration, file upload handling with Multer, data security with bcrypt, and dynamic analytics graph rendering with Recharts."}}];function k(){const t=document.getElementById("projects-container");t&&(t.innerHTML=p.map((e,a)=>`
    <article class="project-editorial-card reveal-on-scroll stagger-${a+1}" id="project-card-${e.id}">
      <div class="project-info-side">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span class="project-number">${e.num}</span>
          ${e.id==="campus-placement-portal"?'<span class="badge badge-accent" style="font-size: 0.7rem; font-weight: 700;">★ MAIN FEATURED PROJECT</span>':""}
        </div>
        
        <h3 class="project-title">${e.title}</h3>
        <p class="project-desc-text">${e.desc}</p>

        <!-- Scale Metrics Box -->
        <div class="project-scale-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem; margin-bottom: 1.2rem;">
          ${e.scaleMetrics.map(r=>`
            <div style="background: var(--bg-primary); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-code); text-transform: uppercase;">${r.label}</div>
              <div style="font-size: 0.92rem; font-weight: 700; color: var(--accent-primary);">${r.value}</div>
            </div>
          `).join("")}
        </div>

        <ul class="project-highlights-list">
          ${e.highlights.map(r=>`<li>${r}</li>`).join("")}
        </ul>

        <div class="project-tech-tags">
          ${e.techStack.map(r=>`<span class="badge badge-accent">${r}</span>`).join("")}
        </div>

        <div class="project-links-row" style="margin-top: 1.5rem;">
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
          <a href="${e.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <button class="btn btn-outline btn-sm open-casestudy-btn" data-project-id="${e.id}">
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
            <div class="browser-address-bar">https://${e.mockupAddress}</div>
          </div>
          <div class="browser-content" style="padding: 0;">
            ${e.mockupImage?`<img src="${e.mockupImage}" alt="${e.title} Screenshot" style="width: 100%; height: auto; display: block; object-fit: cover;" />`:e.mockupUI.trim()}
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
  `).join(""),document.querySelectorAll(".open-casestudy-btn").forEach(e=>{e.addEventListener("click",a=>{const r=a.currentTarget.getAttribute("data-project-id"),o=p.find(n=>n.id===r);o&&x(o)})}))}function x(t){const e=document.getElementById("skill-modal"),a=document.getElementById("skill-modal-body");if(!e||!a)return;const{caseStudy:r}=t;a.innerHTML=`
    <div style="padding-right: 1.5rem;">
      <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700;">ENGINEERING CASE STUDY</span>
      <h2 style="font-size: 1.6rem; margin-top: 0.3rem; margin-bottom: 0.6rem; color: var(--text-primary);">${t.title}</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">${t.desc}</p>

      <div style="display: flex; gap: 0.8rem; margin-bottom: 1.5rem;">
        <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Live Demo ↗</a>
        <a href="${t.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub ↗</a>
      </div>

      <!-- Problem & Solution -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.4rem;">1. Problem Statement</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${r.problem}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.4rem;">2. What Was Built & Solution</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${r.solution}</p>
      </div>

      <!-- System Architecture Stack -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.6rem;">3. End-to-End Architecture Flow</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; background: var(--bg-primary); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          ${r.architectureFlow.map(o=>`
            <div style="display: flex; align-items: baseline; justify-content: space-between; font-size: 0.82rem;">
              <span style="font-weight: 700; color: var(--text-primary); font-family: var(--font-code);">${o.layer}:</span>
              <span style="color: var(--accent-primary); font-weight: 600;">${o.tech}</span>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.3rem;">${o.detail}</div>
          `).join("")}
        </div>
      </div>

      <!-- Key API Design -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">4. Key API Endpoints & Design</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem;">
          ${r.apiDesign.map(o=>`
            <li style="font-family: var(--font-code); font-size: 0.8rem; background: var(--bg-primary); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: var(--text-secondary);">
              ${o}
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Engineering Challenges & Learnings -->
      <div style="margin-bottom: 1rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.3rem;">5. Key Technical Challenge</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${r.challenges}</p>

        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.3rem;">6. What I Learned</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${r.learnings}</p>
      </div>
    </div>
  `,e.classList.add("active"),e.classList.add("is-open"),document.body.style.overflow="hidden"}function S(){const t=document.getElementById("copy-email-btn");t&&t.addEventListener("click",()=>{navigator.clipboard.writeText("reachshivangigupta@gmail.com").then(()=>{g("📋 Email copied: reachshivangigupta@gmail.com","info")}).catch(()=>{g("Email: reachshivangigupta@gmail.com","info")})})}function g(t,e="info"){const a=document.getElementById("toast-container");if(!a)return;const r=document.createElement("div");r.className=`toast toast-${e}`;let o='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';e==="success"&&(o='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'),r.innerHTML=`${o} <span>${t}</span>`,a.appendChild(r),setTimeout(()=>{r.classList.add("hiding"),setTimeout(()=>r.remove(),300)},3500)}let l=null,c=!0;function h(){if(!l){const t=window.AudioContext||window.webkitAudioContext;t&&(l=new t)}l&&l.state==="suspended"&&l.resume()}if(typeof window<"u"){const t=["click","touchstart","keydown"],e=()=>{h(),t.forEach(a=>document.removeEventListener(a,e))};t.forEach(a=>document.addEventListener(a,e))}function y(){if(c)try{const t=l||h();if(!t)return;t.state==="suspended"&&t.resume();const e=t.currentTime,a=t.createOscillator(),r=t.createGain();a.type="sine",a.frequency.setValueAtTime(784,e),a.frequency.exponentialRampToValueAtTime(1174,e+.04),r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.07),a.connect(r),r.connect(t.destination),a.start(e),a.stop(e+.07)}catch{}}function E(){document.addEventListener("click",r=>{r.target.closest('button, a, input[type="submit"], .panel-row, .editorial-tag, .theme-toggle-btn, .social-icon-btn, .achievement-row, .about-stat-box, .skill-category-box')&&y()});const t=document.getElementById("sound-toggle"),e=document.getElementById("icon-sound-on"),a=document.getElementById("icon-sound-off");t&&t.addEventListener("click",()=>{c=!c,c?(e&&a&&(e.style.display="block",a.style.display="none"),y()):e&&a&&(e.style.display="none",a.style.display="block")})}const T={"C++":{category:"Languages",desc:"Primary programming language for Data Structures & Algorithms. Earned 5-Star C++ Badge on HackerRank and solved 250+ DSA problems.",projects:["250+ DSA Problems (LeetCode & HackerRank)"]},"JavaScript (ES6)":{category:"Languages",desc:"Core scripting language used for frontend React.js components, asynchronous API calls, and backend Node.js / Express.js services.",projects:["Campus Placement Portal","MirrorTalk"]},SQL:{category:"Languages",desc:"Structured Query Language utilized for relational database queries, table joins, schema creation, and database constraints.",projects:["Campus Placement Portal","MirrorTalk"]},"React.js":{category:"Frontend",desc:"Frontend library used in Campus Placement Portal & MirrorTalk for interactive component architecture, state management, and real-time Axios API updates.",projects:["Campus Placement Portal","MirrorTalk"]},HTML5:{category:"Frontend",desc:"Standard markup language for semantic page structuring and accessible DOM layouts.",projects:["Campus Placement Portal","MirrorTalk"]},CSS3:{category:"Frontend",desc:"Cascading style sheets for responsive layouts, custom CSS design system properties, animations, and theme styling.",projects:["Campus Placement Portal","MirrorTalk"]},"Tailwind CSS":{category:"Frontend",desc:"Utility-first CSS framework utilized for building responsive, accessible UI layouts for the Campus Placement Portal.",projects:["Campus Placement Portal"]},"Node.js":{category:"Backend",desc:"JavaScript runtime powering asynchronous server architectures, REST API endpoints, and backend application logic.",projects:["Campus Placement Portal","MirrorTalk"]},"Express.js":{category:"Backend",desc:"Backend framework used to build 20 REST API endpoints, JWT authentication middleware, routing, and request validation.",projects:["Campus Placement Portal","MirrorTalk"]},"REST APIs":{category:"Backend",desc:"Designed and implemented 20 RESTful API endpoints for authentication, job postings, candidate applications, and user profiles.",projects:["Campus Placement Portal","MirrorTalk"]},JWT:{category:"Backend",desc:"JSON Web Token implementation for role-based authorization (Student, Recruiter, Admin) and stateless session security.",projects:["Campus Placement Portal","MirrorTalk"]},OAuth:{category:"Backend",desc:"Integrated Google OAuth 2.0 social authentication for user sign-in and account verification.",projects:["MirrorTalk"]},Multer:{category:"Backend",desc:"Node.js middleware handling multipart/form-data for file upload processing and document attachments.",projects:["MirrorTalk"]},MySQL:{category:"Database",desc:"Relational database system configured with 10+ normalized tables, foreign key constraints, and indexing.",projects:["Campus Placement Portal","MirrorTalk"]},"Schema Design":{category:"Database",desc:"Relational database schema normalization (3NF) using foreign keys and structured table relationships.",projects:["Campus Placement Portal","MirrorTalk"]},Joins:{category:"Database",desc:"Multi-table SQL JOIN operations for retrieving relational data across users, job postings, and application records.",projects:["Campus Placement Portal"]},Indexing:{category:"Database",desc:"Database indexing on high-frequency query columns to optimize data retrieval execution speeds.",projects:["Campus Placement Portal"]},Git:{category:"Tools",desc:"Distributed version control system for tracking code changes and managing development history.",projects:["All Repositories"]},GitHub:{category:"Tools",desc:"Code repository hosting, project showcase management, and open-source version control.",projects:["github.com/shivangi-guptaa"]},Postman:{category:"Tools",desc:"API endpoint testing and documentation tool. Earned Postman Student Expert certification.",projects:["Certified Postman Student Expert"]},"VS Code":{category:"Tools",desc:"Primary integrated development environment for C++, JavaScript, React.js, and Node.js.",projects:["Development Workspace"]},Vercel:{category:"Tools",desc:"Cloud deployment platform hosting live full-stack web application demonstrations.",projects:["Campus Placement Portal","MirrorTalk"]},"SailPoint IdentityIQ":{category:"Tools",desc:"Identity lifecycle management, role-based access control (RBAC), and Joiner-Mover-Leaver capstone workflows configured during Accenture internship.",projects:["Accenture Software Engineering Internship"]}};function A(){const t=document.getElementById("skill-modal"),e=document.getElementById("skill-modal-close"),a=document.getElementById("skill-modal-body");!t||!e||!a||(document.addEventListener("click",r=>{const o=r.target.closest(".editorial-tag");if(o){const n=o.textContent.trim(),i=T[n]||{category:"Technical Skill",desc:`${n} is listed under Shivangi's technical skill set from her official resume.`,projects:["Campus Placement Portal","MirrorTalk"]};P(n,i,t,a)}}),e.addEventListener("click",r=>{r.stopPropagation(),m(t)}),t.addEventListener("click",r=>{r.target===t&&m(t)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&m(t)}))}function P(t,e,a,r){r.innerHTML=`
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-right: 1.5rem;">
      <div>
        <span class="section-label" style="margin-bottom: 0.2rem;">${e.category}</span>
        <h2 style="font-size: 1.8rem; margin: 0; color: var(--text-primary);">${t}</h2>
      </div>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
      ${e.desc}
    </p>

    <div style="background: var(--bg-primary); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
      <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Relevant Resume Context</span>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${e.projects.map(o=>`<span class="badge badge-accent">${o}</span>`).join("")}
      </div>
    </div>
  `,a.classList.add("active"),a.classList.add("is-open"),document.body.style.overflow="hidden"}function m(t){const e=t||document.getElementById("skill-modal");e&&(e.classList.remove("active"),e.classList.remove("is-open")),document.body.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{v(),E(),f(),b(),k(),A(),S(),w(),document.getElementById("navbar");const t=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".nav-link"),a=document.getElementById("back-to-top-btn");window.addEventListener("scroll",()=>{window.scrollY>400?a==null||a.classList.add("is-visible"):a==null||a.classList.remove("is-visible");let n="";t.forEach(i=>{const d=i.offsetTop-120,s=i.offsetHeight;window.scrollY>=d&&window.scrollY<d+s&&(n=i.getAttribute("id")||"")}),e.forEach(i=>{i.classList.remove("active"),i.getAttribute("href")===`#${n}`&&i.classList.add("active")})}),a&&a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const r=document.getElementById("mobile-nav-toggle"),o=document.getElementById("nav-menu");r&&o&&(r.addEventListener("click",()=>{o.classList.toggle("is-active")}),e.forEach(n=>{n.addEventListener("click",()=>{o.classList.remove("is-active")})}))});
//# sourceMappingURL=index-p1zq2xsi.js.map
