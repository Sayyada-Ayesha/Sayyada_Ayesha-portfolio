import { useState } from 'react'
import { FileText, Download, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Lightbox from './Lightbox'
import { galleryCategories, galleryItems, portfolioPdfPath } from '../data/cms'

type GalleryItem = (typeof galleryItems)[number]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const filtered =
    active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)

  const hasAnyImages = galleryItems.some((g) => g.image)

  return (
    <section id="creative-work" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading
        num="05"
        eyebrow="Creative Work"
        title="Design & writing archive"
        subtitle="A running archive of design, writing and research work — organized by category."
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm border transition-colors ${
              active === c
                ? 'bg-[var(--color-aqua)] text-[#06110f] border-[var(--color-aqua)]'
                : 'border-white/15 text-[var(--color-gray-muted)] hover:border-[var(--color-aqua)]/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {!hasAnyImages ? (
        <Reveal>
          <div className="glass rounded-2xl p-10 text-center max-w-xl mx-auto">
            <FileText className="mx-auto mb-4 text-[var(--color-aqua)]" size={36} />
            <h3 className="text-xl font-semibold mb-2">Full Portfolio Document</h3>
            <p className="text-[var(--color-gray-muted)] mb-6">
              Individual project images for this gallery are being organized. In the meantime, view the
              complete design & writing portfolio as a document.
            </p>
            <a
              href={portfolioPdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-aqua)] text-[#06110f] font-semibold px-6 py-3 text-sm hover:scale-105 transition-transform"
            >
              <Download size={16} /> View Portfolio
            </a>
          </div>
        </Reveal>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <Reveal key={item.title + i} delay={i * 0.05}>
              <button
                onClick={() => setSelected(item)}
                className="text-left w-full glass rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-aqua)]/15 to-transparent flex items-center justify-center relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-[var(--color-gray-muted)] text-sm">{item.category}</span>
                  )}
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-[var(--color-gray-muted)]">{item.category}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <Lightbox open={!!selected} onClose={() => setSelected(null)} title={selected?.title || ''}>
        {selected && (
          <div>
            {(selected.image || (selected.images && selected.images.length > 0)) && (
              <div className="grid gap-3 mb-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {(selected.images && selected.images.length > 0 ? selected.images : [selected.image]).map(
                  (src, idx) =>
                    src && (
                      <img
                        key={idx}
                        src={src}
                        alt={`${selected.title} ${idx + 1}`}
                        loading="lazy"
                        className="rounded-lg w-full object-cover"
                      />
                    ),
                )}
              </div>
            )}
            {selected.description && (
              <p className="text-[var(--color-white-soft)]/85 mb-4">{selected.description}</p>
            )}
            {selected.tags && selected.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-[var(--color-gray-muted)]">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4 text-sm">
              {selected.pdf && (
                <a href={selected.pdf} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[var(--color-aqua)] hover:underline">
                  <Download size={14} /> Download PDF
                </a>
              )}
              {selected.externalUrl && (
                <a href={selected.externalUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[var(--color-aqua)] hover:underline">
                  <ExternalLink size={14} /> View
                </a>
              )}
            </div>
          </div>
        )}
      </Lightbox>
    </section>
  )
}
