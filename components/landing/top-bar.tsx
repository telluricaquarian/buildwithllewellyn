"use client"

export function TopBar() {
  return (
    <div 
      className="w-full h-10 flex items-center justify-center"
      style={{
        background: 'linear-gradient(90deg, rgb(255, 200, 170) 0%, rgb(255, 233, 223) 50%, rgb(255, 200, 170) 100%)'
      }}
    >
      <div className="flex items-center justify-center gap-4 max-w-5xl w-full px-4">
        <span className="font-mono text-[11px] font-medium text-neutral-800 uppercase tracking-wider whitespace-nowrap">
          Live Event
        </span>
        <span className="text-neutral-600 text-xs">▪</span>
        <span className="font-mono text-[11px] font-medium text-neutral-800 uppercase tracking-wider whitespace-nowrap">
          Sunday, 04/19 at 7 PM EST
        </span>
      </div>
    </div>
  )
}
