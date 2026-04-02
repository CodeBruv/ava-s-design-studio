import { useEffect, useState } from "react";
import { getAllProjects, type Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getAllProjects().then(setProjects);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <SelectedWork projects={projects} />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
