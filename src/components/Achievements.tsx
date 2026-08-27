import { Trophy, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { achievements } from '../data/cms'

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading num="08" eyebrow="Achievements" title="Milestones along the way" />

      <div className="space-y-4">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="glass rounded-xl p-5 flex items-center gap-4">
              <Trophy className="text-[var(--color-aqua)] shrink-0" size={20} />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="font-medium">{a.title}</p>
                  {a.organization && (
                    <p className="text-xs text-[var(--color-gray-muted)]">{a.organization}</p>
                  )}
                </div>
                {a.period && (
                  <span className="text-xs font-mono text-[var(--color-gray-muted)]">{a.period}</span>
                )}
              </div>
              {a.proof && (
                <a
                  href={a.proof}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-[var(--color-aqua)] hover:opacity-70"
                  aria-label="View proof"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
