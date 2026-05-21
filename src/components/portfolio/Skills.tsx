import { Reveal } from "./Reveal";
import { Code, FileCode2, Braces, Sigma, Database, Cpu, GitBranch, Terminal } from "lucide-react";

const skills = [
  { name: "HTML", level: 92, Icon: FileCode2 },
  { name: "CSS", level: 88, Icon: Code },
  { name: "JavaScript", level: 85, Icon: Braces },
  { name: "Python", level: 90, Icon: Sigma },
  { name: "SQL", level: 80, Icon: Database },
];

const stack = [
  { Icon: Cpu, label: "AI / ML" },
  { Icon: Braces, label: "React" },
  { Icon: Sigma, label: "NumPy" },
  { Icon: Database, label: "PostgreSQL" },
  { Icon: GitBranch, label: "Git" },
  { Icon: Terminal, label: "Linux" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 -z-10 opacity-30 grid-bg" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-tech text-sm text-primary">// skills</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My <span className="text-gradient">tech stack</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The tools and languages I use to design, build, and ship intelligent products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 transition-smooth hover:shadow-glow">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <s.Icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{s.name}</span>
                    </div>
                    <span className="font-mono-tech text-sm text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-primary shadow-glow transition-all duration-1000 ease-out"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="glass relative h-full overflow-hidden rounded-2xl p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
              <h3 className="text-xl font-semibold">Also exploring</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tools and concepts I'm actively learning to push my AI/ML skill set.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stack.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="group glass flex flex-col items-center gap-2 rounded-xl p-4 transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                  >
                    <Icon className="h-6 w-6 text-primary transition-smooth group-hover:scale-110" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}