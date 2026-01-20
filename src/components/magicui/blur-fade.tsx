"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  blur?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = true,
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!inView)

  useEffect(() => {
    if (!inView) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [inView])

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)"

    switch (direction) {
      case "up":
        return `translate(0, ${offset}px)`
      case "down":
        return `translate(0, ${-offset}px)`
      case "left":
        return `translate(${offset}px, 0)`
      case "right":
        return `translate(${-offset}px, 0)`
      default:
        return `translate(0, ${-offset}px)`
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : `blur(${blur})`,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
