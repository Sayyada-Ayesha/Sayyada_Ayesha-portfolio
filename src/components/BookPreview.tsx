import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Download } from 'lucide-react'

export default function BookPreview({
  open,
  onClose,
  title,
  subtitle,
  cover,
  pages,
  pdf,
}: {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  cover?: string
  pages: string[]
  pdf?: string
}) {
  // slide 0 = cover (if present), slides after that = preview pages
  const slides = [cover, ...pages].filter(Boolean) as string[]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (open) setIndex(0)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, slides.length - 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0))
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, slides.length])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col p-5 md:p-7"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 text-[var(--color-gray-muted)] hover:text-[var(--color-aqua)] transition-colors"
            >
              <X size={22} />
            </button>

            <div className="pr-8 mb-4">
              <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                {title}
              </h3>
              {subtitle && <p className="text-sm text-[var(--color-gray-muted)] mt-1">{subtitle}</p>}
            </div>

            {slides.length > 0 ? (
              <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/20 min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={slides[index]}
                    alt={index === 0 && cover ? `${title} cover` : `${title} preview page ${cover ? index : index + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-[55vh] max-w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </AnimatePresence>

                {slides.length > 1 && (
                  <>
                    <button
                      onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                      disabled={index === 0}
                      aria-label="Previous page"
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white disabled:opacity-30 hover:bg-[var(--color-aqua)] hover:text-[#06110f] transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setIndex((i) => Math.min(i + 1, slides.length - 1))}
                      disabled={index === slides.length - 1}
                      aria-label="Next page"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white disabled:opacity-30 hover:bg-[var(--color-aqua)] hover:text-[#06110f] transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <p className="text-[var(--color-gray-muted)] text-sm py-10 text-center">
                Cover and preview pages haven't been uploaded yet.
              </p>
            )}

            {slides.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-5 bg-[var(--color-aqua)]' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            )}

            {pdf && (
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-center rounded-full bg-[var(--color-aqua)] text-[#06110f] font-semibold px-5 py-2.5 text-sm hover:scale-105 transition-transform"
              >
                <Download size={16} /> Download full book
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
