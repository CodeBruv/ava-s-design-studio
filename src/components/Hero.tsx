import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-6"
          >
            UX Designer — Based in San Francisco
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl leading-[1.1] tracking-tight text-foreground mb-8"
          >
            Designing clarity
            <br />
            out of complexity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="font-body text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            I help product teams turn ambiguous problems into focused, human-centered
            experiences that people actually want to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <button
              onClick={() => scrollTo("work")}
              className="font-body text-sm px-6 py-3 bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-body text-sm px-6 py-3 border border-border text-foreground rounded-sm hover:bg-muted transition-colors"
            >
              Start a Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
