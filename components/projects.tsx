"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "./animated-card";
import { SkillLogo } from "./skill-logo";

const projects = [
  {
    id: 1,
    name: "TechEz",
    description:
      "A real-time platform connecting technicians and consumers with live matching, queue management, and backend optimizations using Redis caching and BullMQ.",
    tags: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Docker",
    ],
    highlights: [
      "Real-time technician-consumer matching",
      "Advanced queue management with BullMQ",
      "Redis caching for faster data access",
      "Reliable WebSocket communication",
    ],
    link: "#",
    github: "https://github.com/Sauravpant/TechEz",
    image: "/techez.png",
    mobileStatus: "Planned",
  },
  {
    id: 2,
    name: "Hatbato",
    description:
      "A peer-to-peer marketplace built with TypeScript and React, featuring advanced location-based filtering using PostGIS, secure transactions, and full listing workflows.",
    tags: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Secure transaction handling",
      "Advanced search and location-based filtering",
      "End-to-end listing workflows",
      "Admin dashboard management",
    ],
    link: "https://hatbato.vercel.app",
    github: "https://github.com/Sauravpant/Hatbato",
    image: "/marketplace.png",
    mobileStatus: "Planned",
  },
  {
    id: 3,
    name: "Neotech",
    description:
      "Full-stack e-commerce platform for a tech store with a web app and a React Native mobile app (in development). Features include synchronized carts, responsive product views, and secure Stripe payments.",
    tags: [
      "TypeScript",
      "React.js",
      "React-Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Universal cart sync across web and mobile",
      "Responsive product visualizer",
      "Secure payments with Stripe",
    ],
    link: "https://neotech-six.vercel.app/",
    github: "https://github.com/Sauravpant/Neotech",
    image: "/neotech.png",
    mobileStatus: "In Development",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <AnimatedCard key={project.id} delay={idx * 100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}>
                  <div
                    className={`relative h-60 lg:h-70 overflow-hidden rounded-xl border border-primary/20 group ${
                      idx % 2 === 1 ? "lg:order-2" : ""
                    }`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div
                    className={`flex flex-col gap-6 ${
                      idx % 2 === 1 ? "lg:order-1" : ""
                    }`}>
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className=" text-xs lg:text-sm text-foreground/70  leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-primary/80 font-medium mb-3">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {project.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex flex-col items-center gap-2 group/tech">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-background/40 border border-primary/20 group-hover/tech:border-primary/60 group-hover/tech:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 group-hover/tech:scale-110">
                              <SkillLogo name={tag} size={20} />
                            </div>
                            <span className="text-xs font-medium text-foreground/70 group-hover/tech:text-primary transition-colors text-center">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-primary/80 font-medium mb-3">
                        Key Features:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1.5 rounded-full text-xs bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Link href={project.link} target="_blank">
                        <Button className="bg-primary hover:bg-cyan-400 text-background font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 cursor-pointer">
                          <ExternalLink size={10} className="mr-2" />
                          View Project
                        </Button>
                      </Link>
                      <Link href={project.github} target="_blank">
                        <Button className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 bg-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer">
                          <Github size={10} className="mr-2" />
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
  );
}
