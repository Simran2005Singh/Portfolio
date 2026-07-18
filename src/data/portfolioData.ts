// Minimal premium portfolio content data for Simran Singh

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'leadership' | 'internship' | 'hackathon';
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface CodingProfile {
  name: string;
  username: string;
  solved: string;
  rating?: string;
  link: string;
  icon: string;
}

export const personalInfo = {
  name: 'SIMRAN SINGH',
  titles: [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver'
  ],
  bio: 'A passionate developer driven by engineering high-performance systems and clean user interfaces. Specializing in full-stack web architectures, core data structures, and optimized backend query designs.',
  oneSentence: 'I design and build premium web systems with a focus on algorithm efficiency, latency reduction, and clean code aesthetics.',
  email: 'simransingh631716@gmail.com',
  phone: '7611164130',
  location: 'Pune, India',
  resumeUrl: '/resume.pdf',
  education: {
    college: 'Army Institute of Technology',
    degree: 'B.E in Information Technology',
    graduationYear: 'Expected 2027',
    gpa: '9.1 CGPA'
  }
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/simran2005singh', icon: 'FiGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FiLinkedin' },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: 'SiLeetcode' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [{ name: 'Java' }, { name: 'C++' }, { name: 'JavaScript' }, { name: 'TypeScript' }]
  },
  {
    category: 'Frameworks',
    skills: [{ name: 'React' }, { name: 'Node.js' }, { name: 'Express' }]
  },
  {
    category: 'Databases',
    skills: [{ name: 'MySQL' }, { name: 'MongoDB' }]
  },
  {
    category: 'Cloud',
    skills: [{ name: 'AWS (S3, EC2)' }, { name: 'Docker' }]
  },
  {
    category: 'Tools',
    skills: [{ name: 'Git & GitHub' }, { name: 'Figma' }, { name: 'VS Code' }]
  }
];

export const projects: Project[] = [
  {
    id: 'campusbites',
    title: 'CampusBites',
    description: 'A smart cafeteria management system providing real-time ordering and optimized kitchen dispatch using customized data structure queues.',
    techStack: ['React', 'Express', 'MySQL', 'JWT', 'Trie', 'Queue', 'Stack', 'Heap'],
    githubUrl: 'https://github.com/simran2005singh',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: 'portfolio-management',
    title: 'Portfolio Management System',
    description: 'A premium full-stack asset allocation tracking system that calculates real-time asset rank order via custom Max Heaps.',
    techStack: ['React', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/simran2005singh',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: 'libraflow',
    title: 'LibraFlow',
    description: 'A responsive full-stack inventory management system integrating secure JWT authentication, query caching, and active log traces.',
    techStack: ['React', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/simran2005singh',
    liveUrl: 'https://example.com',
    featured: true
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: 'exp1',
    role: 'Secretary Technical Board',
    company: 'Army Institute of Technology',
    duration: 'August 2025 - Present',
    description: [
      'Spearheaded all technical events, campus bootcamps, and coding hackathons, leading a club coordinator team of 15 members.',
      'Designed and deployed internal college portals using React and Express, improving student event registration workflows.',
      'Organized weekly competitive programming sessions, mentoring 200+ freshman students in Data Structures & Algorithms.'
    ],
    type: 'leadership'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'Global Digital Health Summit Finalist',
    issuer: 'Digital Health Alliance',
    date: 'Oct 2025',
    description: 'Pitched an emergency specialist doctor router that matches patient symptoms in real-time under high concurrency.'
  },
  {
    id: 'ach2',
    title: 'AlgoFusion Finalist',
    issuer: 'National Coding Hackathon',
    date: 'Sep 2025',
    description: 'Engineered a graph dispatch simulation to resolve logistics scheduling delays.'
  },
  {
    id: 'ach3',
    title: 'SIH Participant',
    issuer: 'Smart India Hackathon, Govt. of India',
    date: 'Dec 2025',
    description: 'Developed a clinic resource allocation prototype utilizing linear programming algorithms.'
  },
  {
    id: 'ach4',
    title: 'Pragati Scholarship Recipient',
    issuer: 'AICTE, Govt. of India',
    date: 'May 2024',
    description: 'Awarded academic scholarship for technical academic performance.'
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    username: 'simran2005singh',
    solved: '300+ Problems',
    rating: 'Knight Rating',
    link: 'https://leetcode.com',
    icon: 'SiLeetcode'
  },
  {
    name: 'Codolio',
    username: 'simran2005singh',
    solved: 'All Profiles Integrated',
    rating: 'Top 10%',
    link: 'https://codolio.com',
    icon: 'FiCode'
  }
];
