import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem space through research, stakeholder interviews, and data analysis. No assumptions, just clarity.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Synthesize findings into actionable insights. Map user journeys, identify pain points, and frame the real problem to solve.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Explore solutions through wireframes, prototypes, and iteration. Test ideas early and often to validate direction.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Usability testing, stakeholder review, and refinement. Measure impact against the goals we set at the start.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            How I work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background p-8"
            >
              <span className="font-body text-xs text-primary tracking-widest mb-4 block">
                {step.number}
              </span>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
