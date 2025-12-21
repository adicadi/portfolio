
export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  imageUrl: string;
  ExternalLink: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}