"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Brain, Trophy } from "lucide-react";

const highlights = [
  { icon: Code2,  label: "Full-Stack + Backend",  color: "#4338ca", bg: "#eef2ff",  border: "rgba(79,70,229,0.25)"  },
  { icon: Brain,  label: "AI / ML Engineering",   color: "#6d28d9", bg: "#f5f3ff", border: "rgba(124,58,237,0.25)" },
  { icon: Trophy, label: "400+ LeetCode Solved",  color: "#b45309", bg: "#fffbeb",   border: "rgba(217,119,6,0.25)"  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(79,70,229,0.2), transparent)" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14 text-center md:text-left"
        >
          <span className="section-label">Background</span>
          <h2 className="heading-section" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", marginTop: 8 }}>
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-18 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg font-normal text-zinc-700 leading-relaxed">
              <p>
                I&apos;m a Software Developer focused on{" "}
                <strong className="font-bold text-zinc-950">full-stack systems and backend engineering</strong>
                , building scalable, high-performance real-world applications. I work across the MERN and PERN stacks, leveraging React, Next.js and React Native on the frontend, with Node.js, Express.js, PostgreSQL, and MongoDB on the backend alongside Spring Boot and FastAPI.
              </p>
              <p>
                I am particularly interested in{" "}
                <strong className="font-bold text-zinc-950">distributed system design &amp; microservices</strong>
                , studying how high-throughput production systems maintain fault-tolerance, low latency and high reliability under scale.
              </p>
              <p>
                Beyond application development, I actively explore{" "}
                <strong className="font-bold text-zinc-950">AI and machine learning</strong>{" "}
                to build data-driven intelligent systems. I also maintain strong problem-solving fundamentals with{" "}
                <strong className="font-bold text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded-lg border border-indigo-200/60 inline-block">400+ LeetCode problems solved</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
              {highlights.map(({ icon: Icon, label, color, bg, border }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border text-xs sm:text-sm font-bold shadow-xs"
                  style={{ background: bg, borderColor: border, color }}
                >
                  <Icon size={15} strokeWidth={2.5} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square max-w-[280px] sm:max-w-sm mx-auto">
              <div
                className="absolute inset-0 rounded-3xl -translate-x-3 translate-y-3 border-2"
                style={{ borderColor: "rgba(79,70,229,0.22)", background: "rgba(79,70,229,0.04)" }}
              />
              <div
                className="relative h-full rounded-3xl overflow-hidden border-2 shadow-lg"
                style={{ borderColor: "rgba(79,70,229,0.18)", background: "#eef2ff" }}
              >
                <Image
                  src="/profile.png"
                  alt="Saurav Pant"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 280px, 380px"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
