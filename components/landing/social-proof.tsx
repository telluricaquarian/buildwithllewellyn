"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

const names = [
  { name: "Mia Johnson", location: "Portland, OR" },
  { name: "James Wilson", location: "Austin, TX" },
  { name: "Sofia Martinez", location: "Miami, FL" },
  { name: "Lucas Brown", location: "Seattle, WA" },
  { name: "Emma Davis", location: "Chicago, IL" },
  { name: "Noah Taylor", location: "Denver, CO" },
  { name: "Olivia Garcia", location: "Phoenix, AZ" },
  { name: "Liam Anderson", location: "Atlanta, GA" },
]

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Initial delay before showing first popup
    const initialTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // Cycle through names
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % names.length)
        setIsVisible(true)
      }, 500)
      
      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }, 8000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  const current = names[currentIndex]

  return (
    <div 
      className={`fixed bottom-6 left-5 z-50 flex items-center gap-3 bg-[rgba(15,15,15,0.96)] border border-[var(--brand-orange-from)]/30 border-l-[3px] border-l-[var(--brand-orange-from)] p-3 max-w-[280px] shadow-2xl transition-all duration-400 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {/* Icon */}
      <div 
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: 'radial-gradient(79.29% 68.16% at 51.5% 50%, rgb(255, 136, 79) 0%, rgb(244, 101, 33) 100%)'
        }}
      >
        <Users className="w-4 h-4 text-white" />
      </div>
      
      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] font-bold text-[var(--brand-cream)] leading-tight">
          {current.name}
        </span>
        <span className="text-[11px] text-[var(--brand-cream)]/55 leading-tight">
          from {current.location} just joined...
        </span>
        <span className="text-[10px] text-[var(--brand-orange-from)] mt-0.5">
          Just now
        </span>
      </div>
    </div>
  )
}
