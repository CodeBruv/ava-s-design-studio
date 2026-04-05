import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

export default function SelectedWork({ projects }: Props) {
  if (!projects.length) {
    return (
      <section className="py-24 text-center text-muted-foreground">
        No projects yet.
      </section>
    );
  }

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/work/${project.id}`}>

                <div className="rounded-2xl overflow-hidden border border-border bg-muted mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[260px] object-cover hover:scale-[1.02] transition"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.summary}
                </p>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}