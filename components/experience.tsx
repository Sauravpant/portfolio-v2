"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { SkillLogo } from "./skill-logo";

interface ExperienceItem {
  title: string;
  company?: string;
  type: string;
  period: string;
  summary: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  // ── Add future entries above this one ──────────────────────────────
  // {
  //   title: "Software Engineer I",
  //   company: "Company Name",
  //   type: "Full-Time",
  //   period: "2026 — Present",
  //   summary: "...",
  //   bullets: [...],
  //   metrics: [...],
  //   tags: [...],
  //   stack: [...],
  // },
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Freelance Software Developer",
    company: undefined,
    type: "Contract · Remote",
    period: "2024 — Present",
    summary:
      "Building and delivering production-ready web applications for clients — across frontend, backend, databases, APIs, and deployment.",
    bullets: [
      "Developed and shipped full-stack applications across the entire stack: frontend, backend, databases, REST APIs, and cloud deployment.",
      "Translated client requirements into production-ready features with responsive UIs and robust backend solutions.",
      "Owned architecture, implementation, debugging, deployment, and ongoing improvements end-to-end.",
      "Collaborated directly with clients to iterate on features and deliver within project constraints.",
    ],
    metrics: [
      { value: "4+", label: "Projects Delivered" },
      { value: "2+", label: "Years Active" },
      { value: "100%", label: "Client-Facing" },
    ],
    tags: ["Full-Stack Development", "REST APIs", "Client Work", "End-to-End Delivery"],
    stack: ["React.js", "Node.js", "PostgreSQL", "MongoDB", "Express.js", "Spring Boot", "Docker"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fafaf8 0%, #f4f3ff 60%, #fafaf8 100%)" }}
    >
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(79,70,229,0.2), transparent)" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14 text-center md:text-left"
        >
          <span className="section-label">Work History</span>
          <h2 className="heading-section" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", marginTop: 8 }}>
            Experience
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
            >
              <div className="card p-0 overflow-hidden" style={{ borderColor: "rgba(79,70,229,0.14)" }}>

                {/* ── Top bar ── */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 px-6 sm:px-8 py-5 border-b"
                  style={{ borderColor: "rgba(79,70,229,0.1)", background: "rgba(79,70,229,0.03)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(79,70,229,0.1)", border: "1.5px solid rgba(79,70,229,0.2)", color: "#4f46e5" }}
                  >
                    <Briefcase size={18} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5">{exp.type}</p>
                  </div>
                  <span className="shrink-0 text-xs font-bold tracking-wide text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-3 py-1.5 rounded-full self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* ── Body ── */}
                <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-6">

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {exp.metrics.map(({ value, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center text-center py-4 px-2 rounded-xl border"
                        style={{ background: "rgba(79,70,229,0.04)", borderColor: "rgba(79,70,229,0.14)" }}
                      >
                        <span
                          className="text-xl sm:text-2xl font-extrabold tracking-tight text-indigo-700"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {value}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 mt-1 leading-tight">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ArrowRight size={13} strokeWidth={2.5} className="mt-[5px] shrink-0" style={{ color: "#4f46e5" }} />
                        <span className="text-sm sm:text-[15px] text-zinc-700 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.stack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white shadow-xs"
                          style={{ borderColor: "rgba(79,70,229,0.14)" }}
                        >
                          <span className="w-5 h-5 flex items-center justify-center shrink-0">
                            <SkillLogo name={tech} size={18} />
                          </span>
                          <span className="text-xs font-semibold text-zinc-800">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: "rgba(79,70,229,0.1)" }}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(79,70,229,0.07)",
                          color: "#4338ca",
                          border: "1.5px solid rgba(79,70,229,0.16)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
