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

  // Visuals
  image: string; // thumbnail
  beforeImage: string;
  afterImage: string;

  // Hero
  hero: {
    headline: string;
    outcome: string;
  };

  // Content
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
      "FinFlow's dashboard tried to show everything at once. Users felt overwhelmed and dropped off early. The issue wasn’t missing features — it was lack of hierarchy.",

    approach:
      "Users didn’t want more data — they wanted direction. The experience was rebuilt around key daily decisions instead of raw information.",

    process: [
      {
        title: "User Research",
        desc: "Interviewed 24 users to uncover decision-making patterns.",
      },
      {
        title: "Information Architecture",
        desc: "Introduced progressive disclosure based on priority.",
      },
      {
        title: "Wireframing",
        desc: "Built 60+ variations and tested 3 prototypes.",
      },
      {
        title: "Iteration",
        desc: "Refined across multiple usability cycles.",
      },
    ],

    solution:
      "A contextual dashboard that surfaces relevant insights at the right time, with deeper layers on demand.",

    results: [
      { metric: "+40%", label: "Daily Active Users" },
      { metric: "3s", label: "Time to First Action" },
      { metric: "4.6★", label: "App Store Rating" },
      { metric: "-25%", label: "Dev Time Reduction" },
    ],
  },

  {
    id: "mediconnect",
    title: "MediConnect — Healthcare Made Accessible",
    summary:
      "Redesigned a patient portal to reduce booking time by 60% and improve accessibility.",
    tags: ["UX Design", "Accessibility", "User Research"],
    year: "2023",
    client: "MediConnect Health",
    role: "Senior UX Designer",

    image: mediconnectAfter,
    beforeImage: mediconnectBefore,
    afterImage: mediconnectAfter,

    hero: {
      headline: "Making healthcare navigation feel human again",
      outcome: "60% faster booking with full accessibility compliance",
    },

    problem:
      "Booking required multiple steps and medical jargon. Many users abandoned or called support.",

    approach:
      "Shifted navigation from departments to patient intent — symptoms and urgency.",

    process: [
      {
        title: "Field Research",
        desc: "Observed real patient interactions in clinics.",
      },
      {
        title: "Accessibility Audit",
        desc: "Identified major WCAG failures.",
      },
      {
        title: "Flow Redesign",
        desc: "Reduced booking from 7 steps to 3.",
      },
      {
        title: "Validation",
        desc: "Tested with assistive tech users.",
      },
    ],

    solution:
      "A simplified, intent-driven booking flow with accessibility-first components.",

    results: [
      { metric: "-60%", label: "Booking Time" },
      { metric: "-45%", label: "Support Calls" },
      { metric: "WCAG AA", label: "Compliance" },
      { metric: "+89%", label: "User Satisfaction" },
    ],
  },

  {
    id: "learnpath",
    title: "LearnPath — Adaptive Learning Experience",
    summary:
      "Designed a personalized learning system that increased completion rates from 23% to 67%.",
    tags: ["Product Design", "Interaction Design"],
    year: "2023",
    client: "LearnPath Education",
    role: "UX Designer",

    image: learnpathAfter,
    beforeImage: learnpathBefore,
    afterImage: learnpathAfter,

    hero: {
      headline: "Learning that adapts to you",
      outcome: "Completion rates increased from 23% to 67%",
    },

    problem:
      "Low completion rates due to rigid, one-size learning experience.",

    approach:
      "Identified different learner behaviors and built adaptive paths.",

    process: [
      {
        title: "Segmentation",
        desc: "Defined learner types.",
      },
      {
        title: "Journey Mapping",
        desc: "Identified drop-off points.",
      },
      {
        title: "System Design",
        desc: "Built adaptive learning logic.",
      },
      {
        title: "Testing",
        desc: "Validated with real learners.",
      },
    ],

    solution:
      "An adaptive system that adjusts content and pacing based on behavior.",

    results: [
      { metric: "+67%", label: "Completion Rate" },
      { metric: "+35%", label: "Session Duration" },
      { metric: "72", label: "NPS Score" },
    ],
  },
];

/* =========================
   HELPERS (STRICT SAFE)
========================= */

// safer lookup map (avoids repeated .find calls later if scaled)
const projectMap: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.id, p])
) as Record<string, Project>;

export async function getProjectById(
  id: string
): Promise<Project | null> {
  return projectMap[id] ?? null;
}

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}