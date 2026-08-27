// =====================================================================
// CMS DATA LAYER
// Reads content committed to the repo's /content/ folder (managed via
// the Decap CMS admin at /admin) and merges it over the static fallback
// data in ./content.ts. If a CMS collection is empty or a field wasn't
// filled in, the static fallback is used instead — the site never
// renders blank because of missing CMS data.
// =====================================================================

import * as fallback from './content'
import { withBase } from '../lib/paths'

// ---- raw CMS file loading (eager, resolved at build time) ----

const projectFiles = import.meta.glob('/content/projects/*.json', { eager: true }) as Record<
  string,
  { default: CmsProject }
>
const portfolioFiles = import.meta.glob('/content/portfolio/*.json', { eager: true }) as Record<
  string,
  { default: CmsPortfolioItem }
>
const publicationFiles = import.meta.glob('/content/publications/*.json', { eager: true }) as Record<
  string,
  { default: CmsPublication }
>
const certificateFiles = import.meta.glob('/content/certificates/*.json', { eager: true }) as Record<
  string,
  { default: CmsCertificate }
>
const achievementFiles = import.meta.glob('/content/achievements/*.json', { eager: true }) as Record<
  string,
  { default: CmsAchievement }
>
const profileFile = import.meta.glob('/content/settings/profile.json', { eager: true }) as Record<
  string,
  { default: CmsProfile }
>
const socialFile = import.meta.glob('/content/settings/social.json', { eager: true }) as Record<
  string,
  { default: CmsSocial }
>

// ---- CMS entry shapes (mirrors the Decap CMS collection fields) ----

export type CmsProject = {
  title: string
  slug?: string
  shortDescription?: string
  fullDescription?: string
  category?: string
  status?: string
  technologies?: string[]
  year?: string
  featured?: boolean
  thumbnail?: string
  gallery?: string[]
  projectUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
}

export type CmsPortfolioItem = {
  title: string
  category?: string
  description?: string
  year?: string
  featured?: boolean
  thumbnail?: string
  images?: string[]
  externalUrl?: string
  pdf?: string
  tags?: string[]
}

export type CmsPublication = {
  title: string
  subtitle?: string
  description?: string
  cover?: string
  previewPages?: string[]
  pdf?: string
  publicationDate?: string
  publisher?: string
  category?: string
  externalUrl?: string
  featured?: boolean
}

export type CmsCertificate = {
  title: string
  issuer?: string
  date?: string
  description?: string
  certificateImage?: string
  certificatePdf?: string
  verificationUrl?: string
  featured?: boolean
}

export type CmsAchievement = {
  title: string
  organization?: string
  date?: string
  description?: string
  image?: string
  proof?: string
  featured?: boolean
}

export type CmsProfile = {
  name?: string
  headline?: string
  shortBio?: string
  longBio?: string
  profileImage?: string
  resume?: string
  location?: string
  education?: string
  currentFocus?: string
  companyName?: string
  companyDescription?: string
}

export type CmsSocial = {
  personalLinkedIn?: string
  companyLinkedIn?: string
  personalInstagram?: string
  personalFacebook?: string
  companyInstagram?: string
  companyFacebook?: string
  github?: string
  email?: string
  otherLinks?: { label: string; url: string }[]
}

function values<T>(files: Record<string, { default: T }>): T[] {
  return Object.values(files).map((f) => f.default)
}

function firstValue<T>(files: Record<string, { default: T }>): T | undefined {
  const all = values(files)
  return all[0]
}

// non-empty-string check, so blank CMS fields fall back cleanly
const has = (v?: string) => typeof v === 'string' && v.trim().length > 0

// ---- merged, CMS-first exports (same shape components already use) ----

const cmsProfile = firstValue(profileFile)
const cmsSocial = firstValue(socialFile)

export const profile = {
  ...fallback.profile,
  name: cmsProfile?.name || fallback.profile.name,
  positioning: cmsProfile?.headline || fallback.profile.positioning,
  location: cmsProfile?.location || fallback.profile.location,
  resumePath: has(cmsProfile?.resume) ? withBase(cmsProfile!.resume) : withBase(fallback.profile.resumePath),
  profilePhoto: has(cmsProfile?.profileImage)
    ? withBase(cmsProfile!.profileImage)
    : fallback.profile.profilePhoto,
  email: cmsSocial?.email || fallback.profile.email,
}

export const hero = {
  ...fallback.hero,
  ctas: fallback.hero.ctas.map((c) => (c.download ? { ...c, href: profile.resumePath } : c)),
}

export const about = {
  ...fallback.about,
  tagline: cmsProfile?.shortBio || fallback.about.tagline,
}

export const education = cmsProfile?.education
  ? [{ degree: cmsProfile.education, school: '', period: '' }]
  : fallback.education

export const experience = fallback.experience // no dedicated CMS collection requested for this

const cmsProjects = values(projectFiles)
export const projects = cmsProjects.length
  ? cmsProjects
      .slice()
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .map((p) => ({
        title: p.title,
        tag: p.category || '',
        status: p.status || '',
        description: p.fullDescription || p.shortDescription || '',
        year: p.year || '',
        technologies: p.technologies || [],
        thumbnail: has(p.thumbnail) ? withBase(p.thumbnail) : '',
        gallery: (p.gallery || []).map(withBase),
        projectUrl: p.projectUrl || '',
        githubUrl: p.githubUrl || '',
        caseStudyUrl: p.caseStudyUrl || '',
        featured: !!p.featured,
      }))
  : fallback.projects.map((p) => ({
      ...p,
      year: '',
      technologies: [] as string[],
      thumbnail: '',
      gallery: [] as string[],
      projectUrl: '',
      githubUrl: '',
      caseStudyUrl: '',
      featured: false,
    }))

const cmsPortfolio = values(portfolioFiles)
export const galleryItems = cmsPortfolio.length
  ? cmsPortfolio
      .slice()
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .map((item) => ({
        title: item.title,
        category: item.category || 'Other',
        image: has(item.thumbnail) ? withBase(item.thumbnail) : undefined,
        images: (item.images || []).map(withBase),
        description: item.description || '',
        pdf: has(item.pdf) ? withBase(item.pdf) : '',
        externalUrl: item.externalUrl || '',
        tags: item.tags || [],
        featured: !!item.featured,
      }))
  : fallback.galleryItems.map((i) => ({
      ...i,
      images: [] as string[],
      description: '',
      pdf: '',
      externalUrl: '',
      tags: [] as string[],
      featured: false,
    }))

export const galleryCategories = fallback.galleryCategories
export const portfolioPdfPath = withBase(fallback.portfolioPdfPath)

const cmsPublications = values(publicationFiles)
export const publications = cmsPublications.length
  ? cmsPublications
      .slice()
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .map((p) => ({
        title: p.title,
        org: p.publisher || '',
        date: p.publicationDate || '',
        subtitle: p.subtitle || '',
        description: p.description || '',
        cover: has(p.cover) ? withBase(p.cover) : '',
        previewPages: (p.previewPages || []).map(withBase),
        pdf: has(p.pdf) ? withBase(p.pdf) : '',
        category: p.category || '',
        externalUrl: p.externalUrl || '',
        featured: !!p.featured,
      }))
  : fallback.publications.map((p) => ({
      ...p,
      subtitle: '',
      description: '',
      cover: '',
      previewPages: [] as string[],
      pdf: '',
      category: '',
      externalUrl: '',
      featured: false,
    }))

const cmsCertificates = values(certificateFiles)
export const certifications = cmsCertificates.length
  ? cmsCertificates
      .slice()
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .map((c) => ({
        name: c.title,
        issuer: c.issuer || '',
        date: c.date || '',
        description: c.description || '',
        certificateImage: has(c.certificateImage) ? withBase(c.certificateImage) : '',
        certificatePdf: has(c.certificatePdf) ? withBase(c.certificatePdf) : '',
        verificationUrl: c.verificationUrl || '',
        featured: !!c.featured,
      }))
  : fallback.certifications.map((c) => ({
      ...c,
      date: '',
      description: '',
      certificateImage: '',
      certificatePdf: '',
      verificationUrl: '',
      featured: false,
    }))

const cmsAchievements = values(achievementFiles)
export const achievements = cmsAchievements.length
  ? cmsAchievements
      .slice()
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .map((a) => ({
        title: a.title,
        period: a.date || '',
        organization: a.organization || '',
        description: a.description || '',
        image: has(a.image) ? withBase(a.image) : '',
        proof: has(a.proof) ? withBase(a.proof) : '',
        featured: !!a.featured,
      }))
  : fallback.achievements.map((a) => ({
      ...a,
      organization: '',
      description: '',
      image: '',
      proof: '',
      featured: false,
    }))

export const synx = {
  ...fallback.synx,
  heading: fallback.synx.heading,
  description: cmsProfile?.companyDescription || fallback.synx.description,
}

export const skills = fallback.skills // no dedicated CMS collection requested for this

export const socialLinks = {
  personalLinkedIn: cmsSocial?.personalLinkedIn || fallback.socialLinks.personalLinkedIn,
  companyLinkedIn: cmsSocial?.companyLinkedIn || fallback.socialLinks.companyLinkedIn,
  personalInstagram: cmsSocial?.personalInstagram || fallback.socialLinks.personalInstagram,
  personalFacebook: cmsSocial?.personalFacebook || fallback.socialLinks.personalFacebook,
  companyInstagram: cmsSocial?.companyInstagram || fallback.socialLinks.companyInstagram,
  companyFacebook: cmsSocial?.companyFacebook || fallback.socialLinks.companyFacebook,
  github: cmsSocial?.github || fallback.socialLinks.github,
  email: cmsSocial?.email || fallback.socialLinks.email,
  otherLinks: cmsSocial?.otherLinks || [],
}

export const seo = fallback.seo
