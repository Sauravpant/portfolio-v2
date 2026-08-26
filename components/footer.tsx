"use client"

import { Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-zinc-200/80 py-8">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold text-zinc-600">
        
        {/* Name and Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-zinc-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Saurav Pant
          </span>
          <span className="text-zinc-400">•</span>
          <span>&copy; {currentYear} All rights reserved.</span>
        </div>

        {/* Direct Email */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:sauravpant777@gmail.com"
            className="inline-flex items-center gap-2 font-bold text-zinc-700 hover:text-indigo-600 transition-colors"
          >
            <Mail size={16} className="text-indigo-600" />
            <span>sauravpant777@gmail.com</span>
          </a>
        </div>

      </div>
    </footer>
  )
}
