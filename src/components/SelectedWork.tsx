import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface Props {
  projects: Project[];
}

export default function SelectedWork({ projects }: Props) {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
            Case studies
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/work/${project.id}`}
                className="group block py-10 md:py-14"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="font-body text-muted-foreground max-w-xl leading-relaxed mb-4">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-xs tracking-wide uppercase px-3 py-1 bg-muted text-muted-foreground rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-body text-sm text-muted-foreground md:pt-2">
                    {project.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
