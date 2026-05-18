"use client";

import { useEffect, useRef } from "react";
import { AnimatedCard } from "./animated-card";
import { SkillLogo } from "./skill-logo";

const skillCategories = [
  {
    name: "Programming & Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C#" },
      { name: "Python" },
      { name: "C++" },
      { name: "C" },
      { name: "Java" },
    ],
  },
  {
    name: "Backend Systems & APIs",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "ASP.NET Core" },
      { name: "FastAPI" },
    ],
  },
  {
    name: "Databases & Caching",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "SQLite" },
    ],
  },
  {
    name: "Frontend Engineering",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Sass" },
      { name: "Bootstrap" },
    ],
  },
  {
    name: "Mobile Development",
    skills: [{ name: "React-Native" }, { name: "Expo" }],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Supabase" },
      { name: "VSCode" },
      { name: "VisualStudio" },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-balance text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <AnimatedCard key={category.name} delay={idx * 80}>
                <div className="p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background/80 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {category.name}
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full mb-6" />
                  <div className="grid grid-cols-4 gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 group cursor-pointer hover:scale-110 ${
                          skill.primary ?
                            "bg-cyan-500/10 border-2 border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                          : "hover:bg-primary/15 border-2 border-transparent hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                        }`}>
                        {skill.primary && (
                          <div className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,1)]"></span>
                          </div>
                        )}
                        <SkillLogo name={skill.name} size={42} />
                        <span
                          className={`text-[10px] lg:text-xs font-bold transition-colors text-center line-clamp-1 ${
                            skill.primary ? "text-cyan-300" : (
                              "text-foreground/70 group-hover:text-primary"
                            )
                          }`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
