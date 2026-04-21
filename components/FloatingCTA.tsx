"use client"

import { useEffect, useRef, useState } from "react"

export function FloatingCTA() {
  const [visible, setVisible] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const target = document.getElementById("bottom-cta-section")
    if (!target) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observerRef.current.observe(target)

    return () => observerRef.current?.disconnect()
  }, [])

  function handleClick() {
    document.getElementById("bottom-cta-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="fixed bottom-14 inset-x-0 z-50 flex justify-center px-5 md:hidden transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <button
        onClick={handleClick}
        className="rounded-full px-6 py-3 font-bold text-white text-[15px] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(244,101,33,0.4)]"
        style={{
          background:
            "radial-gradient(79.29% 68.16% at 51.5% 50%, rgb(255, 136, 79) 0%, rgb(244, 101, 33) 100%)",
        }}
      >
        Reserve My Free Spot →
      </button>
    </div>
  )
}
