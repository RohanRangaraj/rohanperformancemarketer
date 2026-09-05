import { Mail } from 'lucide-react'
import { LinkedinIcon } from './linkedin-icon'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <p className="font-heading text-xl font-bold tracking-tight">
              ROHAN<span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Performance Marketer focused on growth, ROI, and measurable results.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/rohan-r-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:rohanrangaraj36@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © 2026 Rohan. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
