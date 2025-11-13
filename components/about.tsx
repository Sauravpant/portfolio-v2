"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="flex flex-col items-center gap-12">
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 w-56 h-56" />
              <div className="relative rounded-full overflow-hidden border-4 border-primary/80 group-hover:border-primary transition-all duration-500 w-56 h-56 shadow-2xl bg-linear-to-br from-background to-background/50 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <span className="text-sm font-semibold text-primary/60">
                  Profile Image
                </span>
              </div>
            </div>
            <div className="w-full max-w-xl space-y-6">
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-center">
                <p>
                  I’m a Full-Stack Web and Mobile Developer building scalable,
                  high-performance applications across the MERN and PERN stacks.
                  I create responsive interfaces with React, Next.js, and React
                  Native, and develop reliable backends with Node.js, Express,
                  PostgreSQL, and MongoDB. With 350+ LeetCode problems solved, I
                  bring strong problem-solving skills to every project. I’m
                  currently deepening my knowledge in System Design, Cloud
                  Infrastructure, and Scalable Architectures, while enhancing
                  mobile development expertise with a focus on performance,
                  clean architecture, and real-world usability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
