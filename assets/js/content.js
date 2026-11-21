/* ==========================================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   --------------------------------------------------------------------------
   Rules of thumb
   • Text goes between quotes: "like this". If your text contains a double
     quote, write it as \" or use ’ (curly apostrophe) instead.
   • Lists use [ ... ] with items separated by commas.
   • Wrap words in *asterisks* to show them in the accent italic style
     (works in hero.headline and contact.title).
   • Leave a value empty ("" or []) to hide it. A whole section disappears
     from the page and the menu when its list is empty.
   • After editing, refresh the page. If something breaks, open the browser
     console (F12) — a missing comma or quote is the usual cause.
   ========================================================================== */

window.PORTFOLIO = {
  /* ---------- Basic profile ---------- */
  profile: {
    name: "Von Ryan Sumague",
    initials: "VR",
    role: "ServiceNow Developer",
    company: "Accenture",
    location: "Tanauan City, Batangas, PH",
    email: "ryansumague1030@gmail.com",
    phone: "+639950020360",          // used for the tap-to-call link
    phoneDisplay: "+63 995 002 0360", // what visitors see
    resume: "assets/resume/Von-Ryan-Sumague-Resume.pdf", // replace the PDF, keep this path
    links: {
      linkedin: "https://www.linkedin.com/in/von-ryan-sumague-0430a0232/",
      github: "https://github.com/vonsumague",
      credly: "https://www.credly.com/users/von-ryan-sumague.9019e3a0/badges"
    }
  },

  /* ---------- Hero (top of the page) ---------- */
  hero: {
    eyebrow: "ServiceNow Developer · Open to remote roles",
    headline: "ServiceNow portals, built with a *web developer’s* hands.",
    lede: "I develop and maintain ServiceNow Service Portal experiences across ITSM and CSM for healthcare and pharmaceutical clients — backed by four ServiceNow certifications and earlier full-stack work in React, Laravel, PHP and MySQL."
  },

  /* ---------- Summary card next to the hero: [label, value] ---------- */
  record: [
    ["Role", "ServiceNow Developer"],
    ["Company", "Accenture"],
    ["Focus", "Service Portal · Catalog · Widgets"],
    ["Certified", "CSA · CIS-ITSM · CIS-CSM · CIS-DF"],
    ["Accredited", "ServiceNow AI Agents (Delivery)"],
    ["Web stack", "JavaScript · React · Laravel · PHP · MySQL"],
    ["Education", "BS Information Technology, Magna Cum Laude"],
    ["Location", "Tanauan City, Batangas, PH"],
    ["Availability", "Open to new roles · Remote preferred"]
  ],

  /* ---------- About ---------- */
  about: {
    title: "A ServiceNow developer who came up through web development.",
    paragraphs: [
      "I’m a ServiceNow developer at Accenture, working on projects for healthcare and pharmaceutical clients. Most of my work happens in Service Portal: building catalog forms, developing custom widgets and configuring out-of-the-box ones, contributing to portal redesigns, and troubleshooting issues in both development and production so the people using the portal get a consistent experience.",
      "Before ServiceNow, I built web systems. At Batangas State University I was the sole developer behind four campus systems — computer laboratory management, clinic management, transaction monitoring and ticketing, and an information kiosk — using React, Laravel, PHP and MySQL. I also taught web systems development there part-time. I started my career at Honda Philippines, where several of my optimizations to an existing web system were accepted as Kaizen improvements.",
      "That background shapes how I work on the platform: when a portal needs custom HTML, CSS or JavaScript, I’m comfortable writing it — and I care about what the end user actually sees. I’m open to new roles, with a preference for remote work."
    ],
    facts: [
      { value: "4", label: "ServiceNow certifications earned since 2024" },
      { value: "Solo", label: "Developer behind 4 campus systems at Batangas State University" },
      { value: "BSIT", label: "Polytechnic University of the Philippines, Magna Cum Laude" }
    ]
  },

  /* ---------- Selected work ----------
     Each item: meta (small line above title), title, context, role,
     points (what you did), stack (chips), and optional links.
     links: { github: "https://...", demo: "https://...", caseStudy: "https://..." }
     Optional list of named deliverables: deliverablesLabel: "Systems delivered", deliverables: ["…", "…"]
     Optional image: image: "assets/img/your-screenshot.webp", imageAlt: "Describe it"  */
  work: {
    title: "What I’ve built and improved.",
    intro: "Highlights from my roles. Client and employer systems are confidential, so these describe the work and my part in it rather than showing internal screens.",
    items: [
      {
        meta: "Accenture · Aug 2024 – Present",
        title: "ServiceNow Service Portal development",
        context: "ServiceNow projects for healthcare and pharmaceutical clients, covering Service Portal, ITSM and CSM, where portal pages and forms need to match business requirements and work reliably for end users.",
        role: "Developer on the portal side, supporting both development and production activities.",
        pointsLabel: "What I do",
        points: [
          "Build Service Catalog forms based on business and user requirements.",
          "Develop custom Service Portal widgets and configure out-of-the-box widgets.",
          "Contribute to portal redesigns using HTML, CSS, JavaScript and ServiceNow scripting.",
          "Troubleshoot and resolve portal and application issues in development and production.",
          "Work with teammates and stakeholders to analyze requirements and agree on solutions."
        ],
        stack: ["Service Portal", "Service Catalog", "Widgets", "ServiceNow scripting", "ITSM", "CSM", "JavaScript", "HTML", "CSS"],
        links: {}
      },
      {
        meta: "Batangas State University · Mar 2023 – Aug 2024",
        title: "Four campus systems, built as the sole developer",
        context: "Internal systems used on campus at Batangas State University. They aren’t publicly accessible, so there are no live demos.",
        role: "Sole developer on each system — front end, back end and database — working with the people who requested it.",
        deliverablesLabel: "Systems delivered",
        deliverables: [
          "Computer Laboratory Management System",
          "Clinic Management System",
          "Transaction Monitoring and Ticketing System",
          "University Information Kiosk"
        ],
        pointsLabel: "What I did",
        points: [
          "Designed and developed front-end and back-end applications with React and Laravel.",
          "Built back ends with PHP and MySQL, using the Hydrahon query builder in some systems for cleaner, more efficient SQL.",
          "Built dynamic interfaces with JavaScript, jQuery and AJAX.",
          "Took each system from requirements through to completion, keeping it aligned with what the requesting office expected."
        ],
        stack: ["React", "Next.js", "Laravel", "PHP", "MySQL", "Hydrahon", "jQuery", "AJAX"],
        links: {}
      },
      {
        meta: "Honda Philippines Inc. · Sep 2022 – Jan 2023",
        title: "Improving an existing system with Kaizen",
        context: "The company’s existing web system, which needed better structure, responsiveness and loading performance.",
        role: "System Developer focused on web system development and improvement.",
        pointsLabel: "What I did",
        points: [
          "Applied Kaizen continuous-improvement practices to optimize the system’s structure.",
          "Analyzed and refactored existing code following best practices.",
          "Optimized code to improve responsiveness and reduce loading times.",
          "Several of these optimizations were accepted as Kaizen improvements."
        ],
        stack: ["PHP", "SQL", "JavaScript", "jQuery", "HTML", "CSS"],
        links: {}
      }
    ]
  },

  /* ---------- Skills (set primary: true to highlight a group) ---------- */
  skills: {
    title: "Platform depth, web fundamentals.",
    groups: [
      { name: "ServiceNow", primary: true, items: ["Service Portal", "Service Catalog", "Custom & OOTB widgets", "ITSM", "CSM", "ServiceNow scripting", "Flow Designer", "Angular", "CMDB & CSDM"] },
      { name: "Front end", items: ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js", "jQuery", "AJAX"] },
      { name: "Back end & data", items: ["PHP", "Laravel", "MySQL", "SQL", "Hydrahon"] },
      { name: "Ways of working", items: ["Requirements analysis", "Troubleshooting", "Refactoring", "Kaizen", "Stakeholder collaboration", "Teaching & workshops"] }
    ]
  },

  /* ---------- Experience (newest first) ---------- */
  experience: {
    title: "Where I’ve worked.",
    jobs: [
      {
        title: "ServiceNow Developer",
        tag: "",
        org: "Accenture",
        place: "Mandaluyong City, Metro Manila",
        when: "Aug 2024 – Present",
        roles: [
          { title: "Support Specialist", when: "Jun 2026 – Present" },
          { title: "Senior Analyst", when: "Aug 2024 – Jun 2026" }
        ],
        points: [
          "Develop and maintain Service Portal components and pages for healthcare and pharmaceutical clients.",
          "Build Service Catalog forms, develop custom widgets, configure out-of-the-box widgets and contribute to portal redesigns.",
          "Troubleshoot and resolve portal and application issues, keeping functionality and user experience consistent.",
          "Enhance and modify existing portal features using HTML, CSS, JavaScript and ServiceNow scripting.",
          "Collaborate with team members and stakeholders to analyze requirements and implement solutions.",
          "Support ongoing improvement and maintenance of ServiceNow applications and portal functionality."
        ]
      },
      {
        title: "Web Developer",
        tag: "",
        org: "Batangas State University",
        place: "Malvar, Batangas",
        when: "Mar 2023 – Aug 2024",
        roles: [],
        points: [
          "Sole developer of four campus systems: Computer Laboratory Management, Clinic Management, Transaction Monitoring and Ticketing, and a University Information Kiosk.",
          "Designed and developed front-end and back-end applications using React and Laravel.",
          "Built systems with HTML, CSS, JavaScript, jQuery and AJAX on PHP and MySQL back ends, using Hydrahon for SQL query building in some systems.",
          "Kept development aligned with client expectations from start to delivery."
        ]
      },
      {
        title: "Web Systems Professor",
        tag: "Part-time",
        org: "Batangas State University",
        place: "Malvar, Batangas",
        when: "Aug 2023 – Jan 2024",
        roles: [],
        points: [
          "Taught web system architecture and development methodologies, from fundamentals to advanced concepts.",
          "Led hands-on coding workshops where students built web apps, databases and front-end/back-end interactions."
        ]
      },
      {
        title: "System Developer",
        tag: "",
        org: "Honda Philippines Inc.",
        place: "Tanauan, Batangas",
        when: "Sep 2022 – Jan 2023",
        roles: [],
        points: [
          "Enhanced the company’s existing web system using HTML, CSS, JavaScript, jQuery, PHP and SQL.",
          "Applied Kaizen continuous-improvement practices to optimize the system’s structure.",
          "Refactored and optimized code to improve responsiveness and reduce loading times; several optimizations were accepted as Kaizen improvements."
        ]
      }
    ]
  },

  /* ---------- Certifications ----------
     items: main certifications (newest first), shown as large cards.
     more:  accreditations and micro-certifications, shown as a compact list.
     url = public verification link, badge = image in assets/img/badges/  */
  certifications: {
    title: "Certified on the platform.",
    profileUrl: "https://www.credly.com/users/von-ryan-sumague.9019e3a0/badges",
    items: [
      { name: "Certified Implementation Specialist – Data Foundations (CMDB & CSDM)", issuer: "ServiceNow", date: "Sep 2026", url: "https://www.credly.com/badges/5868893b-aaf7-4d76-ab98-3d68e2d67183", badge: "assets/img/badges/cis-df.png" },
      { name: "Certified Implementation Specialist – Customer Service Management", issuer: "ServiceNow", date: "Apr 2026", url: "https://www.credly.com/badges/d3bcf430-31ce-42bb-b7ac-04cd092c70ad", badge: "assets/img/badges/cis-csm.png" },
      { name: "Certified Implementation Specialist – IT Service Management", issuer: "ServiceNow", date: "Jan 2025", url: "https://www.credly.com/badges/d9b9e5ec-5f5a-4f73-901c-8aaf07507f0d", badge: "assets/img/badges/cis-itsm.png" },
      { name: "Certified System Administrator", issuer: "ServiceNow", date: "Feb 2024", url: "https://www.credly.com/badges/fa446c8e-1400-4f09-95d0-8c04dd768025", badge: "assets/img/badges/csa.png" }
    ],
    moreTitle: "Accreditations & micro-certifications",
    more: [
      { name: "Reinvention with Agentic AI", issuer: "Accenture", date: "Sep 2026", url: "https://www.credly.com/badges/ab870ba3-7cdc-43f4-a390-ab7e1d739618", badge: "assets/img/badges/accenture-agentic-ai.png" },
      { name: "Delivery Accreditation – AI Agents", issuer: "ServiceNow", date: "Aug 2026", url: "https://www.credly.com/badges/bd69b4cc-2135-4a2c-a6a8-5a086b595fff", badge: "assets/img/badges/ai-agents-accreditation.png" },
      { name: "Micro-Certification – Service Portal", issuer: "ServiceNow", date: "Oct 2024", url: "https://www.credly.com/badges/6b320a47-0d58-42de-8c34-619ca5b4fa97", badge: "assets/img/badges/mc-service-portal.png" },
      { name: "Micro-Certification – Integration Hub", issuer: "ServiceNow", date: "Oct 2024", url: "https://www.credly.com/badges/f9c20059-1f49-4ad6-915e-bc3b42baf800", badge: "assets/img/badges/mc-integration-hub.png" },
      { name: "Micro-Certification – Flow Designer", issuer: "ServiceNow", date: "Oct 2024", url: "https://www.credly.com/badges/64ba2589-1a5c-4144-93e2-b67272a3bed6", badge: "assets/img/badges/mc-flow-designer.png" },
      { name: "Micro-Certification – Platform Analytics", issuer: "ServiceNow", date: "Oct 2024", url: "https://www.credly.com/badges/40004806-f767-4ae4-a661-2a4cc1a043ed", badge: "assets/img/badges/mc-platform-analytics.png" },
      { name: "Micro-Certification – Welcome to ServiceNow", issuer: "ServiceNow", date: "Oct 2024", url: "https://www.credly.com/badges/d00a6064-91c7-4a4a-bd77-9b4b0c59e24a", badge: "assets/img/badges/mc-welcome.png" }
    ]
  },

  /* ---------- Education ---------- */
  education: [
    { when: "2018 – 2022", degree: "Bachelor of Science in Information Technology", school: "Polytechnic University of the Philippines", honor: "Magna Cum Laude" },
    { when: "2016 – 2018", degree: "Senior High School — Science, Technology, Engineering and Mathematics (STEM)", school: "First Asia Institute of Technology and Humanities", honor: "Grade 12 Honor" }
  ],

  /* ---------- Contact ---------- */
  contact: {
    title: "Hiring for a remote ServiceNow or web development role? *Let’s talk.*"
  }
};
