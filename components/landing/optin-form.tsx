"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export function OptinForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    instagram: "",
    name: "",
    email: "",
    phone: "",
    compliance: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    alert("Registration successful! Check your email for confirmation.")
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 w-full backdrop-blur-sm bg-white/[0.03] border border-white/10 rounded-lg p-5"
    >
      {/* Instagram */}
      <input
        type="text"
        placeholder="@ Instagram"
        value={formData.instagram}
        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded text-[var(--brand-cream)] text-sm placeholder:text-[var(--brand-cream-35)] focus:border-[var(--brand-orange-to)]/50 focus:outline-none transition-colors"
      />

      {/* Name */}
      <input
        type="text"
        placeholder="Name & Last Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded text-[var(--brand-cream)] text-sm placeholder:text-[var(--brand-cream-35)] focus:border-[var(--brand-orange-to)]/50 focus:outline-none transition-colors"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded text-[var(--brand-cream)] text-sm placeholder:text-[var(--brand-cream-35)] focus:border-[var(--brand-orange-to)]/50 focus:outline-none transition-colors"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded text-[var(--brand-cream)] text-sm placeholder:text-[var(--brand-cream-35)] focus:border-[var(--brand-orange-to)]/50 focus:outline-none transition-colors"
      />

      {/* Compliance checkbox */}
      <label className="flex items-start gap-2.5 mt-1 cursor-pointer">
        <input
          type="checkbox"
          checked={formData.compliance}
          onChange={(e) => setFormData({ ...formData, compliance: e.target.checked })}
          required
          className="w-4 h-4 mt-0.5 flex-shrink-0 accent-[var(--brand-orange-to)] cursor-pointer"
        />
        <span className="text-[11px] leading-relaxed text-[var(--brand-cream-60)]">
          By checking this box, you agree to receive marketing messages and updates. 
          You can unsubscribe at any time. Privacy Policy applies.
        </span>
      </label>

      {/* CTA Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full mt-1 py-4 px-6 text-white font-bold text-[15px] rounded overflow-hidden transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
        style={{
          background: 'radial-gradient(79.29% 68.16% at 51.5% 50%, rgb(255, 136, 79) 0%, rgb(244, 101, 33) 100%)',
          textShadow: '0 1px 2px rgba(0,0,0,0.25)'
        }}
      >
        <span className="flex items-center justify-center gap-2.5">
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Click Here To Confirm Your Registration
            </>
          )}
        </span>
      </button>
    </form>
  )
}
