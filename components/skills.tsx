"use client";

import { motion } from "framer-motion";
import { SkillLogo } from "./skill-logo";
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  BrainCircuit, 
  Cloud,
  Network
} from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code,
    accent: "#4f46e5",
    accentLight: "#eef2ff",
    accentBorder: "rgba(79, 70, 229, 0.25)",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "C"],
  },
  {
    category: "Frontend Development",
    icon: Layout,
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    accentBorder: "rgba(124, 58, 237, 0.25)",
    items: ["React.js", "Next.js", "TailwindCSS", "HTML5", "CSS3", "Sass", "Bootstrap"],
  },
  {
    category: "Backend Development",
    icon: Server,
    accent: "#059669",
    accentLight: "#ecfdf5",
    accentBorder: "rgba(5, 150, 105, 0.25)",
    items: ["Node.js", "Express.js", "Spring Boot", "FastAPI"],
  },
  {
    category: "Architecture & Engineering",
    icon: Network,
    accent: "#6366f1",
    accentLight: "#eef2ff",
    accentBorder: "rgba(99, 102, 241, 0.25)",
    items: [
      "System Design",
      "Microservices",
      "REST APIs",
      "Caching",
      "Asynchronous Processing",
      "Observability",
      "Distributed Systems",
    ],
  },
  {
    category: "Databases & Caching",
    icon: Database,
    accent: "#d97706",
    accentLight: "#fffbeb",
    accentBorder: "rgba(217, 119, 6, 0.25)",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
  },
  {
    category: "Mobile App Development",
    icon: Smartphone,
    accent: "#2563eb",
    accentLight: "#eff6ff",
    accentBorder: "rgba(37, 99, 235, 0.25)",
    items: ["React Native", "Expo"],
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    accent: "#e11d48",
    accentLight: "#fff1f2",
    accentBorder: "rgba(225, 29, 72, 0.25)",
    items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "MLflow", "Python"],
  },
  {
    category: "DevOps & Infrastructure",
    icon: Cloud,
    accent: "#0891b2",
    accentLight: "#ecfeff",
    accentBorder: "rgba(8, 145, 178, 0.25)",
    items: ["Git", "GitHub", "Bitbucket", "Docker", "Kubernetes", "Prometheus", "Grafana"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fafaf8 0%, #f4f3ff 50%, #fafaf8 100%)" }}
    >
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14 text-center md:text-left"
        >
          <span className="section-label">Technical Expertise</span>
          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", marginTop: 8 }}
          >
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg font-normal text-zinc-600 max-w-xl">
            A comprehensive breakdown of tools, frameworks, architectures, and technologies I work with.
          </p>
        </motion.div>

        {/* Containers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {skillCategories.map((group) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="card p-4 sm:p-6 md:p-7 flex flex-col justify-between"
                style={{
                  borderColor: "rgba(79, 70, 229, 0.14)",
                  background: "#ffffff",
                }}
              >
                <div>
                  {/* Container Header */}
                  <div className="flex items-center gap-3 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-zinc-100">
                    <div
                      className="p-2.5 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: group.accentLight,
                        color: group.accent,
                        border: `1.5px solid ${group.accentBorder}`,
                      }}
                    >
                      <GroupIcon size={18} strokeWidth={2.5} />
                    </div>
                    <h3
                      className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Grid Inside Container */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    {group.items.map((skill) => (
                      <div
                        key={skill}
                        className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl border transition-all duration-200 gap-2 sm:gap-2.5 cursor-default bg-slate-50/70 hover:bg-white hover:shadow-md group/skill"
                        style={{
                          borderColor: "rgba(226, 232, 240, 0.9)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = group.accent;
                          el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(226, 232, 240, 0.9)";
                          el.style.transform = "translateY(0)";
                        }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-200 group-hover/skill:scale-110">
                          <SkillLogo name={skill} size={24} />
                        </div>
                        <span className="text-xs sm:text-[13px] font-bold text-zinc-900 text-center leading-tight">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
