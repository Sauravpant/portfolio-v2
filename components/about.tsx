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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-1000">

          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />

                {/* Profile Image Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 shadow-2xl backdrop-blur-sm bg-white/5">
                  <Image
                    src="/profile.png"
                    alt="Profile Picture"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed text-left">

                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-cyan-400 first-letter:mr-1">
                  I’m a{" "}
                  <span className="text-cyan-400 font-semibold border-b border-cyan-400/20">
                    Software Developer focused on Full-Stack Systems & Backend Engineering
                  </span>{" "}
                  building scalable and real-world applications. I work with the{" "}
                  <span className="text-cyan-400 font-semibold">MERN</span> and{" "}
                  <span className="text-cyan-400 font-semibold">PERN stacks</span>, developing modern interfaces using{" "}
                  <span className="text-cyan-400 font-semibold">React</span>,{" "}
                  <span className="text-cyan-400 font-semibold">Next.js</span>, and{" "}
                  <span className="text-cyan-400 font-semibold">React Native</span>.
                </p>

                <p>
                  On the backend, I design and build scalable systems using{" "}
                  <span className="text-cyan-400  font-medium">Node.js, Express.js, ASP.NET Core, PostgreSQL, and MongoDB</span>. I’m particularly interested in{" "}
                  <span className="text-cyan-400 font-medium">System Design</span> and{" "}
                  <span className="text-cyan-400 font-medium">Microservices Architecture</span>, focusing on how production-grade systems are structured and optimized for scale.
                </p>

                <p>
                  Beyond application development, I’m actively exploring{" "}
                  <span className="text-cyan-400 font-semibold">Artificial Intelligence and Machine Learning</span>{" "}
                  to expand into intelligent and data-driven systems. I also maintain a strong foundation in{" "}
                  <span className="text-cyan-400 font-medium">Data Structures and Algorithms</span>, having solved{" "}
                  <span className="text-cyan-400 font-bold whitespace-nowrap">400+ LeetCode problems</span>, which strengthens my problem-solving and analytical thinking.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

