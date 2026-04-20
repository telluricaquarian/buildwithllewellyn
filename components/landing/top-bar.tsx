"use client"

import { useEffect, useState } from "react"

function getSydneyTime() {
  const now = new Date()

  const weekday = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "long",
  }).format(now).toUpperCase()

  const day = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    day: "2-digit",
  }).format(now)

  const month = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    month: "2-digit",
  }).format(now)

  const timeParts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now)

  const get = (type: string) =>
    timeParts.find((p) => p.type === type)?.value ?? "00"

  const hh = get("hour")
  const mm = get("minute")
  const ss = get("second")

  return `SYD, AU ▪ ${weekday}, ${day}/${month} ${hh}:${mm}:${ss} AEST`
}

export function TopBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    setTime(getSydneyTime())
    const interval = setInterval(() => setTime(getSydneyTime()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="w-full h-10 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgb(255, 200, 170) 0%, rgb(255, 233, 223) 50%, rgb(255, 200, 170) 100%)",
      }}
    >
      <div className="flex items-center justify-center max-w-5xl w-full px-4">
        <span className="font-mono text-[11px] font-medium text-neutral-800 uppercase tracking-wider whitespace-nowrap">
          {time}
        </span>
      </div>
    </div>
  )
}
