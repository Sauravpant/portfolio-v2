"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "./animated-card"
import { SkillLogo } from "./skill-logo"

const projects = [
  {
    id: 1,
    name: "Neotech",
    description:
      "Web + React Native e-commerce platform for tech store with universal cart sync and responsive product visualizer.",
    tags: ["React", "React Native", "Node.js", "Express.js", "MongoDB", "Stripe"],
    highlights: ["Universal cart sync", "Responsive product visualizer", "High-load performance"],
    link: "#",
    github: "#",
    image: "/ecommerce-tech-store-interface.jpg",
  },
  {
    id: 2,
    name: "Hatbato",
    description:
      "P2P marketplace built with TypeScript, featuring secure transactions, advanced search, and comprehensive listing workflows.",
    tags: ["TypeScript", "React", "Node.js", "Express.js", "PostgreSQL"],
    highlights: ["Secure transactions", "Advanced search", "Listing workflows"],
    link: "#",
    github: "#",
    image: "/marketplace-platform-interface.jpg",
  },
  {
    id: 3,
    name: "TechEz",
    description:
      "Real-time platform connecting technicians and consumers with real-time matching, queueing, and socket reliability.",
    tags: ["React", "Node.js","Express.js", "Socket.io", "MongoDB"],
    highlights: ["Real-time matching", "Advanced queueing", "Socket reliability"],
    link: "#",
    github: "#",
    image: "/real-time-service-platform.jpg",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <AnimatedCard key={project.id} delay={idx * 100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div
                    className={`relative h-80 sm:h-96 overflow-hidden rounded-xl border border-primary/20 group ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className={`flex flex-col gap-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-foreground/70 text-base leading-relaxed">{project.description}</p>
                    </div>
                    <div>
                      <p className="text-sm text-primary/80 font-medium mb-3">Tech Stack:</p>
                      <div className="flex flex-wrap gap-4">
                        {project.tags.map((tag) => (
                          <div key={tag} className="flex flex-col items-center gap-2 group/tech">
                            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-background/40 border border-primary/20 group-hover/tech:border-primary/60 group-hover/tech:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group-hover/tech:scale-110">
                              <SkillLogo name={tag} size={25} />
                            </div>
                            <span className="text-xs font-medium text-foreground/70 group-hover/tech:text-primary transition-colors text-center">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-primary/80 font-medium mb-3">Key Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1.5 rounded-full text-xs bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Link href={project.link}>
                        <Button className="bg-primary hover:bg-cyan-400 text-background font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 cursor-pointer">
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </Button>
                      </Link>
                      <Link href={project.github}>
                        <Button className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 bg-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer">
                          <Github size={16} className="mr-2" />
                          View Code
                        </Button>
                      </Link>
                    </div>
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
