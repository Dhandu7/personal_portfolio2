// ─────────────────────────────────────────────
//  PORTFOLIO DATA  — edit this file to update
//  your portfolio without touching any components
// ─────────────────────────────────────────────

export const personal = {
  name: 'Aaryan Dhand',
  tagline: 'Software Engineering Student',
  typedPhrases: [
    'Software Engineer.',
    'ML & AI Developer.',
    'Data Automation Expert.',
    'Full Stack Builder.',
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
  resume: 'Aaryan Dhand Resume 2026 v2.pdf',

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
      'Researching deep learning applications and physiological datasets to develop an in-house model that quantifies stress levels from biometric data.',
      'Building and deploying TensorFlow models connected to a Flutter + Firebase app via REST APIs for real-time stress analytics.',
      'Developing an intelligent insight layer using Google Gemini for real-time interpretation of biometric signals through prompt engineering and automated LLM-driven feedback.',
      'Collaborating in weekly Agile sprints to deliver iterative improvements across data preprocessing, backend integration, and cloud deployment pipelines.',
    ],
  },
  {
    id: 2,
    company: 'Hydro One Networks',
    role: 'Project Controls Developer Co-op',
    location: 'Toronto, ON',
    date: 'May 2025 – Present',
    current: true,
    bullets: [
      'Worked as a key member of the Project Controls team to automate data workflows and provide analytic solutions to allow actionable insights for project managers and executives.',
      'Automated transfer of operational data into a centralized SQL Server using optimized Python scripts interfacing with SAP and OPC systems.',
      'Led a 6-person team to design ETL workflows in Python and VBA, accelerating material quantification by 1900% and enabling future predictive analytics.',
      'Engineered automation pipelines for cost reporting, reducing manual workload by 95% using Python, VBA, and SharePoint.',
      'Deployed interactive Power BI dashboards linked to live SAP data for executive reporting, improving project visibility and decision-making.',
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
    name: 'NBA Betting Odds Analyzer',
    description:
      'A Python tool integrating NBA API game logs with betting market data to generate predictive features and visualize outcomes. Trains ML models to identify value bets and forecast player performance.',
    stack: ['Python', 'Pygame', 'Scikit-Learn', 'Machine Learning', 'NBA API'],
    github: 'https://github.com/Dhandu7/NBA-Betting-Odds-Analyzer',
    live: 'https://youtu.be/-TC345Tr0Oo',
    image: 'statpredictor.png', // e.g. '/projects/nba.png'
    emoji: '🏀',
  },
  {
    id: 2,
    name: 'StyleMate',
    description:
      'AI-powered personalized outfit recommendation system. Built the backend with Django implementing the Google Gemini API, with a React frontend and MySQL for real-time booking functionality via SpringBoot.',
    stack: ['React', 'Django', 'Python', 'MySQL', 'Google Gemini', 'Postman'],
    github: 'https://github.com/Shahed-i/StyleMate',
    live: null,
    image: 'stylemate.png',
    emoji: '👗',
  },
  {
    id: 3,
    name: 'Pathways',
    description:
      'A React + Flask platform supporting refugees and immigrants with resource navigation, real-time language translation, tailored job postings, and cultural/mental health resources. Built at Hack the Change 2024.',
    stack: ['React', 'Flask', 'Python', 'DynamoDB', 'AWS', 'Google Cloud'],
    github: 'https://github.com/Dhandu7/hack-the-change-2024',
    live: 'https://www.youtube.com/watch?v=vIc-ibzZHj4',
    image: 'pathways.png',
    emoji: '🌍',
  },
    {
    id: 4,
    name: 'DriveAwake',
    description:
      'Committed to reshaping road safety, DriveAwake employs EOG technology seamlessly integrated into your driving experience. By continuously monitoring real-time brain activity, DriveAwake ensures unwavering focus during long journeys, making each mile safer and prioritizing your well-being on the road—because every journey matters, mile after mile.',
    stack: ['React', 'Arduino', 'C', 'JavaScript', 'Flask', 'Docker','Python'],
    github: 'https://github.com/debodam/nathacks2023',
    live: null,
    image: 'driveawake.png',
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
