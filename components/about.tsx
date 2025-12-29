"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="flex flex-col items-center gap-12">
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 w-56 h-56" />
              <div className="relative rounded-full overflow-hidden border-4 border-primary/80 group-hover:border-primary transition-all duration-500 w-56 h-56 shadow-2xl bg-linear-to-br from-background to-background/50 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <Image
                  src="/profile.png"
                  alt="Profile Picture"
                  width={224}
                  height={224}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-xl space-y-6 mx-auto">
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-center px-4 sm:px-6">
                <p>
                  I’m a{" "}
                  <span className="text-cyan-400 font-semibold">
                    Full-Stack Web and Mobile Developer
                  </span>{" "}
                  passionate about building scalable, high-performance
                  applications. With expertise across the{" "}
                  <span className="text-cyan-400 font-semibold">MERN</span> and{" "}
                  <span className="text-cyan-400 font-semibold">
                    PERN stacks
                  </span>
                  , I craft seamless user experiences with{" "}
                  <span className="text-cyan-400 font-semibold">React</span>,{" "}
                  <span className="text-cyan-400 font-semibold">Next.js</span>,
                  and{" "}
                  <span className="text-cyan-400 font-semibold">
                    React Native
                  </span>
                  , while building robust backends with{" "}
                  <span className="text-cyan-400 font-semibold">Node.js</span>,{" "}
                  <span className="text-cyan-400 font-semibold">Express</span>,{" "}
                  <span className="text-cyan-400 font-semibold">
                    PostgreSQL
                  </span>
                  , and{" "}
                  <span className="text-cyan-400 font-semibold">MongoDB</span>.
                  Currently, I’m diving deep into{" "}
                  <span className="text-cyan-400 font-semibold">
                    System Design
                  </span>{" "}
                  and{" "}
                  <span className="text-cyan-400 font-semibold">
                    Cloud Infrastructure{" "}
                  </span>
                  while sharpening my mobile development expertise with a focus
                  on performance, clean architecture, and real-world usability.
                  Beyond development, I’m deeply passionate about{" "}
                  <span className="text-cyan-400 font-semibold">
                    Data Structures and Algorithms (DSA)
                  </span>
                  , having solved{" "}
                  <span className="text-cyan-400 font-semibold">
                    400+ LeetCode problems
                  </span>{" "}
                  to continuously challenge and refine my problem-solving
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
