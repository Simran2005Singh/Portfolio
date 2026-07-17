// Portfolio content data for Simran Singh

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'internship' | 'hackathon' | 'leadership' | 'training' | 'volunteer';
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface CodingProfile {
  name: string;
  username: string;
  rating?: string;
  solved: string;
  link: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatar: string;
}

export const personalInfo = {
  name: 'Simran Singh',
  titles: [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Competitive Programmer',
    'DSA Enthusiast'
  ],
  bio: 'A passionate developer driven by problem-solving and building premium software solutions. With a strong foundation in Data Structures & Algorithms, I specialize in full-stack web applications, creating intuitive interfaces, and building resilient backend architectures.',
  email: 'simran.singh@example.com',
  phone: '+91 XXXXX XXXXX',
  location: 'India',
  resumeUrl: '/resume.pdf',
  education: {
    college: 'Your Engineering College / University Name',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    graduationYear: 'Expected June 2027',
    gpa: '9.0/10'
  }
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'FiGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FiLinkedin' },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: 'SiLeetcode' },
  { name: 'CodeChef', url: 'https://codechef.com', icon: 'SiCodechef' },
  { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', icon: 'SiGeeksforgeeks' }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 }
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 80 }
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 80 }
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
      { name: 'Docker', level: 60 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'campusbites',
    title: 'CampusBites',
    description: 'A smart food ordering and management web app for university campuses that reduces wait times and optimizes kitchen management.',
    longDescription: 'CampusBites is a comprehensive digital solution designed to streamline cafeteria operations. It features real-time order tracking, queue optimization, digital payment integration, and a rich admin panel for kitchen staff to manage inventory and prioritize orders based on preparation times.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.io'],
    features: [
      'Real-time order tracking using WebSockets',
      'Smart queue estimation algorithm',
      'Cafeteria operator dashboard for managing active menu items',
      'Secure customer authentication and checkout process'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'campusbites',
    tags: ['Full Stack', 'WebSockets', 'Real-time'],
    featured: true
  },
  {
    id: 'smart-portfolio',
    title: 'Smart Portfolio Management',
    description: 'A comprehensive investment tracking and portfolio analysis platform using customized DS&A implementation.',
    longDescription: 'A premium full-stack platform that empowers investors to manage asset allocations, track historical performance, and analyze risk profiles. Features custom implementations of data structures (Trie, Max Heap, Stack, HashMap) to deliver instant calculations and complex transaction history sorting.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    features: [
      'Custom Trie for instantaneous asset search auto-completion',
      'Max Heap structure for real-time asset ranking and alerts',
      'Interactive visual graphs utilizing Chart.js / Recharts',
      'Dynamic transaction undo/redo stack manager'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'smart_portfolio',
    tags: ['Data Structures', 'Fintech', 'TypeScript'],
    featured: true
  },
  {
    id: 'digital-health',
    title: 'Digital Health Hackathon System',
    description: 'An AI-powered emergency routing and doctor-patient consultation matching platform.',
    longDescription: 'Developed during a global health hackathon, this solution coordinates emergency ambulance routing using basic graph algorithms and matches patients to open specialists based on symptoms using a lightweight NLP matching engine.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Python'],
    features: [
      'Shortest path emergency dispatch routing simulation',
      'Lightweight NLP symptom analyzer for doctor matching',
      'Real-time video consult scheduler',
      'Responsive patient portal for checking lab reports'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'digital_health',
    tags: ['Hackathon Winner', 'AI Health', 'Maps API'],
    featured: false
  },
  {
    id: 'forest-management',
    title: 'Forest Management System',
    description: 'An ecological monitoring platform displaying wildlife migrations, vegetation density, and wildfire risks.',
    longDescription: 'Designed as an admin portal for ecological research and conservation teams. Provides mapping visualizations, environmental sensor integrations, and automated alerts for suspicious temperature spikes (wildfire risk indicator).',
    techStack: ['React', 'Leaflet Maps', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    features: [
      'Interactive maps showing sensor grids and live status',
      'Wildlife sighting logs and migration path heatmaps',
      'Ecological reports generation with automated PDF export',
      'Role-based authorization (Admin, Ranger, Researcher)'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'forest_management',
    tags: ['Ecology', 'GIS Maps', 'Dashboard'],
    featured: false
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: 'exp1',
    role: 'Full Stack Developer Intern',
    company: 'Tech Solutions Corp',
    duration: 'May 2026 - July 2026',
    description: [
      'Architected and implemented responsive frontend layouts using React and Tailwind CSS.',
      'Designed RESTful APIs using Node.js and Express, improving database query speed by 25%.',
      'Integrated Git-based CI/CD workflows and conducted rigorous code reviews.'
    ],
    type: 'internship'
  },
  {
    id: 'exp2',
    role: 'Hackathon Finalist',
    company: 'Smart India Hackathon',
    duration: 'December 2025',
    description: [
      'Led a team of 6 to build a working prototype for a smart healthcare resource allocation dashboard.',
      'Developed real-time notification microservices and verified usability under high load.',
      'Presented the final pitch to ministry representatives and technical jurors.'
    ],
    type: 'hackathon'
  },
  {
    id: 'exp3',
    role: 'Lead Technical Coordinator',
    company: 'College Coding Club',
    duration: 'August 2025 - Present',
    description: [
      'Organized weekly competitive programming contests and bootcamps on Data Structures & Algorithms.',
      'Mentored 150+ freshman students in beginning their web development journeys.',
      'Designed the club portal and problem submission dashboard.'
    ],
    type: 'leadership'
  },
  {
    id: 'exp4',
    role: 'Full Stack Development Training',
    company: 'WebDev Academy',
    duration: 'June 2025 - August 2025',
    description: [
      'Completed an intensive 12-week course focusing on MERN stack, testing, and system architecture.',
      'Built 5 industry-grade projects incorporating secure payment gateways and OAuth.'
    ],
    type: 'training'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'Finalist - Smart India Hackathon 2025',
    issuer: 'Ministry of Education, Govt. of India',
    date: 'Dec 2025',
    description: 'Developed a system for automated allocation of resources across state-run clinics using dynamic programming.'
  },
  {
    id: 'ach2',
    title: 'Top 3 Winner - Global Digital Health Hackathon',
    issuer: 'Digital Health Alliance',
    date: 'Oct 2025',
    description: 'Built a patient-to-doctor smart scheduling and consultation dashboard with symptom prediction.'
  },
  {
    id: 'ach3',
    title: '1st Runner Up - Indradhanu Hackathon',
    issuer: 'State College Tech Fest',
    date: 'Feb 2025',
    description: 'Designed a peer-to-peer textbook and resource rental application running on serverless architecture.'
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    username: 'simran_singh',
    rating: '1850+ (Knight)',
    solved: '500+',
    link: 'https://leetcode.com',
    icon: 'SiLeetcode'
  },
  {
    name: 'CodeChef',
    username: 'simran_chef',
    rating: '1700+ (3 Star)',
    solved: '250+',
    link: 'https://codechef.com',
    icon: 'SiCodechef'
  },
  {
    name: 'GitHub',
    username: 'simran-singh-dev',
    rating: '50+ Repositories',
    solved: '800+ Contributions',
    link: 'https://github.com',
    icon: 'FiGithub'
  },
  {
    name: 'GeeksforGeeks',
    username: 'simran_gfg',
    rating: 'Top 5% Rank',
    solved: '400+',
    link: 'https://geeksforgeeks.org',
    icon: 'SiGeeksforgeeks'
  },
  {
    name: 'HackerRank',
    username: 'simran_rank',
    rating: '5 Gold Badges',
    solved: '150+',
    link: 'https://hackerrank.com',
    icon: 'SiHackerrank'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Dr. Sarah Jenkins',
    role: 'Senior Healthcare Consultant',
    company: 'Digital Health Alliance',
    feedback: 'Simran possesses a rare combination of technical depth and product intuition. The solution built during our hackathon was highly scalable and beautifully designed, and Simran was the key architect.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 'test2',
    name: 'Rajesh Verma',
    role: 'Technical Manager',
    company: 'Tech Solutions Corp',
    feedback: 'Working with Simran was a fantastic experience. During the internship, Simran took ownership of core frontend routes and accelerated our styling updates. A self-starter with great collaborative skills!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
];
