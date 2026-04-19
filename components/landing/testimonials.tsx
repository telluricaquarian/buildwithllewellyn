"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "I went from making $0 online to $8,500 in my first month using the AI strategies I learned. This completely changed my perspective on what's possible.",
    name: "Marcus Chen",
    avatar: "MC"
  },
  {
    text: "The step-by-step approach made it so easy to follow. Within 3 weeks I had my first paying client. Now I have a waitlist!",
    name: "Sarah Williams",
    avatar: "SW"
  },
  {
    text: "I was skeptical at first, but the results speak for themselves. Made over $12,000 last month working part-time. AI is the future.",
    name: "David Rodriguez",
    avatar: "DR"
  },
  {
    text: "Finally, a training that actually delivers. No fluff, just actionable steps. My income has tripled since implementing these strategies.",
    name: "Emily Thompson",
    avatar: "ET"
  },
  {
    text: "I've taken dozens of courses but nothing compares to this. The AI tools and methods shared are pure gold. Highly recommend!",
    name: "James Miller",
    avatar: "JM"
  },
  {
    text: "Quit my 9-5 after just 4 months of applying what I learned. Now making more than I ever did at my corporate job.",
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
        AI Freelancers
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
