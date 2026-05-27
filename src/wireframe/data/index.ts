// Adapter — re-shapes existing project / blog / career data into the wireframe format

import type { Project } from "../../component/Body/Home/projects/types";
import { MOCK_ALL_POSTS } from "../../component/Body/Blog/data/postingDatas";
import { careerData } from "../../component/Body/Home/skills/career/careerData";

const projectModules = import.meta.glob("../../component/Body/Home/projects/data/**/*.tsx", {
  eager: true,
}) as Record<string, Record<string, unknown>>;

const PROJECT_ORDER = [
  "p2p-service",
  "secure-chat",
  "vary-recycle",
  "llm-lstm-bert",
  "mogang",
  "ssangsang",
];

const PROJECT_VISUAL: Record<string, { year: string; role: string; tags: string[]; color: string }> = {
  "p2p-service":   { year: "2023", role: "System Engineer",    tags: ["동시성", "무결성"],       color: "#7C5CFF" },
  "secure-chat":   { year: "2023", role: "Frontend Architect", tags: ["보안 통신", "구조 설계"], color: "#19E6A6" },
  "vary-recycle":  { year: "2023", role: "Frontend Engineer",  tags: ["사용자 흐름", "AI 연동"], color: "#F5C518" },
  "llm-lstm-bert": { year: "2022", role: "Data Engineer",      tags: ["데이터 파이프라인", "AI"], color: "#FF4D2E" },
  "mogang":        { year: "2024", role: "Frontend Lead",      tags: ["탐색 UX", "SSR"],         color: "#7C5CFF" },
  "ssangsang":     { year: "2023", role: "Frontend Engineer",  tags: ["운영 흐름", "모바일 웹"], color: "#19E6A6" },
};

export type WireProject = Omit<Project, "role"> & {
  year: string;
  // String label for the resume-style "Role" cell. The original Project.role
  // (with percentage + tasks) is preserved on `roleDetail` so DetailPage can
  // still render the task list.
  role: string;
  roleDetail: Project["role"];
  visualTags: string[];
  color: string;
  stack: string[];
  metrics: { v: string; d: string }[];
};

const allProjects: Project[] = Object.values(projectModules)
  .map((mod) => {
    const exported = mod.default ?? Object.values(mod)[0];
    return exported as Project | undefined;
  })
  .filter((p): p is Project => Boolean(p));

const indexById = new Map<string, Project>(allProjects.map((p) => [p.id, p]));

export const PROJECTS: WireProject[] = PROJECT_ORDER
  .map((id) => indexById.get(id))
  .filter((p): p is Project => Boolean(p))
  .map((p) => {
    const visual = PROJECT_VISUAL[p.id] ?? {
      year: "—", role: p.team || "", tags: p.tags.slice(0, 2), color: "#7C5CFF",
    };
    const stackFromTechDecisions = p.techDecisions?.map((d) => d.tech) ?? [];
    const stack = stackFromTechDecisions.length > 0
      ? Array.from(new Set([...stackFromTechDecisions, ...p.tags])).slice(0, 6)
      : p.tags.slice(0, 6);
    const metrics = (p.highlights ?? []).slice(0, 3).map((h) => ({ v: h.value, d: h.label }));
    const { role: originalRole, ...rest } = p;
    return {
      ...rest,
      year: visual.year,
      role: visual.role,
      roleDetail: originalRole,
      visualTags: visual.tags,
      color: visual.color,
      stack,
      metrics: metrics.length > 0
        ? metrics
        : [{ v: "—", d: "핵심 지표 준비 중" }],
    } satisfies WireProject;
  });

// ── Blog ─────────────────────────────────────────────────────────────────
export interface WireBlogPost {
  slug: string;
  date: string;     // YYYY.MM
  title: string;
  read: number;
  tag: string;
  featured?: boolean;
  excerpt: string;
  cover?: string;
}

const monthFromKorean = (kor: string): string => {
  const m = kor.match(/(\d+)년\s*(\d+)월/);
  if (!m) return kor;
  return `${m[1]}.${m[2].padStart(2, "0")}`;
};

const estimateReadMinutes = (content: string | undefined): number => {
  if (!content) return 6;
  const words = content.split(/\s+/).length;
  return Math.max(4, Math.round(words / 320));
};

export const BLOG_POSTS: WireBlogPost[] = MOCK_ALL_POSTS.map((post, idx) => ({
  slug: post.slug,
  date: monthFromKorean(post.date),
  title: post.title,
  read: estimateReadMinutes(post.content),
  tag: post.tags[0] ?? post.category ?? "Etc",
  featured: idx === 0,
  excerpt: post.excerpt,
  cover: post.cover,
}));

// ── Career Timeline ─────────────────────────────────────────────────────
export interface WireTimelineRow {
  y: string;
  role: string;
  org: string;
  detail?: string;
}

const educationRows: WireTimelineRow[] = [
  { y: "2019",  role: "Cyber Security Major · CS Student", org: "Ajou University", detail: "사이버보안 전공 입학" },
  { y: "2024",  role: "Computer Engineering · B.S.",       org: "Ajou University", detail: "사이버보안/소프트웨어 전공 졸업" },
];

export const TIMELINE: WireTimelineRow[] = [
  ...careerData.map((c) => ({
    y: (c.period.split(" - ")[0] || c.period).slice(0, 7).trim(),
    role: c.position,
    org:  c.company,
    detail: c.department,
  })),
  ...educationRows,
].sort((a, b) => b.y.localeCompare(a.y));

// ── Skills (for resume + home preview) ───────────────────────────────────
export interface WireSkillGroup { group: string; items: string[] }

export const SKILLS: WireSkillGroup[] = [
  { group: "Frontend Core",     items: ["React", "TypeScript", "Next.js", "Electron", "Zustand", "TailwindCSS"] },
  { group: "Architecture",      items: ["Domain-Driven Design", "Web Worker", "Event Bus", "IPC"] },
  { group: "Performance",       items: ["Virtual Scroll", "Rendering Optimization", "Memory Management", "Streaming"] },
  { group: "Security & Infra",  items: ["RSA / AES", "Network Forensics", "Linux / Shell", "GitLab CI", "Docker"] },
  { group: "AI & Data",         items: ["Python", "PyTorch", "TensorFlow", "BERT / LSTM", "OpenCV"] },
];

// ── Misc ─────────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/km-kwon",            host: "github.com/km-kwon" },
  { label: "Velog",    href: "https://velog.io/@gyeongminkwon/posts", host: "velog.io/@gyeongminkwon" },
  { label: "Email",    href: "mailto:lanos0609@gmail.com",            host: "lanos0609@gmail.com" },
];

export const HERO_STREAM = [
  ["01", "LOG STREAM", "80K/s"],
  ["02", "1M SEARCH", "2s"],
  ["03", "ANALYSIS FLOW", "5m→30s"],
  ["04", "EXPORT MEMORY", "-60%"],
] as const;
