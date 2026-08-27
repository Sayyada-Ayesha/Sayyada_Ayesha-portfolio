import { ExternalLink, Code2, FileText } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projects } from '../data/cms'

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading num="04" eyebrow="Projects" title="Selected work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-[var(--color-aqua)]/40 transition-colors group">
              {p.thumbnail && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-xl md:text-2xl font-semibold group-hover:text-[var(--color-aqua)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.title}
                  </h3>
                  {p.status && (
                    <span className="shrink-0 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color-aqua)]/15 text-[var(--color-aqua)] border border-[var(--color-aqua)]/30">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-gray-muted)] mb-3">
                  {p.tag}
                  {p.year ? ` • ${p.year}` : ''}
                </p>
                <p className="text-[var(--color-white-soft)]/85 leading-relaxed flex-1">{p.description}</p>

                {p.technologies && p.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-[var(--color-gray-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {(p.projectUrl || p.githubUrl || p.caseStudyUrl) && (
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    {p.projectUrl && (
                      <a
                        href={p.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[var(--color-aqua)] hover:underline"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[var(--color-gray-muted)] hover:text-[var(--color-aqua)]"
                      >
                        <Code2 size={14} /> Code
                      </a>
                    )}
                    {p.caseStudyUrl && (
                      <a
                        href={p.caseStudyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[var(--color-gray-muted)] hover:text-[var(--color-aqua)]"
                      >
                        <FileText size={14} /> Case study
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
