"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [showTags, setShowTags] = useState(false);

  const fullText = "Saurav Pant";
  const tags = [
    "Full-Stack Developer",
    "React Native Developer",
    "An Enthusiast",
  ];

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowTags(true), 300);
      }
    }, 120);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(11, 13, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = `rgba(56, 189, 248, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i < j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(56, 189, 248, ${
                (1 - distance / 150) * 0.2
              })`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(160deg, #0b0d17 0%, #111827 50%, #0f172a 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {displayedText}
          </span>
          <motion.span
            className="text-primary ml-2"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}>
            |
          </motion.span>
        </motion.h1>

        {showTags && (
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}>
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                className="px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 text-cyan-400 font-medium text-sm md:text-lg lg:text-xl cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(14, 165, 233, 0.2)",
                }}>
                {tag}
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.p
          className="text-base md:text-lg xl:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 10 }}
          animate={showTags ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
          Building scalable web and mobile applications with seamless user
          experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={showTags ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
          <Link href="#projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-5 lg:py-6 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] border border-cyan-400/30 rounded-lg">
                View Projects
              </Button>
            </motion.div>
          </Link>
          <Link href="#contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <Button
                variant="outline"
                className="border-cyan-400/80 hover:border-cyan-400 text-foreground px-8 py-5 lg:py-6 text-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:bg-cyan-500/20 transition-all duration-300 backdrop-blur-sm font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Get in Touch
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 15 }}
          animate={showTags ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
          {[
            {
              icon: Github,
              href: "https://github.com/Sauravpant",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/sauravpant7",
              label: "LinkedIn",
            },
            {
              icon: Code2,
              href: "https://leetcode.com/u/saurav_7",
              label: "LeetCode",
            },
            {
              icon: Mail,
              href: "mailto:sauravpant777@gmail.com",
              label: "Email",
            },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-125 p-3 rounded-lg hover:bg-primary/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              aria-label={social.label}
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={
                showTags
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 15, scale: 0.8 }
              }
              transition={{
                delay: 1.15 + i * 0.12,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ y: -3 }}>
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={showTags ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}>
            <ChevronDown className="text-primary/60 drop-shadow-lg" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
