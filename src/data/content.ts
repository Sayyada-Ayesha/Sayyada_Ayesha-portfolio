// =====================================================================
// CENTRAL CONTENT CONFIG
// Edit this file to update site content. No facts are invented here —
// anything not explicitly supplied is left as an empty string / [] so
// it's obvious what still needs to be filled in.
// =====================================================================

export const profile = {
  name: 'Sayyada Ayesha',
  positioning: 'Founder • AI Creative Technologist • Digital Builder',
  company: 'SYNX AI Horizon',
  location: 'Hyderabad, Pakistan',
  // Path to resume PDF — place the actual file at public/assets/resume/
  resumePath: '/assets/resume/Sayyada-Ayesha-Resume.pdf',
  profilePhoto: '', // place an actual photo at public/assets/profile/ and set this path
  email: '', // add real email here
}

export const hero = {
  headline: 'I turn ideas into intelligent digital experiences.',
  supporting: 'Founder of SYNX AI Horizon • AI • Automation • Design • Digital Products',
  microcopy:
    'Building at the intersection of artificial intelligence, creativity, design and digital business.',
  ctas: [
    { label: 'Explore My Work', href: '#projects' },
    { label: "Let's Connect", href: '#contact' },
    { label: 'Download Resume', href: profile.resumePath, download: true },
  ],
}

export const about = {
  tagline:
    'An IT graduate, founder and creative technologist exploring how AI can turn ideas, workflows and business problems into practical digital solutions.',
  pillars: ['AI', 'Design', 'Automation', 'Digital Products', 'Creative Technology', 'Entrepreneurship'],
}

export const education = [
  {
    degree: 'BS Information Technology',
    school: 'Government College University, Hyderabad, Pakistan',
    period: '', // exact dates not supplied
  },
]

export const experience = [
  {
    role: 'CEO / Founder',
    org: 'SYNX AI Horizon',
    period: 'Dec 2025 – Present',
  },
  {
    role: 'Graphic Designer',
    org: 'Freelance & Projects',
    period: '2023 – Present',
  },
  {
    role: 'Intern, Front-End Web Development',
    org: 'Interns Pakistan',
    period: 'Jul 2024 – Aug 2024',
  },
  {
    role: 'Computer Science Instructor',
    org: 'Iqra Public High School',
    period: 'Mar 2021 – Jan 2023',
  },
  {
    role: 'Intern',
    org: 'Alkhidmat',
    period: '', // exact dates not supplied
  },
  {
    role: 'Graduate',
    org: 'Aspire Leadership Program',
    period: '', // exact dates not supplied
  },
]

export const synx = {
  heading: 'Building SYNX AI Horizon',
  subheading: 'An AI-first digital remote agency turning ideas into digital solutions.',
  description:
    'SYNX AI Horizon is a young, ambitious AI-first digital agency focused on turning ideas into practical digital businesses — building digital solutions, automating repetitive tasks, and supporting business operations.',
  services: [
    'AI Automation',
    'Web Development',
    'Graphic Design',
    'UI/UX',
    'Branding',
    'Digital Solutions',
    'Workflow Automation',
    'Creative Technology',
  ],
  linkedin: 'https://www.linkedin.com/company/synx-ai-horizon',
  website: '', // no company website supplied
}

export const skills = {
  'AI & Generative AI': [
    'Prompt Engineering',
    'AI Automation',
    'AI-assisted Workflows',
    'Gemini',
    'Google AI Studio',
    'ChatGPT',
    'Copilot',
  ],
  'Graphic Design': ['Logo Design', 'Poster Design', 'Brochures', 'Social Media Graphics', 'Branding'],
  'UI/UX': ['Figma', 'UI Layouts', 'UX Thinking'],
  Web: ['HTML', 'CSS', 'Web Layouts', 'Vibe Coding'],
  Creative: ['Creative Writing', 'SEO Content Writing', 'Research', 'Presentation Design'],
  'Soft Skills': ['Leadership', 'Communication', 'Critical Thinking', 'Teamwork', 'Feedback Handling', 'Creativity'],
}

export const projects = [
  {
    title: 'InSaaf AI',
    tag: 'AI • Legal Tech',
    status: '',
    description:
      'An AI-focused legal assistance project designed to make legal guidance more accessible to local people.',
  },
  {
    title: 'Smart Exam System',
    tag: 'AI • Final Year Project (GCUH)',
    status: 'Currently in Development',
    description:
      'A Streamlit web app for GCUH that uses Ollama for local AI grading of subjective exam answers, with a Supabase backend, PWA support, anti-cheat features, and automated HOD email reporting.',
  },
  {
    title: 'Aegis AI',
    tag: 'AI',
    status: '',
    description: 'See Writing & Publications for the related write-up.',
  },
  {
    title: 'Water Level Indicator',
    tag: 'IoT / Hardware',
    status: '',
    description: 'An academic IoT project exploring hardware-based water level detection.',
  },
  {
    title: 'Portfolio & Digital Designs',
    tag: 'Design',
    status: '',
    description: 'A selection of creative and design work — see the Creative Work gallery below.',
  },
]

export const publications = [
  { title: 'Vibe Coding Handbook', org: 'SYNX AI Horizon', date: '05/2026' },
  { title: 'Aegis AI', org: 'SYNX AI Horizon', date: '04/2026' },
]

export const certifications = [
  { name: 'AI Specialization', issuer: 'Coursera' },
  { name: 'Prompt Engineering', issuer: 'Coursera' },
  { name: 'Graphic Designing (UI/UX)', issuer: 'DigiSkills.pk' },
  { name: 'Canva Project', issuer: 'Coursera' },
  { name: 'Creative Writing', issuer: 'DigiSkills.pk' },
  { name: 'Communication & Soft Skills', issuer: 'DigiSkills.pk' },
  { name: 'Aspire Leadership Program', issuer: 'Graduate' },
]

export const achievements = [
  { title: 'Aspire Leadership Program — Graduate', period: '' },
  { title: 'Presented IoT Project at IT Exhibition', period: 'Jan 2024' },
  { title: '2nd Position — Bait Bazi Competition, Talent Festival, GCU Hyderabad', period: 'Dec 2023' },
]

export const galleryCategories = [
  'All',
  'UI/UX',
  'Graphic Design',
  'AI Design',
  'Data / Excel',
  'SEO & Writing',
  'Research',
  'Guides',
  'Lab Manuals',
  'Presentations',
  'Assignment Writing',
  'Case Studies',
]

// Portfolio items — populate as individual assets become available.
// Until then, the gallery renders an elegant document-viewer/download
// card pointing at the Portfolio PDF instead of broken image links.
export const portfolioPdfPath = '/assets/portfolio/Sayyada-Ayesha-Portfolio.pdf'
export const galleryItems: { title: string; category: string; image?: string }[] = []

export const socialLinks = {
  personalLinkedIn: 'https://www.linkedin.com/in/sayyada-ayesha-synx/',
  companyLinkedIn: 'https://www.linkedin.com/company/synx-ai-horizon',
  personalInstagram: '',
  personalFacebook: '',
  companyInstagram: '',
  companyFacebook: '',
  github: '',
  email: profile.email,
}

export const seo = {
  title: 'Sayyada Ayesha | AI Founder, Creative Technologist & Digital Builder',
  description:
    'Sayyada Ayesha — Founder of SYNX AI Horizon, IT graduate and creative technologist working across AI, automation, digital design, UI/UX and web development.',
}
