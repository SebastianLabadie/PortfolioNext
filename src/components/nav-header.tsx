import { Search } from 'lucide-react'
import Link from "next/link"

export function NavHeader({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    es: {
      about: "Acerca de",
      portfolio: "Portfolio",
      contact: "Contacto"
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-yellow-500 text-2xl font-bold">
            D
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              {content[lang].about}
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              {content[lang].portfolio}
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
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
          </div>
        </div>
      </div>
    </header>
  )
}

