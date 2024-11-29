'use client'

import { useState } from 'react'
import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageToggle } from '@/components/language-toggle'
import { EducationSection } from '@/components/education-section'
import { PortfolioSection } from '@/components/portfolio-section'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  return (
    <div className="bg-zinc-900 min-h-screen">
      <NavHeader lang={lang} />
      <LanguageToggle lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <PortfolioSection  />
        <ExperienceSection lang={lang} />
        <EducationSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

