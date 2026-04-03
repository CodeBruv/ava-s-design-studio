import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectById, type ProcessStep, type ResultMetric } from "@/data/projects";
import { useEffect, useState } from "react";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Awaited<ReturnType<typeof getProjectById>>>(null);

  useEffect(() => {
    if (id) {
      getProjectById(id).then(setProject);
    }
  }, [id]);

  if (!project) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Case Study
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            {project.summary}
          </p>

          {/* META */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span><strong>Client:</strong> {project.client}</span>
            <span><strong>Role:</strong> {project.role}</span>
            <span><strong>Year:</strong> {project.year}</span>
          </div>
        </motion.div>

        {/* BEFORE / AFTER (STRONGER VISUAL) */}
        <div className="mb-28">
          <h2 className="text-2xl font-semibold mb-10">
            Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group">
              <p className="text-sm text-muted-foreground mb-3">Before</p>
              <div className="rounded-2xl overflow-hidden border border-border bg-muted">
                <img
                  src={project.beforeImage}
                  alt="Before design"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="group">
              <p className="text-sm text-muted-foreground mb-3">After</p>
              <div className="rounded-2xl overflow-hidden border border-border bg-muted">
                <img
                  src={project.afterImage}
                  alt="After design"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GRID CONTENT (BETTER LAYOUT) */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2 space-y-16">

            {/* PROBLEM */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* APPROACH */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* PROCESS */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Process</h2>

              <div className="space-y-6">
                {project.process.map((step: ProcessStep, i: number) => (
                  <div key={i} className="border-l border-border pl-4">
                    <h3 className="font-medium text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SOLUTION */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR (THIS IS THE UPGRADE) */}
          <div className="space-y-6 md:sticky md:top-24 h-fit">

            <div className="border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Results</h3>

              <div className="space-y-4">
                {project.results.map((r: ResultMetric, i: number) => (
                  <div key={i}>
                    <p className="text-xl font-bold">{r.metric}</p>
                    <p className="text-xs text-muted-foreground">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Want similar results?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let’s map out where your product is losing conversions.
              </p>

              <Link
                to="/#contact"
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
              >
                Start a Project
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}