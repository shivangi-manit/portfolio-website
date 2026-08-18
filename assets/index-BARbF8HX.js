(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();function v(){const t=document.getElementById("theme-toggle");if(!t)return;const e=localStorage.getItem("portfolio-theme")||"dark";u(e),t.addEventListener("click",()=>{const r=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";u(r)})}function u(t){document.documentElement.setAttribute("data-theme",t),localStorage.setItem("portfolio-theme",t);const e=document.getElementById("icon-sun"),a=document.getElementById("icon-moon");e&&a&&(t==="light"?(e.style.display="block",a.style.display="none"):(e.style.display="none",a.style.display="block"))}function f(){const t=document.getElementById("scroll-progress");t&&window.addEventListener("scroll",()=>{const e=window.scrollY,a=document.documentElement.scrollHeight-window.innerHeight,r=a>0?e/a*100:0;t.style.width=`${r}%`})}function b(){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const t=document.getElementById("cursor-dot"),e=document.getElementById("cursor-ring");if(!t||!e)return;let a=-100,r=-100,i=-100,n=-100;window.addEventListener("mousemove",s=>{a=s.clientX,r=s.clientY,t.style.left=`${a}px`,t.style.top=`${r}px`});function o(){i+=(a-i)*.18,n+=(r-n)*.18,e.style.left=`${i}px`,e.style.top=`${n}px`,requestAnimationFrame(o)}o(),document.querySelectorAll("a, button, input, textarea, .panel-row, .editorial-tag").forEach(s=>{s.addEventListener("mouseenter",()=>{e.style.transform="translate(-50%, -50%) scale(1.6)",e.style.borderColor="var(--accent-primary)"}),s.addEventListener("mouseleave",()=>{e.style.transform="translate(-50%, -50%) scale(1)"})})}function w(){const t=document.querySelectorAll(".reveal-on-scroll"),e={root:null,rootMargin:"0px 0px -40px 0px",threshold:.1},a=new IntersectionObserver((r,i)=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),i.unobserve(n.target))})},e);t.forEach(r=>a.observe(r))}const p=[{id:"campus-placement-portal",num:"FEATURED PROJECT 01",title:"Campus Placement Portal",url:"https://campus-placement-portal-website.vercel.app/",githubUrl:"https://github.com/shivangi-guptaa/Campus-Placement-Portal",desc:"Production-ready placement management portal engineered for Student, Recruiter, and Admin roles.",techStack:["React.js","Node.js","Express.js","MySQL","JWT","Axios","Tailwind CSS"],scaleMetrics:[{label:"REST APIs",value:"20 Endpoints"},{label:"Database Schema",value:"10+ Relational Tables"},{label:"Role System",value:"RBAC (Student/Recruiter/Admin)"},{label:"Real-time Search",value:"Multi-parameter Filtering"}],highlights:["Developed a full-stack placement portal supporting Student, Recruiter, and Admin roles with JWT-based authentication and role-based authorization.","Built 20 RESTful APIs for authentication, job postings, applications, recruiter workflows, and administrative operations.","Designed a normalized MySQL database with 10+ tables using foreign key constraints and indexing for efficient data retrieval.","Implemented search and filtering by CGPA, branch, and skills with real-time updates using React.js and Axios."],mockupAddress:"campus-placement-portal-website.vercel.app",mockupImage:"./assets/campus_placement_portal.png",caseStudy:{problem:"Traditional university placement management relies on fragmented Google Sheets and manual emails, resulting in inefficient candidate eligibility verification, communication delays, and lack of real-time application tracking for students and recruiters.",solution:"Engineered a centralized, role-based platform that automates placement drive scheduling, candidate eligibility filtering, application tracking, and recruiter management with strict database constraints and JWT security.",architectureFlow:[{layer:"Frontend Layer",tech:"React.js + Tailwind CSS",detail:"State management, dynamic filtering, responsive UI"},{layer:"API Integration",tech:"Axios Interceptors",detail:"Bearer token injection, centralized error handling"},{layer:"Backend Server",tech:"Node.js + Express.js",detail:"20 REST API endpoints, input validation, CORS"},{layer:"Security Middleware",tech:"JWT + Custom RBAC",detail:"Token verification, Student / Recruiter / Admin access control"},{layer:"Database Layer",tech:"MySQL Relational DB",detail:"10+ normalized tables, foreign key constraints, indexed queries"}],apiDesign:["POST /api/auth/login - Issues signed JWT with payload role","GET /api/jobs/search - Queries jobs filtered by CGPA threshold & branch","POST /api/applications/apply - Transactional student application submission","GET /api/admin/metrics - Administrative placement drive analytics"],challenges:"Ensuring ACID compliance and preventing duplicate application submissions when hundreds of students apply simultaneously during high-volume placement drives.",learnings:"Deepened practical mastery of relational database normalization, multi-table SQL joins, JWT secret management, and robust error handling across asynchronous REST APIs."}},{id:"mirrortalk",num:"PROJECT 02",title:"MirrorTalk – Mental Wellness Platform",url:"https://mirrortalk-app.vercel.app/",githubUrl:"https://github.com/shivangi-guptaa/MirrorTalk",desc:"Full-stack application engineered for secure user authentication, mood analytics, and journaling.",techStack:["React.js","Node.js","Express.js","MySQL","JWT","Google OAuth","Recharts"],scaleMetrics:[{label:"Authentication",value:"JWT + OAuth 2.0"},{label:"Data Visualization",value:"Recharts Analytics"},{label:"Media Handling",value:"Multer Upload Middleware"},{label:"Security",value:"bcrypt Password Hashing"}],highlights:["Implemented secure authentication using JWT, Google OAuth, bcrypt password hashing, email verification, and password reset functionality.","Developed REST APIs for journaling, mood tracking, profile management, and file uploads with validation using Express.js and MySQL.","Built interactive dashboards with Recharts to visualize mood trends, journaling history, and user engagement."],mockupAddress:"mirrortalk-app.vercel.app",mockupUI:`
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
    `,caseStudy:{problem:"Users require a private, end-to-end secure environment to log daily journal entries and visualize personal mood analytics over time without privacy concerns.",solution:"Built a full-stack platform with Google OAuth 2.0 and JWT dual-authentication, Multer file upload storage, and Recharts interactive graphs for data visualization.",architectureFlow:[{layer:"Frontend Layer",tech:"React.js + Recharts",detail:"Real-time analytics graphs, responsive form states"},{layer:"Authentication",tech:"Google OAuth + JWT",detail:"OAuth 2.0 token exchange, bcrypt hashed passwords"},{layer:"Backend Server",tech:"Express.js REST Service",detail:"Protected API routes, file upload validation"},{layer:"Database Layer",tech:"MySQL Schema",detail:"User profiles, encrypted journal logs, analytics tables"}],apiDesign:["POST /api/auth/google - Authenticates user via Google OAuth 2.0","POST /api/journal/entry - Securely saves journal log with attachment","GET /api/analytics/mood - Aggregates mood entries over weekly time-windows"],challenges:"Synchronizing dual authentication paths (custom JWT password login vs. Google OAuth) into a unified session management state.",learnings:"Gained hands-on proficiency in social OAuth integrations, file upload handling via Multer, and data visualization state rendering with Recharts."}}];function k(){const t=document.getElementById("projects-container");t&&(t.innerHTML=p.map((e,a)=>`
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
              <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-code); uppercase;">${r.label}</div>
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
  `).join(""),document.querySelectorAll(".open-casestudy-btn").forEach(e=>{e.addEventListener("click",a=>{const r=a.currentTarget.getAttribute("data-project-id"),i=p.find(n=>n.id===r);i&&S(i)})}))}function S(t){const e=document.getElementById("skill-modal"),a=document.getElementById("skill-modal-body");if(!e||!a)return;const{caseStudy:r}=t;a.innerHTML=`
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
          ${r.architectureFlow.map(i=>`
            <div style="display: flex; align-items: baseline; justify-content: space-between; font-size: 0.82rem;">
              <span style="font-weight: 700; color: var(--text-primary); font-family: var(--font-code);">${i.layer}:</span>
              <span style="color: var(--accent-primary); font-weight: 600;">${i.tech}</span>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.3rem;">${i.detail}</div>
          `).join("")}
        </div>
      </div>

      <!-- Key API Design -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">4. Key API Endpoints & Design</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem;">
          ${r.apiDesign.map(i=>`
            <li style="font-family: var(--font-code); font-size: 0.8rem; background: var(--bg-primary); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: var(--text-secondary);">
              ${i}
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
  `,e.classList.add("active")}function x(){const t=document.getElementById("copy-email-btn");t&&t.addEventListener("click",()=>{navigator.clipboard.writeText("reachshivangigupta@gmail.com").then(()=>{g("📋 Email copied: reachshivangigupta@gmail.com","info")}).catch(()=>{g("Email: reachshivangigupta@gmail.com","info")})})}function g(t,e="info"){const a=document.getElementById("toast-container");if(!a)return;const r=document.createElement("div");r.className=`toast toast-${e}`;let i='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';e==="success"&&(i='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'),r.innerHTML=`${i} <span>${t}</span>`,a.appendChild(r),setTimeout(()=>{r.classList.add("hiding"),setTimeout(()=>r.remove(),300)},3500)}let l=null,c=!0;function h(){if(!l){const t=window.AudioContext||window.webkitAudioContext;t&&(l=new t)}l&&l.state==="suspended"&&l.resume()}if(typeof window<"u"){const t=["click","touchstart","keydown"],e=()=>{h(),t.forEach(a=>document.removeEventListener(a,e))};t.forEach(a=>document.addEventListener(a,e))}function y(){if(c)try{const t=l||h();if(!t)return;t.state==="suspended"&&t.resume();const e=t.currentTime,a=t.createOscillator(),r=t.createGain();a.type="sine",a.frequency.setValueAtTime(784,e),a.frequency.exponentialRampToValueAtTime(1174,e+.04),r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.07),a.connect(r),r.connect(t.destination),a.start(e),a.stop(e+.07)}catch{}}function E(){document.addEventListener("click",r=>{r.target.closest('button, a, input[type="submit"], .panel-row, .editorial-tag, .theme-toggle-btn, .social-icon-btn, .achievement-row, .about-stat-box, .skill-category-box')&&y()});const t=document.getElementById("sound-toggle"),e=document.getElementById("icon-sound-on"),a=document.getElementById("icon-sound-off");t&&t.addEventListener("click",()=>{c=!c,c?(e&&a&&(e.style.display="block",a.style.display="none"),y()):e&&a&&(e.style.display="none",a.style.display="block")})}const A={"React.js":{category:"Frontend Framework",desc:"Used in Campus Placement Portal & MirrorTalk for component architecture, custom hooks, state management, and real-time Axios API updates.",projects:["Campus Placement Portal","MirrorTalk"]},"Node.js":{category:"Backend Environment",desc:"Powering the REST API services, asynchronous event handlers, and server architecture for full-stack web applications.",projects:["Campus Placement Portal","MirrorTalk"]},"Express.js":{category:"Backend Web Framework",desc:"Used to construct 20+ RESTful APIs, JWT authentication middleware, CORS configuration, and request validation routes.",projects:["Campus Placement Portal","MirrorTalk"]},MySQL:{category:"Relational Database",desc:"Normalized database design with 10+ tables, primary/foreign key relationships, indexing, and multi-table joins for efficient data retrieval.",projects:["Campus Placement Portal","MirrorTalk"]},"C++":{category:"Core Language",desc:"Primary language for Data Structures & Algorithms. Earned 5-Star C++ Badge on HackerRank and solved 250+ DSA problems.",projects:["250+ DSA Problems (LeetCode / HackerRank)"]},"Tailwind CSS":{category:"Frontend Styling",desc:"Utility-first CSS framework utilized for building responsive, accessible UI layouts for the Campus Placement Portal.",projects:["Campus Placement Portal"]},HTML5:{category:"Web Standard",desc:"Semantic layout structuring, accessible ARIA attributes, and clean DOM hierarchy across all frontend projects.",projects:["Campus Placement Portal","MirrorTalk"]},CSS3:{category:"Web Styling",desc:"Custom CSS properties (variables), responsive flexbox/grid layouts, animations, and dark/light theme systems.",projects:["Campus Placement Portal","MirrorTalk"]},"REST APIs":{category:"Backend Architecture",desc:"Designed and implemented 20+ RESTful API endpoints for authentication, job applications, mood tracking, and recruiter workflows.",projects:["Campus Placement Portal","MirrorTalk"]},"JWT Authentication":{category:"Security & Auth",desc:"JSON Web Token implementation for role-based authorization (Student, Recruiter, Admin) and stateless session management.",projects:["Campus Placement Portal","MirrorTalk"]},"Google OAuth":{category:"OAuth 2.0 Security",desc:"Integrated Google OAuth 2.0 authentication for seamless user sign-in and account verification.",projects:["MirrorTalk"]},"Email Verification":{category:"Security Workflow",desc:"Automated account verification emails and password reset links with secure token expiration.",projects:["MirrorTalk"]},"Password Reset":{category:"Security Workflow",desc:"Bcrypt password hashing and secure token-based password recovery functionality.",projects:["MirrorTalk"]},Multer:{category:"Node.js Middleware",desc:"Middleware handling multipart/form-data for file uploads, profile avatars, and document attachments.",projects:["MirrorTalk"]},"SailPoint IdentityIQ":{category:"Identity & Governance",desc:"Configured identity lifecycle management, role-based access control (RBAC), and Joiner-Mover-Leaver capstone workflows during Accenture internship.",projects:["Accenture Software Engineering Internship"]},Git:{category:"Version Control",desc:"Distributed version control for code tracking, branching strategy, and pull request workflows.",projects:["All Open Source Repositories"]},GitHub:{category:"Code Hosting",desc:"Repository management, CI/CD actions, and project showcase hosting.",projects:["github.com/shivangi-guptaa"]},Postman:{category:"API Testing Tool",desc:"API endpoint testing, mock servers, and automated collection testing. Earned Postman Student Expert Certification.",projects:["Certified Postman Student Expert"]},"VS Code":{category:"Primary IDE",desc:"Customized development environment for JavaScript, React, C++, and Node.js.",projects:["Development Workspace"]},Vercel:{category:"Cloud Deployment",desc:"Production hosting platform for live full-stack project deployments with automated GitHub integration.",projects:["mirrortalk-app.vercel.app","campus-placement-portal-website.vercel.app"]},"JavaScript (ES6)":{category:"Core Language",desc:"Modern ES6+ syntax including async/await, ES modules, promises, destructuring, and functional array methods.",projects:["Campus Placement Portal","MirrorTalk"]},SQL:{category:"Database Query Language",desc:"Complex database queries, index creation, multi-table JOIN operations, and schema normalization.",projects:["Campus Placement Portal","MirrorTalk"]},"Schema Design":{category:"Database Engineering",desc:"Normalized 3NF relational database schema design with primary/foreign key constraints.",projects:["Campus Placement Portal","MirrorTalk"]},Joins:{category:"Database Operations",desc:"INNER, LEFT, and RIGHT multi-table JOIN operations for relational data aggregation.",projects:["Campus Placement Portal"]},Indexing:{category:"Database Optimization",desc:"B-Tree database indexing on high-frequency query columns to optimize data retrieval performance.",projects:["Campus Placement Portal"]}};function T(){const t=document.getElementById("skill-modal"),e=document.getElementById("skill-modal-close"),a=document.getElementById("skill-modal-body");!t||!e||!a||(document.addEventListener("click",r=>{const i=r.target.closest(".editorial-tag");if(i){const n=i.textContent.trim(),o=A[n]||{category:"Technical Skill",desc:`${n} is a core component of Shivangi's software engineering toolkit used across full-stack applications and DSA problem solving.`,projects:["Campus Placement Portal","MirrorTalk"]};P(n,o,t,a)}}),e.addEventListener("click",()=>m(t)),t.addEventListener("click",r=>{r.target===t&&m(t)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&t.classList.contains("is-open")&&m(t)}))}function P(t,e,a,r){r.innerHTML=`
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
      <div>
        <span class="section-label" style="margin-bottom: 0.2rem;">${e.category}</span>
        <h2 style="font-size: 1.8rem; margin: 0; color: var(--text-primary);">${t}</h2>
      </div>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
      ${e.desc}
    </p>

    <div style="background: var(--bg-primary); padding: 1.1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-medium);">
      <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Relevant Experience & Projects</span>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${e.projects.map(i=>`<span class="badge badge-accent">${i}</span>`).join("")}
      </div>
    </div>
  `,a.classList.add("is-open"),document.body.style.overflow="hidden"}function m(t){t.classList.remove("is-open"),document.body.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{v(),E(),f(),b(),k(),T(),x(),w(),document.getElementById("navbar");const t=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".nav-link"),a=document.getElementById("back-to-top-btn");window.addEventListener("scroll",()=>{window.scrollY>400?a==null||a.classList.add("is-visible"):a==null||a.classList.remove("is-visible");let n="";t.forEach(o=>{const d=o.offsetTop-120,s=o.offsetHeight;window.scrollY>=d&&window.scrollY<d+s&&(n=o.getAttribute("id")||"")}),e.forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===`#${n}`&&o.classList.add("active")})}),a&&a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const r=document.getElementById("mobile-nav-toggle"),i=document.getElementById("nav-menu");r&&i&&(r.addEventListener("click",()=>{i.classList.toggle("is-active")}),e.forEach(n=>{n.addEventListener("click",()=>{i.classList.remove("is-active")})}))});
//# sourceMappingURL=index-BARbF8HX.js.map
