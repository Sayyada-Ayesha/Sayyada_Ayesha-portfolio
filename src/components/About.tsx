import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { about, profile, education } from '../data/cms'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading num="01" eyebrow="About" title="Who is Sayyada" />

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <Reveal delay={0.1} className="md:col-span-3">
          <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-white-soft)]">
            {about.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {about.pillars.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full text-sm border border-[var(--color-aqua)]/25 text-[var(--color-aqua)] bg-[var(--color-aqua)]/5"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-[var(--color-gray-muted)] mb-4">Education</p>
            {education.map((e) => (
              <div key={e.degree} className="mb-2">
                <p className="font-semibold text-[var(--color-white-soft)]">{e.degree}</p>
                <p className="text-sm text-[var(--color-gray-muted)]">{e.school}</p>
                {e.period && <p className="text-xs text-[var(--color-gray-muted)] mt-1">{e.period}</p>}
              </div>
            ))}
            <div className="h-px bg-white/10 my-5" />
            <p className="text-xs uppercase tracking-widest text-[var(--color-gray-muted)] mb-2">Based in</p>
            <p className="text-sm text-[var(--color-white-soft)]">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
