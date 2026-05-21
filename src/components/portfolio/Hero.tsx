import { useEffect, useState } from "react";
import { Download, Mail, Sparkles, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ROLES = [
  "AI/ML Engineering Student",
  "Full-Stack Developer",
  "Problem Solver",
  "Builder of Smart Systems",
];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28">
      {/* Background visual */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-10 top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono-tech">AVAILABLE FOR INTERNSHIPS · 2026</span>
        </span>

        <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: "0.1s" }}>
          Hi, I'm <span className="text-gradient">Aarav Sharma</span>
        </h1>

        <div className="mt-6 flex h-10 items-center justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono-tech text-lg text-primary sm:text-2xl">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] bg-primary animate-blink">&nbsp;</span>
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
          A second-year AI &amp; Machine Learning engineering student crafting
          intelligent web experiences, automation tools and smart systems —
          where code meets curiosity.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-105"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-foreground transition-smooth hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-smooth hover:scale-110 hover:text-primary hover:shadow-glow"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="h-10 w-6 rounded-full border border-border p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-primary animate-float-slow" />
        </div>
      </div>
    </section>
  );
}