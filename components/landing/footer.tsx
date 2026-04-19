"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-[rgba(33,33,33,0.15)] py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Links */}
        <div className="text-xs text-[var(--brand-cream-35)]">
          <Link href="#" className="text-white hover:underline transition-opacity">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="#" className="text-white hover:underline transition-opacity">
            Terms & Conditions
          </Link>
        </div>
        
        {/* Disclaimer */}
        <p className="text-[11px] text-[var(--brand-cream)]/25 text-center leading-relaxed max-w-2xl">
          This site is not a part of the Facebook website or Meta Platforms, Inc. 
          Additionally, this site is NOT endorsed by Facebook in any way. 
          FACEBOOK is a trademark of Meta Platforms, Inc. 
          Results shown are not typical and your results may vary. 
          Income examples are provided for illustration purposes only and are not guarantees of future performance.
        </p>
        
        {/* Copyright */}
        <p className="text-[11px] text-[var(--brand-cream)]/25">
          © {new Date().getFullYear()} AI Freelancers. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
