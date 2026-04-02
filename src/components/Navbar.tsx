import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("/#", "");
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          Ava Thompson
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/#contact")}
            className="font-body text-sm px-5 py-2.5 bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity"
          >
            Start a Project
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
