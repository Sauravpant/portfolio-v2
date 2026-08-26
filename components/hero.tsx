"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  ChevronDown 
} from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const TYPING_PHRASES = [
  "Full-Stack Products",
  "Backend Systems",
  "Distributed Architectures",
  "AI-Powered Applications",
];

const socialLinks = [
  { href: "https://github.com/Sauravpant", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sauravpant7", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:sauravpant777@gmail.com", icon: Mail, label: "Email" },
];

/** Smooth, human-cadence looping typewriter */
function useLoopingTypewriter(
  phrases: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    if (!isDeleting && subIndex === phrases[index].length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return phrases[index].substring(0, subIndex);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const currentTypedText = useLoopingTypewriter(TYPING_PHRASES, 80, 40, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #fafaf8 0%, #f0eeff 55%, #fafaf8 100%)" }}
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-45 pointer-events-none" />

      {/* Ambient glowing orbs */}
      <div
        className="absolute -top-40 -right-40 w-[750px] h-[750px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col items-center text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-5 sm:gap-7 w-full"
        >

          {/* ── Main Name ── */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1
              className="heading-display text-zinc-950 font-extrabold"
              style={{
                fontSize: "clamp(2.5rem, 11vw, 6.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.98,
              }}
            >
              Saurav Pant
            </h1>
          </motion.div>

          {/* ── Dynamic Typewriter Subheading (Building + dynamic phrases) ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center flex-wrap gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-zinc-900 min-h-[44px] sm:min-h-[48px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>Building</span>
            <span className="text-indigo-600 bg-indigo-50/90 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-2xl border border-indigo-200/80 inline-flex items-center shadow-xs">
              {currentTypedText}
              <span className="inline-block w-[3px] sm:w-[3.5px] h-[0.85em] bg-indigo-600 ml-1 sm:ml-1.5 animate-blink align-baseline rounded-full" />
            </span>
          </motion.div>

          {/* ── Single-line Bio / Value Proposition ── */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-medium text-zinc-600 leading-relaxed max-w-2xl px-2"
          >
            Building scalable software systems at the intersection of backend engineering, distributed systems, and AI.
          </motion.p>

          {/* ── Call To Action Buttons ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5 pt-2 w-full max-w-xs sm:max-w-none"
          >
            <Link href="#projects" className="btn-primary group shadow-md hover:shadow-xl justify-center w-full sm:w-auto">
              <span>View Projects</span>
              <ArrowRight size={17} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link href="#contact" className="btn-secondary justify-center w-full sm:w-auto">
              <Mail size={16} strokeWidth={2.2} className="text-indigo-600" />
              <span>Get in Touch</span>
            </Link>
          </motion.div>

          {/* ── Social Icon Strip ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2.5 sm:gap-3 pt-2"
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 sm:p-3 rounded-2xl border border-slate-200 bg-white text-zinc-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/70 transition-all shadow-xs hover:-translate-y-0.5"
              >
                <Icon size={18} strokeWidth={2.2} />
              </a>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="label-caps font-bold text-zinc-400">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
