import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/cms'

const categories = Object.keys(skills) as (keyof typeof skills)[]

export default function Skills() {
  const [active, setActive] = useState<keyof typeof skills>(categories[0])

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-28 md:py-36">
      <SectionHeading
        num="03"
        eyebrow="Skills"
        title="A growing, hands-on skillset"
        subtitle="Some tools are still being learned and grown with — labeled honestly, not oversold."
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              active === c
                ? 'bg-[var(--color-aqua)] text-[#06110f] border-[var(--color-aqua)]'
                : 'border-white/15 text-[var(--color-gray-muted)] hover:border-[var(--color-aqua)]/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <Reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            {skills[active].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-5 py-3 rounded-xl glass text-sm md:text-base hover:border-[var(--color-aqua)]/50 hover:-translate-y-0.5 transition-all"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </section>
  )
}
