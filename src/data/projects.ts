export interface CaseStudySection {
  heading: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  hero: {
    headline: string;
    outcome: string;
  };
  sections: {
    problem: string;
    approach: string;
    process: string;
    solution: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: "finflow",
    title: "FinFlow — Rethinking Personal Finance",
    summary: "Simplified a cluttered financial dashboard into a focused experience that increased user engagement by 40%.",
    tags: ["Product Design", "UX Research", "Design System"],
    year: "2024",
    client: "FinFlow Inc.",
    role: "Lead UX Designer",
    hero: {
      headline: "Turning financial overwhelm into confident decisions",
      outcome: "40% increase in daily active users within 3 months of launch",
    },
    sections: {
      problem: "FinFlow's existing dashboard tried to show everything at once — account balances, spending trends, investment performance, and alerts — all competing for attention. Users reported feeling overwhelmed and many abandoned the app within the first week. The core issue wasn't missing features; it was a lack of hierarchy and focus.",
      approach: "I started by interviewing 24 users across different financial literacy levels. The insight was clear: people didn't want more data — they wanted answers. What should I pay attention to today? Am I on track this month? I mapped these mental models into a progressive disclosure framework.",
      process: "After synthesizing research into four key user archetypes, I ran a card-sorting exercise to establish information priority. This led to a modular dashboard concept where the most relevant card surfaces first based on context. I produced over 60 wireframe variations, tested 3 prototypes with real users, and iterated across 4 design sprints.",
      solution: "The final design replaced the monolithic dashboard with a contextual home screen. Morning views emphasize daily spending. End-of-month views highlight budget tracking. Each module can be expanded for detail. The design system I created ensured consistency across 30+ screens and was adopted by two other product teams.",
      results: "Daily active users increased by 40%. Time-to-first-action dropped from 12 seconds to 3 seconds. App store ratings improved from 3.2 to 4.6 stars. The design system reduced new feature development time by 25%.",
    },
  },
  {
    id: "mediconnect",
    title: "MediConnect — Healthcare Made Accessible",
    summary: "Redesigned a patient portal to reduce appointment booking time by 60% and improve accessibility compliance.",
    tags: ["UX Design", "Accessibility", "User Research"],
    year: "2023",
    client: "MediConnect Health",
    role: "Senior UX Designer",
    hero: {
      headline: "Making healthcare navigation feel human again",
      outcome: "60% reduction in appointment booking time and WCAG 2.1 AA compliance",
    },
    sections: {
      problem: "MediConnect's patient portal was built by engineers for engineers. Booking an appointment required navigating through 7 screens and understanding medical terminology most patients didn't know. Accessibility was an afterthought — the portal failed 14 of 25 WCAG criteria. Patients over 60 frequently called support instead of using the portal.",
      approach: "I partnered with the clinical team and patient advocates to understand the real booking journey. The key insight: patients think in terms of symptoms and urgency, not departments and specializations. I proposed restructuring the entire flow around patient intent rather than hospital organization.",
      process: "I conducted contextual inquiries in three clinic waiting rooms, observing how patients of different ages and tech comfort levels attempted to use the portal. I created an accessibility audit framework, then designed the new flow using a symptom-first navigation model. Usability testing included participants using screen readers and voice navigation.",
      solution: "The redesigned portal starts with a simple question: \"What do you need help with?\" Smart routing matches symptoms to the right department. The booking flow was reduced from 7 screens to 3. Every component was built with accessibility-first principles — proper contrast, keyboard navigation, screen reader support, and plain language.",
      results: "Booking time dropped from 8 minutes to under 3 minutes. Support calls decreased by 45%. The portal achieved full WCAG 2.1 AA compliance. Patient satisfaction scores for digital experience rose from 52% to 89%.",
    },
  },
  {
    id: "learnpath",
    title: "LearnPath — Personalized Education Platform",
    summary: "Designed an adaptive learning experience that increased course completion rates from 23% to 67%.",
    tags: ["Product Design", "Interaction Design", "Prototyping"],
    year: "2023",
    client: "LearnPath Education",
    role: "UX Designer",
    hero: {
      headline: "Learning that adapts to you, not the other way around",
      outcome: "Course completion rates nearly tripled, from 23% to 67%",
    },
    sections: {
      problem: "LearnPath offered excellent course content, but only 23% of enrolled students completed their courses. The platform treated every learner the same — identical pace, identical content order, identical assessments. Drop-off analysis showed that most users left during the first third of courses, suggesting an engagement problem, not a content quality problem.",
      approach: "I hypothesized that the issue was motivation architecture, not content. Through surveys and 18 user interviews, I identified three distinct learner types: sprinters (want speed), explorers (want depth), and validators (want confirmation). Each type needed a different experience structure to stay engaged.",
      process: "I mapped the emotional journey of each learner type, identifying where frustration and disengagement peaked. I designed an adaptive system that adjusts content density, assessment frequency, and milestone celebrations based on learner behavior patterns. Rapid prototyping with Figma and tested with 30 learners across all three types.",
      solution: "The platform now detects learning patterns within the first two modules and adjusts accordingly. Sprinters get streamlined paths with skip options. Explorers get branching content and deep-dives. Validators get more frequent checkpoints and peer comparisons. All three types share the same core curriculum — only the experience layer adapts.",
      results: "Course completion rates rose from 23% to 67%. Average session duration increased by 35%. Student NPS improved from 31 to 72. The adaptive framework was later applied to 4 additional course categories.",
    },
  },
];

// Helper to fetch a project by ID — ready to be replaced with an API call
export async function getProjectById(id: string): Promise<Project | undefined> {
  // Simulates async data fetching
  return projects.find((p) => p.id === id);
}

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}
