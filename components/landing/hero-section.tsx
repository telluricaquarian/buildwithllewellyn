"use client"

import { OptinForm } from "./optin-form"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[1000px] md:min-h-[1100px] flex flex-col items-center overflow-hidden">
      {/* Background Image — desktop */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(/bwlhero.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />

      {/* Background Image — mobile */}
      <div
        className="absolute inset-0 bg-no-repeat block md:hidden"
        style={{
          backgroundImage: 'url(/betterfit.png)',
          backgroundPosition: 'center top',
          backgroundSize: 'cover'
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
            Build w/ Llewellyn
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-fade-in animation-delay-200 text-center leading-[1.3] font-normal text-2xl md:text-5xl max-w-4xl">
          <span className="text-[var(--brand-cream-60)]">Give me </span>
          <span className="font-bold text-[var(--brand-cream)]">30 minutes</span>
          <span className="text-[var(--brand-cream-60)]"> and I'll show you how I'm building </span>
          <span className="gradient-text-orange font-bold">premium client businesses </span>
          <span className="text-[var(--brand-cream-60)]">with AI.</span>
        </h1>

        {/* Body text */}
        <p className="opacity-0 animate-fade-in animation-delay-400 text-base md:text-lg text-[var(--brand-cream-65)] text-center leading-relaxed max-w-xl -mt-2">
          {"This is a free private training where I pull back the curtain on the exact tools and workflow I use to deliver "}
          <strong className="text-[var(--brand-cream)] font-bold">high-converting websites and digital assets</strong>
          {" — faster and better than any agency. No fluff. Just what's actually working right now."}
        </p>

        {/* Opt-in Form */}
        <div className="opacity-0 animate-fade-in animation-delay-600 w-full max-w-md">
          <OptinForm />
        </div>
      </div>
    </section>
  )
}
