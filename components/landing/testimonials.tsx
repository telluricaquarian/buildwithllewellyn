"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "Llewellyn showed me how to position my offer and I closed a $4,500 website deal the same week.",
    name: "Marcus Chen",
    avatar: "MC"
  },
  {
    text: "Within 3 weeks of applying what I learned I had my first retainer client. The workflow is unlike anything I'd seen before.",
    name: "Sarah Williams",
    avatar: "SW"
  },
  {
    text: "I was delivering websites in days not weeks. Clients noticed immediately. My referral rate doubled.",
    name: "David Rodriguez",
    avatar: "DR"
  },
  {
    text: "Llewellyn showed me how to position my offer and I closed a $4,500 website deal the same week.",
    name: "Emily Thompson",
    avatar: "ET"
  },
  {
    text: "Within 3 weeks of applying what I learned I had my first retainer client. The workflow is unlike anything I'd seen before.",
    name: "James Miller",
    avatar: "JM"
  },
  {
    text: "I was delivering websites in days not weeks. Clients noticed immediately. My referral rate doubled.",
    name: "Ashley Parker",
    avatar: "AP"
  }
]

export function Testimonials() {
  // Double for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials]
  
  return (
    <section className="w-full bg-black pt-10 pb-16 flex flex-col items-center">
      {/* Logo */}
      <span className="text-sm font-medium tracking-widest uppercase text-[var(--brand-cream-60)] mb-10">
        Build w/ Llewellyn — Community
      </span>
      
      {/* Carousel wrapper with fade edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Track */}
        <div className="flex gap-5 w-max animate-testimonial-scroll">
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ text, name, avatar }: { text: string; name: string; avatar: string }) {
  return (
    <div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white/[0.02] border border-white/[0.05] rounded-lg p-6 flex flex-col">
      <Quote className="w-5 h-5 text-[var(--brand-cream)]/30 flex-shrink-0" />
      
      <p className="text-sm text-[var(--brand-cream)]/70 leading-relaxed mt-3 flex-1">
        {text}
      </p>
      
      <div className="flex items-center gap-3 mt-5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-orange-from)] to-[var(--brand-orange-to)] flex items-center justify-center text-white text-xs font-semibold">
          {avatar}
        </div>
        <span className="text-sm font-semibold text-[var(--brand-cream)]">
          {name}
        </span>
      </div>
    </div>
  )
}
