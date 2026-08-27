/**
 * Prefixes a root-relative local asset path (e.g. "/assets/resume/x.pdf")
 * with Vite's configured base path, so links keep working when the site
 * is deployed under a GitHub Pages repository subpath
 * (https://username.github.io/repo-name/) rather than a domain root.
 *
 * Leaves absolute http(s) URLs untouched.
 */
export function withBase(path?: string): string {
  if (!path) return ''
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:')) return path
  const base = import.meta.env.BASE_URL || '/'
  return base.replace(/\/$/, '') + '/' + path.replace(/^\/+/, '')
}
