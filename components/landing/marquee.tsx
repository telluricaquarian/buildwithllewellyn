"use client"

const items = [
  "Close clients faster",
  "Deliver faster than agencies",
  "Charge premium prices",
  "Work from anywhere — No team needed",
  "Land your first retainer",
]

export function Marquee() {
  // Double the items for seamless loop
  const doubledItems = [...items, ...items]
  
  return (
    <div className="w-full overflow-hidden py-5 bg-black">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {doubledItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-sm text-[var(--brand-cream)]/50 font-sans">
              {item}
            </span>
            <span className="px-10 text-[var(--brand-orange-from)]/80 text-[10px]">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
