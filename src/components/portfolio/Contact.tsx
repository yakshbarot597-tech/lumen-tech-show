import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const channels = [
  { Icon: Mail, label: "Email", value: "aarav@example.com", href: "mailto:aarav@example.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aarav", href: "https://linkedin.com" },
  { Icon: Github, label: "GitHub", value: "github.com/aarav", href: "https://github.com" },
  { Icon: MapPin, label: "Location", value: "India · Open to Remote", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono-tech text-sm text-primary">// contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Have an internship, project, or idea? I'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {channels.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-smooth hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass space-y-4 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="Internship opportunity" />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, idea or opportunity..."
                  className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-glow"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]"
              >
                {sent ? "Message sent ✓" : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                <Phone className="h-3 w-3" /> Usually replies within 24 hours
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="mt-24 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Aarav Sharma — Crafted with curiosity.</p>
          <p className="font-mono-tech text-xs">Built with React + TanStack ⚡</p>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-glow"
      />
    </div>
  );
}