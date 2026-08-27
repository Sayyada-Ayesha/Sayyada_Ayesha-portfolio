import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { synx } from '../data/cms'

export default function Synx() {
  return (
    <section id="synx" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <Reveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight gradient-text"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {synx.heading}
        </h2>
        <p className="mt-4 text-[var(--color-gray-muted)] text-base md:text-lg">{synx.subheading}</p>
        <p className="mt-4 text-[var(--color-white-soft)]/90">{synx.description}</p>
        <a
          href={synx.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-aqua)] hover:underline"
        >
          Follow SYNX AI Horizon on LinkedIn <ExternalLink size={14} />
        </a>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {synx.services.map((s, i) => (
          <Reveal key={s} delay={i * 0.05}>
            <div className="glass rounded-xl p-5 h-full hover:border-[var(--color-aqua)]/50 hover:-translate-y-1 transition-all duration-300">
              <p className="font-semibold text-sm md:text-base">{s}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
