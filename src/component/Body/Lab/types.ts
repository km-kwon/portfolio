import type React from "react";

export type ExperimentCategory =
  | "performance"
  | "animation"
  | "web-api"
  | "canvas";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Experiment {
  id: string;
  title: string;
  subtitle: string;
  category: ExperimentCategory;

  why: string;
  how: string;
  result: string;

  tags: string[];
  difficulty: Difficulty;

  component: React.LazyExoticComponent<React.ComponentType>;
}

export const categoryLabels: Record<ExperimentCategory, string> = {
  performance: "Performance",
  animation: "Animation",
  "web-api": "Web API",
  canvas: "Canvas",
};

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};
