import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import BookPreview from './BookPreview'
import { publications } from '../data/cms'

type Publication = (typeof publications)[number]

export default function Publications() {
  const [selected, setSelected] = useState<Publication | null>(null)

  return (
    <section id="publications" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading num="06" eyebrow="Writing" title="Writing & publications" />

      <div className="grid sm:grid-cols-2 gap-5">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <button
              onClick={() => setSelected(p)}
              className="text-left w-full glass rounded-2xl p-6 hover:border-[var(--color-aqua)]/40 transition-colors flex gap-4 items-start"
            >
              {p.cover ? (
                <img src={p.cover} alt={`${p.title} cover`} loading="lazy" className="w-16 h-20 object-cover rounded-md shrink-0" />
              ) : (
                <div className="w-16 h-20 rounded-md bg-[var(--color-aqua)]/10 flex items-center justify-center shrink-0">
                  <BookOpen size={20} className="text-[var(--color-aqua)]" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.subtitle && <p className="text-sm text-[var(--color-white-soft)]/70">{p.subtitle}</p>}
                <p className="text-sm text-[var(--color-gray-muted)] mt-1">
                  {p.org} {p.org && p.date ? '•' : ''} {p.date}
                </p>
                {(p.cover || (p.previewPages && p.previewPages.length > 0)) && (
                  <span className="inline-block mt-2 text-xs text-[var(--color-aqua)]">Preview →</span>
                )}
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <BookPreview
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ''}
        subtitle={selected?.subtitle || selected?.description}
        cover={selected?.cover}
        pages={selected?.previewPages || []}
        pdf={selected?.pdf}
      />
    </section>
  )
}
