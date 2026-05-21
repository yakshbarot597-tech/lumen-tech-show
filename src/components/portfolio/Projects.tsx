import { Reveal } from "./Reveal";
import { Github, ExternalLink } from "lucide-react";
import society from "@/assets/project-society.jpg";
import cricket from "@/assets/project-cricket.jpg";
import ai from "@/assets/project-ai.jpg";
import maintenance from "@/assets/project-maintenance.jpg";

const projects = [
  {
    title: "Society Management System",
    desc: "End-to-end platform for residential society admins to manage residents, maintenance, notices and dues.",
    image: society,
    tech: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Box Cricket Booking Platform",
    desc: "Booking app for box cricket turfs with slot selection, real-time availability and admin dashboard.",
    image: cricket,
    tech: ["JavaScript", "Python", "SQL"],
  },
  {
    title: "AI-based Smart System",
    desc: "An AI-powered smart assistant that learns from user data to automate everyday decision-making.",
    image: ai,
    tech: ["Python", "ML", "JavaScript"],
  },
  {
    title: "Maintenance Management Dashboard",
    desc: "Visual dashboard to track maintenance requests, technicians, and asset health in real time.",
    image: maintenance,
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-tech text-sm text-primary">// projects</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Selected <span className="text-gradient">work</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A glimpse of projects I've built — from full-stack platforms to AI-driven systems.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group glass relative h-full overflow-hidden rounded-2xl transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground transition-smooth group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono-tech text-xs text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:scale-105"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                    <a
                      href="#"
                      className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-smooth hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}