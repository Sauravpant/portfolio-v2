"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Loader2, 
  MessageSquare, 
  ArrowUpRight,
  MessageCircle,
  FileDown,
  Download
} from "lucide-react"

const contactChannels = [
  {
    id: "email",
    title: "Email",
    value: "sauravpant777@gmail.com",
    href: "mailto:sauravpant777@gmail.com",
    icon: Mail,
    accent: "#4338ca",
    bg: "#eef2ff",
    border: "rgba(79, 70, 229, 0.22)",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "linkedin.com/in/sauravpant7",
    href: "https://linkedin.com/in/sauravpant7",
    icon: Linkedin,
    accent: "#0284c7",
    bg: "#f0f9ff",
    border: "rgba(2, 132, 199, 0.22)",
  },
  {
    id: "github",
    title: "GitHub",
    value: "github.com/Sauravpant",
    href: "https://github.com/Sauravpant",
    icon: Github,
    accent: "#18181b",
    bg: "#f4f4f5",
    border: "rgba(24, 24, 27, 0.18)",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    value: "+977 9768445113",
    href: "https://wa.me/9779768445113",
    icon: MessageCircle,
    accent: "#059669",
    bg: "#ecfdf5",
    border: "rgba(5, 150, 105, 0.22)",
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fafaf8 0%, #f3f0ff 60%, #fafaf8 100%)" }}
    >
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(79,70,229,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="heading-section" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", marginTop: 8 }}>
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-zinc-700 max-w-lg mx-auto">
            Have an engineering role, a project idea, or want to collaborate? Connect with me directly or drop a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Direct Contact & Social Channels + Resume */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5">
              {contactChannels.map((channel, i) => {
                const IconComponent = channel.icon;
                return (
                  <motion.a
                    key={channel.id}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="rounded-3xl p-3.5 sm:p-5 border bg-white shadow-xs hover:shadow-lg transition-all duration-200 group flex items-center justify-between"
                    style={{ borderColor: channel.border }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.borderColor = channel.accent;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.borderColor = channel.border;
                    }}
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div
                        className="p-2.5 sm:p-3 rounded-2xl shrink-0 transition-transform duration-200 group-hover:scale-105"
                        style={{
                          background: channel.bg,
                          color: channel.accent,
                        }}
                      >
                        <IconComponent size={18} strokeWidth={2.3} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-zinc-500">
                          {channel.title}
                        </p>
                        <p className="font-bold text-xs sm:text-sm md:text-base text-zinc-950 mt-0.5 truncate sm:overflow-visible">
                          {channel.value}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 sm:p-2 rounded-xl text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-2">
                      <ArrowUpRight size={17} strokeWidth={2.5} />
                    </div>
                  </motion.a>
                );
              })}

              {/* Download Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/PLACEHOLDER/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="rounded-3xl p-3.5 sm:p-5 border bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-xl hover:shadow-indigo-600/20 transition-all duration-200 group flex items-center justify-between cursor-pointer"
                style={{ borderColor: "rgba(79, 70, 229, 0.4)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white/15 text-white group-hover:scale-105 transition-transform shrink-0">
                    <FileDown size={18} strokeWidth={2.3} />
                  </div>
                  <span className="font-extrabold text-sm sm:text-base text-white">
                    Download Resume
                  </span>
                </div>

                <div className="p-1.5 sm:p-2 rounded-xl bg-white/15 text-white group-hover:bg-white group-hover:text-indigo-700 transition-all shrink-0">
                  <Download size={17} strokeWidth={2.5} />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-3xl p-5 sm:p-8 md:p-10 border bg-white h-full flex flex-col justify-between"
              style={{ borderColor: "rgba(79,70,229,0.16)", boxShadow: "0 6px 30px -4px rgba(79,70,229,0.08)" }}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 sm:mb-7 pb-3.5 sm:pb-4 border-b border-zinc-100">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700">
                    <MessageSquare size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-zinc-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Send a Direct Message
                    </h3>
                    <p className="text-xs font-semibold text-zinc-500 mt-0.5">
                      Fill out this form and I will respond to your email.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider mb-2 text-zinc-800">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        className="premium-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider mb-2 text-zinc-800">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="e.g. john@example.com"
                        className="premium-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-extrabold uppercase tracking-wider mb-2 text-zinc-800">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project inquiry / Collaboration / Opportunity..."
                      className="premium-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider mb-2 text-zinc-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, requirements, or idea..."
                      className="premium-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2"
                    style={{ borderRadius: "14px", padding: "14px 24px" }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-700 text-sm text-center font-bold bg-emerald-50 py-3 rounded-xl border border-emerald-200"
                    >
                      ✓ Message sent successfully! I will get back to you promptly.
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-rose-700 text-sm text-center font-bold bg-rose-50 py-3 rounded-xl border border-rose-200"
                    >
                      ✗ Something went wrong. Please reach out to me directly via WhatsApp or email.
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
