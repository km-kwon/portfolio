export type SkillTabType = "stack" | "career" | "opensource";

export interface SkillCategory {
  title: string;
  chipLabel?: string;
  skills: string[];
}

export interface TechStack {
  languages: string[];
  libs: string[];
  patterns: string[];
}

export interface ProjectInCareer {
  name: string;
  period: string;
  role: string;
  description: string;
  tasks: string[];
  achievements?: string[];
  techStack?: TechStack;
}

export interface CareerItem {
  id: string;
  company: string;
  companyLogo?: string;
  position: string;
  period: string;
  projects: ProjectInCareer[];
}

export interface OpenSourcePackage {
  id: string;
  name: string;
  description: string;
  version: string;
  downloads?: string;
  githubUrl?: string;
  npmUrl?: string;
  techStack: string[];
}
