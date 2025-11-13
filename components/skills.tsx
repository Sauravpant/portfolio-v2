"use client"

import { useEffect, useRef } from "react"
import { AnimatedCard } from "./animated-card"
import { SkillLogo } from "./skill-logo"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend & API",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Databases and Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    name: "Mappers",
    skills: ["Prisma", "Drizzle", "Mongoose"],
  },
  {
    name: "Mobile Development",
    skills: ["React Native", "Expo"],
  },
  {
    name: "Tools",
    skills: ["Docker", "Git", "GitHub", "VSCode"],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-balance text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <AnimatedCard key={category.name} delay={idx * 80}>
                <div className="p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background/80 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{category.name}</h3>
                  <div className="w-12 h-1 bg-primary rounded-full mb-6" />
                  <div className="grid grid-cols-4 gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-primary/15 transition-all duration-300 group cursor-pointer hover:scale-110"
                      >
                        <SkillLogo name={skill} size={50} />
                        <span className="text-xs font-medium text-foreground/70 group-hover:text-primary transition-colors text-center line-clamp-2">
                          {skill}
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
  )
}
