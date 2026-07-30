// ─────────────────────────────────────────────
//  PORTFOLIO DATA  — edit this file to update
//  your portfolio without touching any components
// ─────────────────────────────────────────────

export const personal = {
  name: 'Aaryan Dhand',
  tagline: 'Software Engineering Student',
  typedPhrases: [
    'ML & AI Developer.',
    'Data Automation Expert.',
    'Artist at Heart :)',
  ],
  description:
    '4th year Software Engineering student at the University of Calgary. Building intelligent systems at the intersection of machine learning, data engineering, and full-stack development.',
  university: 'University of Calgary',
  email: 'aaryandhandbusiness@gmail.com',
  phone: '',
  github: 'https://github.com/Dhandu7',
  linkedin: 'https://linkedin.com/in/aaryandhand',
  website: 'https://aaryandhand.com',
  resume: 'Aaryan Dhand Resume v7.pdf',

  photo: 'pfp.png',
  photo2: 'pfp2.png'
}

export const stats = [
  { num: '3+', label: 'Work Experiences' },
  { num: '2', label: 'Active Roles' },
  { num: '3', label: 'Hackathons' },
  { num: '20+', label: 'Technologies in Stack' },
]

// ─────────────────────────────────────────────
//  EXPERIENCE
//  Set current: true for active roles (green accent)
// ─────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    company: 'Vivordo Health',
    role: 'AI & Machine Learning Engineer',
    location: 'Calgary, AB (Remote)',
    date: 'Oct 2025 – Present',
    current: true,
    bullets: [
      "Cut LLM response latency 57% by re-architecting the Google Gemini-powered insight layer's inference pipeline, delivering real-time interpretation of biometric signals to users in production.",
      'Trained and shipped a multimodal stress-inference model (semi-supervised, LSTM-based) on HRV and biometric time-series data, serving real-time predictions in a live Flutter + Firebase app.',
      'Moved research prototypes into a production analytics product by deploying TensorFlow/PyTorch models behind RESTful APIs and building the data-preprocessing and model-serving infrastructure they run on.',
    ],
  },
  {
    id: 2,
    company: 'Hydro One Networks',
    role: 'Project Controls - Data Analyst Co-op',
    location: 'Toronto, ON',
    date: 'May 2025 – May 2026',
    current: false,
    bullets: [
      'Built the clean data foundation for downstream ML and predictive analytics by standing up a centralized Microsoft SQL Server warehouse that ingests SAP and OPC operational data through optimized SQL and Python pipelines.',
      'Accelerated material quantification 6x by leading a 6-person team to design scalable Python/VBA ETL workflows over 300+ historical project records, laying groundwork for forecasting and machine learning.',
      'Cut manual reporting workload 95% by engineering end-to-end automation across SharePoint, SAP, Excel VBA, and Python for baseline and month-end cost reporting.',
      'Deployed interactive Power BI dashboards wired to live SAP data via custom Python and Power Query pipelines, giving engineering and project leaders real-time cost and inventory visibility.',
    ],
  },
  {
    id: 3,
    company: 'TechStart UCalgary & Tidefall Studios',
    role: 'Software Developer',
    location: 'Calgary, AB',
    date: 'Oct 2024 – Jun 2025',
    current: false,
    bullets: [
      'Developed and optimized core gameplay systems in Unity (C#) using advanced data structures for dynamic puzzle generation and 40% faster runtime performance.',
      'Led creation of a modular item framework that improved integration speed by 90% and reduced technical debt across multiple feature branches.',
      'Worked in an Agile team with weekly sprints using Jira for backlog management, QA testing, and release scheduling.',
      'Awarded Best Design at TechStart 2025 Final Showcase.',
    ],
  },
    {
    id: 4,
    company: 'Bird Construction',
    role: 'Business Systems Architecture Student',
    location: 'Calgary, AB',
    date: 'May 2024 – Aug 2024',
    current: false,
    bullets: [
      'Worked with Digital Services in the Business Systems Architecture team on delivery of business processes, requirements analysis, design solutions, and the software development life cycle through LeanIX and BIC.',
      'Collaborated with cross-functional teams to analyze and optimize business processes, identify areas for improvement, and design solutions that align with organizational goals.'
    ],
  },
  // ── ADD NEW EXPERIENCE HERE ──
  // {
  //   id: 4,
  //   company: 'Company Name',
  //   role: 'Your Role',
  //   location: 'City, Province',
  //   date: 'Month Year – Month Year',
  //   current: false,
  //   bullets: ['Bullet 1', 'Bullet 2'],
  // },
]

// ─────────────────────────────────────────────
//  PROJECTS
//  image: '/projects/myproject.png'  ← drop images in /public/projects/
//  github & live can be null if not applicable
// ─────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    name: 'SCENR',
    description:
      "SCENR turns the scattered camera rolls of a group trip into polished, platform-ready social reels in about two minutes, no editing skill required. I'm building the AI core: a CLIP-based theme-matching engine that scores everyone's media against per-theme visual \"fingerprints\" using vector search (pgvector), and a deterministic reel-generation pipeline that ranks the best clips, beat-syncs cuts to music with librosa, and renders themed edits with FFmpeg on an async GPU queue. (In progress.)",
    stack: ['Python', 'PyTorch', 'CLIP', 'pgvector', 'FFmpeg', 'librosa', 'PostgreSQL', 'Supabase', 'React'],
    github: null, // TODO: add repo link when public
    live: null,   // TODO: add demo link when available
    image: '/scenr.png', // TODO: drop image in /public/
    emoji: '🎬',
  },
    {
    id: 2,
    name: 'FitPic',
    description:
      'FitPic is a fashion accountability platform that gamifies daily outfit sharing through partner-based streaks, milestones, and an immersive 3D carousel experience. Build with React, Supabase, and Groq powered image analysis, it includes an AI dashboard that analyzes uploaded fits to surface personal style trends and wardrobe insights over time.',
    stack: ['React', 'Vite', 'Supabase', 'Groq API', 'NBA API'],
    github: 'https://github.com/Dhandu7/FitCheck',
    live: 'https://fit-check-sage-one.vercel.app/',
    image: '/fitcheck.png', // e.g. '/projects/nba.png'
    emoji: '🏀',
  },
  {
    id: 3,
    name: 'NBA Betting Odds Analyzer',
    description:
      'A Python tool integrating NBA API game logs with betting market data to generate predictive features and visualize outcomes. Trains ML models to identify value bets and forecast player performance.',
    stack: ['Python', 'Pygame', 'Scikit-Learn', 'Machine Learning', 'NBA API'],
    github: 'https://github.com/Dhandu7/NBA-Betting-Odds-Analyzer',
    live: 'https://youtu.be/-TC345Tr0Oo',
    image: '/statpredictor.png', // e.g. '/projects/nba.png'
    emoji: '🏀',
  },
  {
    id: 4,
    name: 'StyleMate',
    description:
      'AI-powered personalized outfit recommendation system. Built the backend with Django implementing the Google Gemini API, with a React frontend and MySQL for real-time saving functionality.',
    stack: ['React', 'Django', 'Python', 'MySQL', 'Google Gemini', 'Postman'],
    github: 'https://github.com/Shahed-i/StyleMate',
    live: null,
    image: '/stylemate.png',
    emoji: '👗',
  },

  {
    id: 5,
    name: 'Pathways',
    description:
      'A React + Flask platform supporting refugees and immigrants with resource navigation, real-time language translation, tailored job postings, and cultural/mental health resources. Built at Hack the Change 2024.',
    stack: ['React', 'Flask', 'Python', 'DynamoDB', 'AWS', 'Google Cloud'],
    github: 'https://github.com/Dhandu7/hack-the-change-2024',
    live: 'https://www.youtube.com/watch?v=vIc-ibzZHj4',
    image: '/pathways.png',
    emoji: '🌍',
  },
    {
    id: 6,
    name: 'DriveAwake',
    description:
      'Committed to reshaping road safety, DriveAwake employs EOG technology seamlessly integrated into your driving experience. By continuously monitoring real-time brain activity, DriveAwake ensures unwavering focus during long journeys, making each mile safer and prioritizing your well-being on the road—because every journey matters, mile after mile.',
    stack: ['React', 'Arduino', 'C', 'JavaScript', 'Flask', 'Docker','Python'],
    github: 'https://github.com/debodam/nathacks2023',
    live: null,
    image: '/driveawake.png',
    emoji: '🌍',
  },
  // ── ADD NEW PROJECT HERE ──
  // {
  //   id: 4,
  //   name: 'Project Name',
  //   description: 'What it does.',
  //   stack: ['Tech1', 'Tech2'],
  //   github: 'https://github.com/...',
  //   live: 'https://...',
  //   image: '/projects/myproject.png',
  //   emoji: '🚀',
  // },
]

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'C', 'C#', 'C++', 'JavaScript', 'SQL', 'HTML/CSS', 'VBA', 'Assembly'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Flask', 'Django', 'TensorFlow', 'Scikit-Learn', 'Unity', 'Flutter', 'SpringBoot'],
  },
  {
    title: 'Cloud & Data',
    skills: ['AWS', 'Google Cloud', 'Firebase', 'DynamoDB', 'MySQL', 'SQL Server', 'Power BI', 'SAP', 'OPC', 'Fabric'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'Agile / Jira', 'Azure DevOps', 'Postman', 'Figma', 'Linux', 'Arduino', 'Power Query', 'Power Automate', 'SharePoint'],
  },
]
