"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border border-indigo-100/90 px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg shadow-indigo-950/5"
            : "px-2 py-2 bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-xs">
              <div className="absolute inset-0 bg-indigo-600" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-xs tracking-tight">
                SP
              </div>
            </div>
            <span
              className="font-extrabold text-sm sm:text-base tracking-tight text-zinc-950"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Saurav Pant
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 rounded-xl ${
                    isActive
                      ? "text-indigo-700 bg-indigo-50"
                      : "text-zinc-700 hover:text-indigo-600 hover:bg-indigo-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { href: "https://github.com/Sauravpant", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/sauravpant7", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:sauravpant777@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <Icon size={18} strokeWidth={2.2} />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-800 hover:bg-indigo-50 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 bg-white/98 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-indigo-100 md:hidden z-50"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all text-base font-bold ${
                    activeSection === link.href.replace("#", "")
                      ? "text-indigo-700 bg-indigo-50"
                      : "text-zinc-800 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-center gap-3">
              {[
                { href: "https://github.com/Sauravpant", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sauravpant7", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:sauravpant777@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-slate-100 text-zinc-700 hover:text-indigo-700 hover:bg-indigo-50 transition-all"
                >
                  <Icon size={18} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
