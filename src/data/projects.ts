/* =========================
   TYPES
========================= */

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ResultMetric {
  metric: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  client: string;
  role: string;

  image: string;
  beforeImage: string;
  afterImage: string;

  hero: {
    headline: string;
    outcome: string;
  };

  problem: string;
  approach: string;
  process: ProcessStep[];
  solution: string;
  results: ResultMetric[];
}

/* =========================
   ASSETS
========================= */

import finflowBefore from "@/assets/finflow-before.png";
import finflowAfter from "@/assets/finflow-after.png";

import mediconnectBefore from "@/assets/mediconnect-before.png";
import mediconnectAfter from "@/assets/mediconnect-after.png";

import learnpathBefore from "@/assets/learnpath-before.jpg";
import learnpathAfter from "@/assets/learnpath-after.png";

/* =========================
   PROJECT DATA
========================= */

export const projects: Project[] = [
  {
    id: "finflow",
    title: "FinFlow — Rethinking Personal Finance",
    summary:
      "Simplified a cluttered financial dashboard into a focused experience that increased user engagement by 40%.",
    tags: ["Product Design", "UX Research", "Design System"],
    year: "2024",
    client: "FinFlow Inc.",
    role: "Lead UX Designer",

    image: finflowAfter,
    beforeImage: finflowBefore,
    afterImage: finflowAfter,

    hero: {
      headline: "Turning financial overwhelm into confident decisions",
      outcome: "40% increase in daily active users within 3 months",
    },

    problem:
      "FinFlow's dashboard tried to show everything at once. Users felt overwhelmed and dropped off early.",

    approach:
      "Rebuilt around key daily decisions instead of raw information.",

    process: [
      { title: "User Research", desc: "Interviewed 24 users." },
      { title: "IA", desc: "Introduced progressive disclosure." },
      { title: "Wireframes", desc: "Built and tested prototypes." },
      { title: "Iteration", desc: "Refined through usability cycles." },
    ],

    solution:
      "A contextual dashboard that surfaces relevant insights at the right time.",

    results: [
      { metric: "+40%", label: "Daily Active Users" },
      { metric: "3s", label: "Time to First Action" },
      { metric: "4.6★", label: "App Store Rating" },
    ],
  },

  {
    id: "mediconnect",
    title: "MediConnect — Healthcare Made Accessible",
    summary:
      "Redesigned a patient portal to reduce booking time by 60%.",
    tags: ["UX Design", "Accessibility"],
    year: "2023",
    client: "MediConnect Health",
    role: "Senior UX Designer",

    image: mediconnectAfter,
    beforeImage: mediconnectBefore,
    afterImage: mediconnectAfter,

    hero: {
      headline: "Making healthcare navigation feel human again",
      outcome: "60% faster booking",
    },

    problem:
      "Booking required too many steps and caused drop-offs.",

    approach:
      "Shifted navigation to patient intent instead of departments.",

    process: [
      { title: "Research", desc: "Observed real users." },
      { title: "Audit", desc: "Found accessibility gaps." },
      { title: "Redesign", desc: "Reduced steps from 7 → 3." },
    ],

    solution:
      "A simplified, intent-driven booking flow.",

    results: [
      { metric: "-60%", label: "Booking Time" },
      { metric: "-45%", label: "Support Calls" },
    ],
  },

  {
    id: "learnpath",
    title: "LearnPath — Adaptive Learning Experience",
    summary:
      "Improved completion rates from 23% to 67%.",
    tags: ["Product Design"],
    year: "2023",
    client: "LearnPath Education",
    role: "UX Designer",

    image: learnpathAfter,
    beforeImage: learnpathBefore,
    afterImage: learnpathAfter,

    hero: {
      headline: "Learning that adapts to you",
      outcome: "Completion rates increased to 67%",
    },

    problem:
      "Low completion rates due to rigid learning structure.",

    approach:
      "Built adaptive learning paths based on behavior.",

    process: [
      { title: "Segmentation", desc: "Defined learner types." },
      { title: "Mapping", desc: "Identified drop-offs." },
      { title: "System", desc: "Built adaptive logic." },
    ],

    solution:
      "An adaptive system that adjusts content dynamically.",

    results: [
      { metric: "+67%", label: "Completion Rate" },
      { metric: "+35%", label: "Session Duration" },
    ],
  },
];

/* =========================
   HELPERS (FIXED)
========================= */

// ✅ safer + typed map
const projectMap: Record<string, Project> = projects.reduce(
  (acc, project) => {
    acc[project.id] = project;
    return acc;
  },
  {} as Record<string, Project>
);

// ✅ FIXED: now always resolves properly + simulates async
export async function getProjectById(id: string): Promise<Project | null> {
  if (!id) return null;

  // simulate real API delay (prevents race issues)
  await new Promise((res) => setTimeout(res, 200));

  return projectMap[id] ?? null;
}

export async function getAllProjects(): Promise<Project[]> {
  await new Promise((res) => setTimeout(res, 200));
  return projects;
}