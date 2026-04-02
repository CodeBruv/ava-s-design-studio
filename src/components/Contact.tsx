import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  details: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", details: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    // API-ready: replace this with a fetch/POST call
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Message sent! I'll be in touch soon.");
    setForm({ name: "", email: "", details: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-32 bg-muted/40">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Start a project
          </h2>
          <p className="font-body text-muted-foreground mb-12 leading-relaxed">
            Have something in mind? Tell me about your project and I'll get back to
            you within a day.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          <div>
            <label className="font-body text-sm text-foreground block mb-2">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full font-body text-sm bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
              placeholder="Your name"
              maxLength={100}
            />
          </div>
          <div>
            <label className="font-body text-sm text-foreground block mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full font-body text-sm bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
              placeholder="you@company.com"
              maxLength={255}
            />
          </div>
          <div>
            <label className="font-body text-sm text-foreground block mb-2">Project details</label>
            <textarea
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              rows={5}
              className="w-full font-body text-sm bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow resize-none"
              placeholder="Tell me about your project, timeline, and goals..."
              maxLength={2000}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="font-body text-sm px-8 py-3 bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
