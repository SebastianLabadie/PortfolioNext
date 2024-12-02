'use client'

import { useState } from 'react'
import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { EducationSection } from '@/components/education-section'
import { PortfolioSection } from '@/components/portfolio-section'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  return (
    <div className="min-h-screen">
      <NavHeader lang={lang} setLang={setLang} />
      <main id='main'>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <PortfolioSection lang={lang} />
        <ExperienceSection lang={lang} />
        <EducationSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

