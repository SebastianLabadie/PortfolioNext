import Image from "next/image"
import { Facebook, Twitter, Linkedin, PhoneIcon as WhatsApp } from 'lucide-react'
import Link from "next/link"

export function HeroSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      name: "Sebastián Labadie",
      title: "Information Technology Analyst",
      contactMe: "Contact Me"
    },
    es: {
      name: "Sebastián Labadie",
      title: "Analista en Tecnologías de la Información",
      contactMe: "Contáctame"
    }
  }

  return (
    <section className="min-h-screen pt-20 bg-zinc-900">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {content[lang].name}
            </h1>
            <p className="text-xl text-gray-400">
              {content[lang].title}
            </p>
            <button className="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
              {content[lang].contactMe}
            </button>
          </div>
          
          <div className="flex-1 relative">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <WhatsApp className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

