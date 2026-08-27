import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Creative Work', href: '#creative-work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass shadow-lg shadow-black/20' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold tracking-tight text-lg"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          SAYYADA <span className="text-[var(--color-aqua)]">AYESHA</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm tracking-wide text-[var(--color-gray-muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative group hover:text-[var(--color-white-soft)] transition-colors">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-aqua)] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full border border-[var(--color-aqua)]/40 px-5 py-2 text-sm text-[var(--color-aqua)] hover:bg-[var(--color-aqua)] hover:text-[#06110f] transition-colors"
        >
          Let's Talk
        </a>

        <button
          className="lg:hidden text-[var(--color-white-soft)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg text-[var(--color-white-soft)]/90 hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block mt-2 text-center rounded-full border border-[var(--color-aqua)]/40 px-5 py-3 text-[var(--color-aqua)]"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
