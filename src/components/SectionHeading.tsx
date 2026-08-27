import Reveal from './Reveal'

export default function SectionHeading({
  num,
  eyebrow,
  title,
  subtitle,
}: {
  num: string
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[var(--color-aqua)] font-mono text-sm tracking-widest">{num}</span>
        <span className="h-px flex-1 max-w-16 bg-[var(--color-aqua)]/30" />
        <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-gray-muted)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--color-gray-muted)] max-w-2xl text-base md:text-lg">{subtitle}</p>
      )}
    </Reveal>
  )
}
