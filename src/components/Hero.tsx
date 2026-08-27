import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { hero, profile } from '../data/cms'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 30 })
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setGlow({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [reduced])

  const words = hero.headline.split(' ')

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 noise-bg"
    >
      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(55,230,208,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(55,230,208,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)',
        }}
      />

      {/* cursor-reactive glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(55,230,208,0.12), transparent 70%)`,
        }}
      />

      {/* floating light particles */}
      {!reduced &&
        Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[var(--color-aqua)]/40 blur-[1px]"
            style={{
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}

      <div className="relative z-10 max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-[var(--color-aqua)] mb-6"
        >
          {profile.positioning}
        </motion.p>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 text-base md:text-xl text-[var(--color-white-soft)]/90"
        >
          {hero.supporting}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-3 text-sm md:text-base text-[var(--color-gray-muted)] max-w-2xl mx-auto"
        >
          {hero.microcopy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-aqua)] text-[#06110f] font-semibold px-6 py-3 text-sm hover:scale-105 transition-transform"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm hover:border-[var(--color-aqua)] hover:text-[var(--color-aqua)] transition-colors"
          >
            Let's Connect
          </a>
          <a
            href={hero.ctas[2].href}
            download
            className="rounded-full border border-white/20 px-6 py-3 text-sm flex items-center gap-2 hover:border-[var(--color-aqua)] hover:text-[var(--color-aqua)] transition-colors"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 text-[var(--color-gray-muted)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
