"use client"

import { useEffect, useState } from "react"

function getSydneyTime() {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date())
}

export function MobileHeader() {
  const [time, setTime] = useState("")
  const [dots, setDots] = useState(".")

  useEffect(() => {
    setTime(getSydneyTime())

    const timeInterval = setInterval(() => setTime(getSydneyTime()), 1000)

    let dotStep = 0
    const dotStates = [".", "..", "..."]
    const dotInterval = setInterval(() => {
      dotStep = (dotStep + 1) % dotStates.length
      setDots(dotStates[dotStep])
    }, 500)

    return () => {
      clearInterval(timeInterval)
      clearInterval(dotInterval)
    }
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[52px] flex items-center justify-between px-4 bg-background/50 backdrop-blur-md border-b border-primary/10 md:hidden">
      <span className="font-mono text-[11px] text-muted-foreground tracking-wider">
        SYD {time} AEST
      </span>
      <span className="font-mono text-[13px] text-primary/70 w-6 text-right">
        {dots}
      </span>
    </header>
  )
}
