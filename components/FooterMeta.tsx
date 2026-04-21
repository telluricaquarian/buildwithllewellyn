"use client"

export function FooterMeta() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-between px-4 h-10 bg-black/60 backdrop-blur-md border-t border-white/[0.06] md:hidden">
      <span className="text-xs text-muted-foreground">
        By registering you agree to our{" "}
        <a
          href="/privacy"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Privacy Policy
        </a>
      </span>
      <span className="text-xs text-muted-foreground whitespace-nowrap ml-3">
        © Build w/ Llewellyn
      </span>
    </footer>
  )
}
