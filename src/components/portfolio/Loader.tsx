import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        <div className="h-20 w-20 animate-spin-slow rounded-full border-2 border-primary/30 border-t-primary" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-mono-tech text-xs tracking-widest text-primary">AI.INIT</span>
        </div>
      </div>
    </div>
  );
}