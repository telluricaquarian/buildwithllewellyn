"use client"

import { useEffect, useState } from "react"

function getTimeUntilEvent() {
  // Target: Sunday 04/19 at 7 PM EST
  const now = new Date()
  const target = new Date()
  
  // Set to next Sunday at 7 PM EST (19:00)
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7
  target.setDate(now.getDate() + daysUntilSunday)
  target.setHours(19, 0, 0, 0)
  
  const diff = target.getTime() - now.getTime()
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  
  return { days, hours, minutes, seconds }
}

export function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getTimeUntilEvent())
    
    const interval = setInterval(() => {
      setTime(getTimeUntilEvent())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  if (!mounted) {
    return (
      <section className="w-full bg-black py-6 px-4 text-center">
        <div className="inline-block w-full max-w-lg py-9">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-dot" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
              Live Event Starting In
            </span>
          </div>
          <div className="grid grid-cols-4 border border-white/10 max-w-md mx-auto">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
              <div key={unit} className="py-5 text-center border-l border-white/10 first:border-l-0">
                <div className="text-3xl md:text-5xl font-bold text-[var(--brand-cream)] leading-none tracking-tight">
                  00
                </div>
                <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/30 mt-3">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-black py-6 px-4 text-center">
      <div className="inline-block w-full max-w-lg py-9">
        {/* Label with live dot */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-dot" />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
            Live Event Starting In
          </span>
        </div>
        
        {/* Countdown boxes */}
        <div className="grid grid-cols-4 border border-white/10 max-w-md mx-auto">
          <CountdownBox number={formatNumber(time.days)} unit="Days" />
          <CountdownBox number={formatNumber(time.hours)} unit="Hours" />
          <CountdownBox number={formatNumber(time.minutes)} unit="Minutes" />
          <CountdownBox number={formatNumber(time.seconds)} unit="Seconds" />
        </div>
      </div>
    </section>
  )
}

function CountdownBox({ number, unit }: { number: string; unit: string }) {
  return (
    <div className="py-5 text-center border-l border-white/10 first:border-l-0">
      <div className="text-3xl md:text-5xl font-bold text-[var(--brand-cream)] leading-none tracking-tight">
        {number}
      </div>
      <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/30 mt-3">
        {unit}
      </div>
    </div>
  )
}
