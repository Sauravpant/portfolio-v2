"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef || !isInView) return

    const canvas = canvasRef
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(56, 189, 248, ${0.05 + Math.sin(time * 0.005) * 0.02})`)
      gradient.addColorStop(1, `rgba(56, 189, 248, ${0.02 + Math.cos(time * 0.005) * 0.01})`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated particles
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width) / 2 + canvas.width / 2
        const y = (Math.cos(time * 0.0008 + i) * canvas.height) / 2 + canvas.height / 2
        const size = 2 + Math.sin(time * 0.01 + i) * 1

        ctx.fillStyle = `rgba(56, 189, 248, ${0.3 + Math.sin(time * 0.01 + i) * 0.2})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [canvasRef, isInView])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg border border-border bg-background/50 transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <canvas ref={setCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
