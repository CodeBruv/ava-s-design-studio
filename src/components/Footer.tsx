import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg text-foreground">
          Ava Thompson
        </Link>
        <div className="flex gap-6 font-body text-sm text-muted-foreground">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Dribbble</a>
          <a href="mailto:ava@example.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ava Thompson
        </p>
      </div>
    </footer>
  );
}
