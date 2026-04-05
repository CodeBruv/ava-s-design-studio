import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  getProjectById,
  type Project,
  type ProcessStep,
  type ResultMetric,
} from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!id) return;

    const loadProject = async () => {
      const data = await getProjectById(id);
      setProject(data);
      setLoading(false);
    };

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="font-body text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
        <p className="font-body text-foreground text-lg">Project not found.</p>
        <Link to="/" className="text-primary text-sm hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase px-3 py-1 bg-muted text-muted-foreground rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl leading-[1.1] mb-6">
              {project.hero.headline}
            </h1>

            <p className="text-lg text-primary mb-10">
              {project.hero.outcome}
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Client</p>
                <p>{project.client}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Role</p>
                <p>{project.role}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p>{project.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-32">
        <div className="container mx-auto max-w-3xl space-y-20">

          {/* PROBLEM */}
          <div>
            <p className="text-xs uppercase text-primary mb-3">The Problem</p>
            <p className="text-lg text-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* APPROACH */}
          <div>
            <p className="text-xs uppercase text-primary mb-3">The Approach</p>
            <p className="text-lg text-foreground leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* PROCESS */}
          <div>
            <p className="text-xs uppercase text-primary mb-6">The Process</p>
            <div className="space-y-5">
              {project.process.map((step: ProcessStep, i) => (
                <div key={i} className="border-l border-border pl-4">
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SOLUTION */}
          <div>
            <p className="text-xs uppercase text-primary mb-3">The Solution</p>
            <p className="text-lg text-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* RESULTS */}
          <div>
            <p className="text-xs uppercase text-primary mb-6">The Results</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.results.map((r: ResultMetric, i) => (
                <div key={i} className="border border-border rounded-xl p-4">
                  <p className="text-xl font-bold">{r.metric}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}