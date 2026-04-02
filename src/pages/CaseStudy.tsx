import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProjectById, type Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionMeta: { key: keyof Project["sections"]; label: string }[] = [
  { key: "problem", label: "The Problem" },
  { key: "approach", label: "The Approach" },
  { key: "process", label: "The Process" },
  { key: "solution", label: "The Solution" },
  { key: "results", label: "The Results" },
];

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      getProjectById(id).then((p) => {
        setProject(p ?? null);
        setLoading(false);
      });
    }
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
        <Link to="/" className="font-body text-sm text-primary hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs tracking-wide uppercase px-3 py-1 bg-muted text-muted-foreground rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[1.1] mb-6">
              {project.hero.headline}
            </h1>

            <p className="font-body text-lg text-primary mb-10">
              {project.hero.outcome}
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border font-body text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Client</p>
                <p className="text-foreground">{project.client}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Role</p>
                <p className="text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p className="text-foreground">{project.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-32">
        <div className="container mx-auto max-w-3xl space-y-20">
          {sectionMeta.map(({ key, label }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <p className="font-body text-xs tracking-widest uppercase text-primary mb-3">
                {label}
              </p>
              <p className="font-body text-foreground leading-relaxed text-lg">
                {project.sections[key]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
