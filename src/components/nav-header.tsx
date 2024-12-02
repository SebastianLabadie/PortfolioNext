import { Search } from 'lucide-react'
import Link from "next/link"
import { LanguageToggle } from './language-toggle'
import MyLogo from '../../public/my_logo3.svg'
import Image from 'next/image'

export function NavHeader({ lang, setLang }: { lang: 'en' | 'es', setLang: (lang: 'en' | 'es') => void }) {
  const content = {
    en: {
      about: "About",
      portfolio: "Portfolio",
      experience: "Experience",
      contact: "Contact"
    },
    es: {
      about: "Acerca de",
      portfolio: "Portfolio",
      experience: "Experiencia",
      contact: "Contacto"
    }
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const headerOffset = sectionId === 'experience' ? 125 : 93;
    
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };




  
  return (
    <header className="h-[92px] fixed top-0 left-0 right-0 z-50 bg-bgPrimary backdrop-blur-sm ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={(e) => scrollToSection(e, 'main')} className="text-primary text-2xl font-bold">
            <Image
              priority
              src={MyLogo}
              alt="My Logo"
              width={60}
              height={60}
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')} 
              className="text-navInactive hover:text-navActive transition-colors"
            >
              {content[lang].about}
            </Link>
            <Link 
              href="#portfolio" 
              onClick={(e) => scrollToSection(e, 'portfolio')} 
              className="text-navInactive hover:text-navActive transition-colors"
            >
              {content[lang].portfolio}
            </Link>
            <Link 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')} 
              className="text-navInactive hover:text-navActive transition-colors"
            >
              {content[lang].experience}
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="text-navInactive hover:text-navActive transition-colors"
            >
              {content[lang].contact}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="bg-zinc-800 text-white rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
              <LanguageToggle lang={lang} setLang={setLang} />
          </div>

        </div>
      </div>
    </header>
  )
}

