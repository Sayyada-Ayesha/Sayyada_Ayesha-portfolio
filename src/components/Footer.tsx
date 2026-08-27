import { Link2 } from 'lucide-react'
import { socialLinks, profile } from '../data/cms'

const iconLinks = [
  { href: socialLinks.personalLinkedIn, label: 'LinkedIn' },
  { href: socialLinks.personalInstagram, label: 'Instagram' },
  { href: socialLinks.personalFacebook, label: 'Facebook' },
  { href: socialLinks.github, label: 'GitHub' },
].filter((l) => l.href)

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-gray-muted)]">
          © {new Date().getFullYear()} {profile.name}. {profile.company}.
        </p>
        <div className="flex items-center gap-4">
          {iconLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="text-[var(--color-gray-muted)] hover:text-[var(--color-aqua)] transition-colors flex items-center gap-1"
            >
              <Link2 size={18} />
              <span className="text-xs">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
