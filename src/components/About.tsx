import { motion } from "framer-motion";

const tools = ["Figma", "Framer", "Miro", "Notion", "Maze", "Hotjar"];

export default function About() {
  return (
    <section id="about" className="py-32 bg-muted/40">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              A bit about me
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm Ava, a UX designer who believes the best products feel obvious
                in hindsight. I spend most of my time in the space between user needs
                and business goals, finding solutions that serve both.
              </p>
              <p>
                My process is rooted in listening first, then structuring what I hear
                into clear, testable ideas. I've worked with startups finding their
                footing and established companies rethinking how they serve their users.
              </p>
              <p>
                When I'm not designing, I'm usually sketching, reading about cognitive
                psychology, or trying to make the perfect sourdough.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-4">
              Tools I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-body text-sm px-4 py-2 border border-border rounded-sm text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
