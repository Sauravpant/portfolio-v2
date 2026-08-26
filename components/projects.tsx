"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Check, ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { SkillLogo } from "./skill-logo";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl: string;
  badge?: string;
  freeHostingNote?: boolean;
}

interface ProjectCategory {
  label: string;
  description: string;
  projects: Project[];
}

const categories: ProjectCategory[] = [
  {
    label: "AI Powered Full Stack",
    description: "Production-grade AI applications integrating custom machine learning models and LLM reasoning.",
    projects: [
      {
        title: "VyaparAI",
        subtitle: "Voice-First AI Financial Copilot for Retail",
        badge: "🏆 Hackathon Winner",
        description:
          "AI-powered financial analytics and management platform for retail stores, combining voice Nepali transaction entry, intelligent financial analysis, credit risk scoring, and demand forecasting.",
        tags: ["Python", "FastAPI", "React", "TypeScript", "Docker"],
        highlights: [
          "Nepali voice to structured transaction extraction pipeline",
          "XGBoost credit risk scoring model with SHAP explainability",
          "Gemini-powered contextual transaction analysis & insights",
          "Time-series demand forecasting for inventory planning",
        ],
        githubUrl: "https://github.com/Sauravpant/Spark_DeepStack",
      },
      {
        title: "CareerPath",
        subtitle: "AI Career Recommendation Platform",
        description:
          "Full-stack AI career guidance platform combining a trained ML recommendation engine with Gemini-powered dynamic personalized learning roadmaps based on user academic and skill profiles.",
        tags: ["React", "Node.js", "FastAPI", "Python", "Scikit-learn"],
        highlights: [
          "End-to-end full-stack AI/ML microservice architecture",
          "SVC-based career path recommendation engine",
          "SMOTE balancing + hyperparameter tuning for accuracy",
          "Gemini-powered dynamic personalized career roadmaps",
        ],
        githubUrl: "https://github.com/Sauravpant/Career-Guidance-System",
      },
    ],
  },
  {
    label: "Full Stack Applications",
    description: "Scalable web and mobile applications with real-time features and resilient backend services.",
    projects: [
      {
        title: "TechEz",
        subtitle: "Real-Time Technician Matching Platform",
        description:
          "Real-time service marketplace connecting technicians and consumers with geo-aware matching, asynchronous job processing, Redis caching, and WebSocket tracking.",
        tags: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
        highlights: [
          "Optimized API latency from ~2s down to ~150ms",
          "BullMQ asynchronous background job queue processing",
          "Distributed Redis caching layer for fast read throughput",
          "Real-time WebSocket event dispatching & tracking",
        ],
        githubUrl: "https://github.com/Sauravpant/TechEz",
      },
      {
        title: "Hatbato",
        subtitle: "Location-Aware P2P Marketplace",
        description:
          "Peer-to-peer marketplace featuring location-aware discovery, secure transaction workflows, rating systems, automated notifications, and an admin management portal.",
        tags: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Docker"],
        highlights: [
          "Location-aware discovery with PostGIS spatial queries",
          "Secure multi-step buyer & seller transaction workflows",
          "Automated notification triggers & admin management portal",
          "Containerized multi-service Docker deployment",
        ],
        liveUrl: "https://hatbato.vercel.app",
        githubUrl: "https://github.com/Sauravpant/Hatbato",
        freeHostingNote: true,
      },
      {
        title: "Neotech",
        subtitle: "Modern E-Commerce Platform & Mobile App",
        description:
          "Full-stack e-commerce system with synchronized cart and wishlist flows, order management, Stripe checkout, and a companion React Native mobile application.",
        tags: ["TypeScript", "React", "React Native", "Node.js", "MongoDB", "Docker"],
        highlights: [
          "Synchronized web & mobile shopping cart and wishlist",
          "Stripe payment integration with webhook confirmation",
          "Cross-platform React Native mobile client application",
          "RESTful API with secure JWT authentication",
        ],
        liveUrl: "https://neotech-six.vercel.app/",
        githubUrl: "https://github.com/Sauravpant/Neotech",
        freeHostingNote: true,
      },
      {
        title: "Ecommerce API",
        subtitle: "Clean Architecture RESTful Service",
        description:
          "Java Spring Boot backend service implementing clean layered architecture, robust data validation, security, and containerized deployment.",
        tags: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
        highlights: [
          "Layered domain-driven clean architecture design",
          "RESTful API endpoints with data validation & error handling",
          "Containerized Docker setup for consistent deployment",
        ],
        githubUrl: "https://github.com/Sauravpant/Ecommerce",
      },
    ],
  },
  {
    label: "Systems & Infrastructure",
    description: "Distributed infrastructure, observability stacks, and containerized microservice architectures.",
    projects: [
      {
        title: "Spring Boot Monitoring Stack",
        subtitle: "Full Observability & Metrics Infrastructure",
        description:
          "Dockerized observability stack for monitoring Spring Boot applications using Micrometer, Prometheus, and Grafana to track runtime JVM metrics, HTTP throughput, and request latencies.",
        tags: ["Java", "Spring Boot", "Docker", "Prometheus", "Grafana"],
        highlights: [
          "Micrometer application and JVM metric instrumentation",
          "Prometheus time-series metrics collection & scraping",
          "Custom Grafana dashboards for latency and health tracking",
          "Containerized multi-service Docker Compose deployment",
        ],
        githubUrl: "https://github.com/Sauravpant/Spring-Boot-Prometheus-Grafana-Monitoring",
      },
    ],
  },
  {
    label: "Machine Learning",
    description: "Applied machine learning pipelines, predictive modeling, and exploratory data workflows.",
    projects: [
      {
        title: "Customer Segmentation Engine",
        subtitle: "RFM Analysis + Unsupervised Clustering",
        description:
          "Customer analytics system segmenting consumer behavior using Recency, Frequency, and Monetary value with K-Means clustering to discover distinct purchasing groups.",
        tags: ["Python", "Pandas", "Scikit-learn", "NumPy"],
        highlights: [
          "RFM feature engineering and customer profiling",
          "Optimal K-Means clustering with silhouette validation",
          "Automated cluster interpretation & business segmenting",
        ],
        githubUrl: "https://github.com/Sauravpant/Customer-Segmentation",
      },
      {
        title: "Smart Loan Approval System",
        subtitle: "Supervised Classification for Credit Decisions",
        description:
          "Machine learning system predicting loan approval outcomes from applicant and financial attributes, covering end-to-end data preprocessing, model training, and inference.",
        tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        highlights: [
          "Supervised classification pipeline with data preprocessing",
          "Outlier handling, feature encoding & metric evaluation",
          "Inference pipeline for real-time risk decisioning",
        ],
        githubUrl: "https://github.com/Sauravpant/Smart-Loan-Approval-System",
      },
      {
        title: "ML Experiments Portfolio",
        subtitle: "Applied ML Notebooks & Benchmarks",
        description:
          "Curated collection of machine learning experiments covering data exploratory analysis, model training, evaluation metrics, and applied ML pipelines.",
        tags: ["Python", "Jupyter", "Scikit-learn", "Pandas"],
        highlights: [
          "End-to-end exploratory ML experimentation & benchmarking",
          "Data preprocessing, transformation & feature engineering",
          "Cross-validation and performance metric analysis",
        ],
        githubUrl: "https://github.com/Sauravpant/machine-learning-portfolio",
      },
    ],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(categories[0].label);
  const activeCategory = categories.find((c) => c.label === activeTab) || categories[0];

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(79,70,229,0.2), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-8 sm:mb-12 text-center md:text-left"
        >
          <span className="section-label">Engineering Portfolio</span>
          <h2 className="heading-section" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", marginTop: 8 }}>
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg font-normal text-zinc-600 max-w-xl">
            Real-world systems, machine learning architectures, and scalable full-stack applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.label;
            const projectCount = cat.projects.length;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className="px-3.5 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border cursor-pointer flex items-center gap-2 sm:gap-2.5 shadow-xs"
                style={
                  isActive
                    ? { 
                        background: "#4338ca", 
                        color: "#ffffff", 
                        borderColor: "#4338ca", 
                        boxShadow: "0 6px 20px rgba(67,56,202,0.32)" 
                      }
                    : { 
                        background: "#f8fafc", 
                        color: "#334155", 
                        borderColor: "rgba(79,70,229,0.18)" 
                      }
                }
              >
                <span>{cat.label}</span>
                <span
                  className="px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold"
                  style={
                    isActive
                      ? { background: "rgba(255,255,255,0.22)", color: "#ffffff" }
                      : { background: "rgba(79,70,229,0.08)", color: "#4338ca" }
                  }
                >
                  {projectCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Content */}
        <motion.div
          key={activeCategory.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Responsive 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {activeCategory.projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl p-5 sm:p-7 md:p-8 border flex flex-col justify-between transition-all duration-300 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 hover:-translate-y-1 group"
                style={{
                  borderColor: "rgba(79,70,229,0.16)",
                  boxShadow: "0 4px 20px -2px rgba(79,70,229,0.06)",
                }}
              >
                <div className="space-y-4">
                  {/* Top Bar: Folder Icon + Badge + Action Icons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100">
                        <FolderGit2 size={18} strokeWidth={2.3} />
                      </div>
                      {project.badge && (
                        <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold border bg-amber-50 text-amber-900 border-amber-300 shadow-xs">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-zinc-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-2xs"
                        >
                          <ExternalLink size={15} strokeWidth={2.3} />
                        </Link>
                      )}
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Source code repository"
                        className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-100 transition-all shadow-2xs"
                      >
                        <Github size={15} strokeWidth={2.3} />
                      </Link>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4
                      className="font-extrabold text-lg sm:text-xl md:text-2xl text-zinc-950 tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-indigo-600 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-normal text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs font-medium text-zinc-700 leading-tight">
                          <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 bg-indigo-50 text-indigo-600">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Free tier warm-up note */}
                  {project.freeHostingNote && (
                    <p className="text-xs font-semibold text-indigo-600 bg-indigo-50/80 px-3 py-1.5 rounded-xl border border-indigo-100">
                      ⚡ Backend on free tier: please allow a brief warm-up.
                    </p>
                  )}
                </div>

                {/* Card Bottom / Footer */}
                <div className="space-y-4 pt-5 sm:pt-6 mt-auto">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold bg-slate-50 border border-slate-200/90 text-zinc-800"
                      >
                        <SkillLogo name={tag} size={13} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    {project.liveUrl ? (
                      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full gap-2">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white border border-indigo-200 transition-all flex items-center gap-1.5 shadow-2xs shrink-0"
                        >
                          <ExternalLink size={13} strokeWidth={2.5} />
                          <span>Live Demo</span>
                        </Link>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-zinc-800 hover:bg-zinc-900 hover:text-white border border-slate-200 transition-all flex items-center gap-1.5 shadow-2xs shrink-0"
                        >
                          <Github size={13} strokeWidth={2.5} />
                          <span>GitHub Repo</span>
                          <ArrowUpRight size={12} strokeWidth={2.5} />
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full gap-2">
                        <span className="text-xs font-semibold text-zinc-500 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          Open Source
                        </span>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-indigo-600 border border-zinc-900 hover:border-indigo-600 transition-all flex items-center gap-1.5 shadow-2xs shrink-0"
                        >
                          <Github size={13} strokeWidth={2.5} />
                          <span>GitHub Repo</span>
                          <ArrowUpRight size={12} strokeWidth={2.5} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
