import type { Metadata } from 'next'
import { AgencyLanding } from '../AgencyLanding'

export const metadata: Metadata = {
  title: '404‑DEV — Web, mobile & AI product studio',
  description: 'Senior product team for websites, mobile apps and practical AI solutions — without big-agency overhead.',
  alternates: { canonical: '/en', languages: { fr: '/', en: '/en' } },
}

export default function EnglishHome() {
  return <AgencyLanding locale="en" />
}
