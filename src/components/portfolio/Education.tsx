import { Reveal } from "./Reveal";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const timeline = [
  {
    Icon: GraduationCap,
    title: "B.Tech — Artificial Intelligence & Machine Learning",
    org: "St. Xavier's College",
    when: "2024 — 2028 · Currently 2nd Year",
    desc: "Specializing in AI/ML, data structures, full-stack web development, and intelligent systems.",
  },
  {
    Icon: BookOpen,
    title: "Higher Secondary (Science)",
    org: "Science Stream — PCM + CS",
    when: "2022 — 2024",
    desc: "Built strong foundations in math, physics and computer science — the launchpad for engineering.",
  },
  {
    Icon: Award,
    title: "Self-taught Developer",
    org: "Online courses · Open source · Projects",
    when: "Ongoing",
    desc: "Constantly upskilling through hands-on projects, hackathons and developer communities.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-tech text-sm text-primary">// education</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My <span className="text-gradient">journey</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className="glass rounded-2xl p-6 transition-smooth hover:shadow-glow">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                          <t.Icon className="h-5 w-5 text-primary-foreground" />
                        </span>
                        <p className="font-mono-tech text-xs text-primary">{t.when}</p>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
                      <p className="mt-1 text-sm text-primary/80">{t.org}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <span className="absolute left-5 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow md:left-1/2" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}