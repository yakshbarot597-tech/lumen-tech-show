import { Brain, Rocket, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Hours Coding", value: 1200, suffix: "+" },
  { label: "Cups of Coffee", value: 999, suffix: "+" },
];

const cards = [
  {
    Icon: Brain,
    title: "AI/ML Foundations",
    desc: "Building intuition with Python, data, and modern ML frameworks while exploring deep learning.",
  },
  {
    Icon: Rocket,
    title: "Full-Stack Mindset",
    desc: "From clean UIs to robust backends — I love shipping end-to-end products that solve real problems.",
  },
  {
    Icon: Target,
    title: "Goal-Driven",
    desc: "Aiming for impactful AI/ML internships and contributing to open-source intelligent systems.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-tech text-sm text-primary">// about me</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Engineering the <span className="text-gradient">future</span>, one commit at a time.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="space-y-5 text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-medium">2nd-year AI &amp; ML engineering student</span> with
                a deep curiosity for how machines learn, decide and adapt.
                My journey began with HTML &amp; CSS — and quickly evolved into
                Python, data, and full-stack systems.
              </p>
              <p>
                I love taking ideas from sketch to deployment: designing
                clean interfaces, wiring smart automation, and exploring
                AI-powered tools that genuinely make life better.
              </p>
              <p>
                When I'm not coding, I'm reading research papers, breaking
                things on purpose, or building side projects that push my
                limits — because the best way to learn AI is to build with it.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {cards.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="glass group rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="glass mt-16 grid grid-cols-2 gap-6 rounded-2xl p-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-gradient sm:text-4xl">
                  <Counter to={s.value} />{s.suffix}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}