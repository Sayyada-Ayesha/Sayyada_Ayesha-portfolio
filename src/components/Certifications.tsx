import { Award } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { certifications } from '../data/cms'

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading num="07" eyebrow="Certifications" title="Learning, verified" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {certifications.map((c, i) => {
          const link = c.verificationUrl || c.certificatePdf || c.certificateImage
          return (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-[var(--color-aqua)]/40 hover:-translate-y-1 transition-all">
                <Award className="text-[var(--color-aqua)] mb-3" size={22} />
                <h3 className="font-semibold text-sm md:text-base">{c.name}</h3>
                <p className="text-xs text-[var(--color-gray-muted)] mt-1">
                  {c.issuer}
                  {c.date ? ` • ${c.date}` : ''}
                </p>
                {c.description && (
                  <p className="text-xs text-[var(--color-white-soft)]/70 mt-2">{c.description}</p>
                )}
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-xs text-[var(--color-aqua)] border border-[var(--color-aqua)]/30 rounded-full px-3 py-1.5 hover:bg-[var(--color-aqua)] hover:text-[#06110f] transition-colors"
                  >
                    View Certificate
                  </a>
                ) : (
                  <button
                    disabled
                    title="Certificate asset not yet uploaded"
                    className="mt-4 text-xs text-[var(--color-gray-muted)]/60 border border-white/10 rounded-full px-3 py-1.5 cursor-not-allowed"
                  >
                    View Certificate
                  </button>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
