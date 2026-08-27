import { Link2, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { socialLinks, synx } from '../data/cms'

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
      <Reveal>
        <h2
          className="text-3xl md:text-6xl font-bold tracking-tight gradient-text"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Let's build something useful.
        </h2>
        <p className="mt-6 text-[var(--color-gray-muted)] text-base md:text-lg max-w-xl mx-auto">
          Have an idea, workflow, digital product or creative challenge? Let's turn it into something real.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="rounded-full bg-[var(--color-aqua)] text-[#06110f] font-semibold px-6 py-3 text-sm flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Mail size={16} /> Email Me
            </a>
          )}
          <a
            href={socialLinks.personalLinkedIn}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-sm flex items-center gap-2 hover:border-[var(--color-aqua)] hover:text-[var(--color-aqua)] transition-colors"
          >
            <Link2 size={16} /> LinkedIn
          </a>
          <a
            href={synx.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-sm hover:border-[var(--color-aqua)] hover:text-[var(--color-aqua)] transition-colors"
          >
            Work With SYNX
          </a>
        </div>
      </Reveal>
    </section>
  )
}
