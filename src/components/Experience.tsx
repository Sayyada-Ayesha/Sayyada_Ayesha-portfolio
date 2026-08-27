import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data/cms'

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading num="02" eyebrow="Experience" title="Where I've worked & built" />

      <div className="relative border-l border-[var(--color-aqua)]/20 pl-8 space-y-10">
        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 0.06} className="relative">
            <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-[var(--color-aqua)] shadow-[0_0_12px_var(--color-aqua)]" />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg md:text-xl font-semibold text-[var(--color-white-soft)]">{e.role}</h3>
              {e.period && (
                <span className="text-xs md:text-sm font-mono text-[var(--color-aqua)]">{e.period}</span>
              )}
            </div>
            <p className="text-[var(--color-gray-muted)] mt-1">{e.org}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
