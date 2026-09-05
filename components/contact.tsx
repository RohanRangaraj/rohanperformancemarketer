'use client'

import { useState, type FormEvent } from 'react'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import { LinkedinIcon } from './linkedin-icon'
import { Reveal } from './reveal'

type Errors = Partial<Record<'name' | 'email' | 'help' | 'message', string>>

const helpOptions = [
  'Meta Ads',
  'Google Ads',
  'Lead Generation',
  'E-commerce Growth',
  'Other',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const help = String(data.get('help') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = 'Please enter your name.'
    if (!email) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Please enter a valid email address.'
    if (!help) next.help = 'Please select an option.'
    if (!message) next.message = 'Please tell me about your project.'

    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      form.reset()
    }
  }

  const fieldClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent'

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Let&apos;s Connect.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Have a project, campaign, or growth challenge? Let&apos;s talk.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:rohanrangaraj36@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span className="block text-sm font-medium text-foreground group-hover:text-accent">
                    rohanrangaraj36@gmail.com
                  </span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-r-"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-accent">
                  <LinkedinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </span>
                  <span className="block text-sm font-medium text-foreground group-hover:text-accent">
                    linkedin.com/in/rohan-r-
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent bg-surface p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <p className="mt-4 font-heading text-xl font-semibold">
                  Thanks for reaching out!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-border bg-surface p-6 md:p-8"
              >
                <div className="grid gap-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <input id="name" name="name" type="text" className={fieldClass} placeholder="Your name" />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>
                    <input id="email" name="email" type="email" className={fieldClass} placeholder="you@example.com" />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium">
                      Company / Brand
                    </label>
                    <input id="company" name="company" type="text" className={fieldClass} placeholder="Optional" />
                  </div>

                  <div>
                    <label htmlFor="help" className="mb-2 block text-sm font-medium">
                      What Can I Help You With?
                    </label>
                    <select id="help" name="help" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      {helpOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.help && <p className="mt-1.5 text-xs text-red-400">{errors.help}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell me about your project"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
