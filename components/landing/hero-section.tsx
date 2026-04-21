"use client"

import { Clock } from "lucide-react"
import { OptinForm } from "./optin-form"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[1000px] md:min-h-[1100px] flex flex-col items-center overflow-hidden">
      {/* Background Image — desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backgroundimage-GJjiRJnBn3emzr715OUZ1GxBqMSRI4.png)',
          backgroundPosition: '50% 25%'
        }}
      />

      {/* Background Image — mobile */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat block md:hidden"
        style={{
          backgroundImage: 'url(/verticalmhomepage.png)',
          backgroundPosition: '50% 20%'
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Warm orange radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(244, 101, 33, 0.15) 0%, transparent 70%)'
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-7 px-5 pt-[300px] md:pt-[420px]">
        {/* Logo placeholder */}
        <div className="opacity-0 animate-fade-in">
          <span className="text-sm font-medium tracking-widest uppercase text-[var(--brand-cream-60)]">
            AI Freelancers
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-fade-in animation-delay-200 text-center leading-[1.3] font-normal text-2xl md:text-5xl max-w-4xl">
          <span className="text-[var(--brand-cream-60)]">Give me </span>
          <span className="font-bold text-[var(--brand-cream)]">30-45</span>
          <span className="inline-flex items-center justify-center mx-2 px-3 py-1 bg-gradient-to-r from-[var(--brand-orange-from)] to-[var(--brand-orange-to)] rounded-full">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </span>
          <span className="text-[var(--brand-cream)]">minutes</span>
          <br />
          <span className="text-[var(--brand-cream-60)]">{"and I'll teach you how to make"}</span>
          <br />
          <span className="text-[var(--brand-cream)]">over </span>
          <span className="gradient-text-orange font-bold">$193,901.00 per year </span>
          <span className="font-bold text-[var(--brand-cream)]">With AI.</span>
        </h1>

        {/* Body text */}
        <p className="opacity-0 animate-fade-in animation-delay-400 text-base md:text-lg text-[var(--brand-cream-65)] text-center leading-relaxed max-w-xl -mt-2">
          {"This is a free live training where I'm going to literally share my screen and show you how you could be making "}
          <strong className="text-[var(--brand-cream)] font-bold">thousands of dollars</strong>
          {" by leveraging the biggest opportunity of the century: "}
          <strong className="text-[var(--brand-cream)] font-bold">AI.</strong>
        </p>

        {/* Opt-in Form */}
        <div className="opacity-0 animate-fade-in animation-delay-600 w-full max-w-md">
          <OptinForm />
        </div>
      </div>
    </section>
  )
}
