import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, PhoneIcon as WhatsApp } from 'lucide-react'
import Link from "next/link"

export function ContactSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "Contact Me"
    },
    es: {
      title: "Contáctame"
    }
  }

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-white">{content[lang].title}</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link 
              href="mailto:sebastianlabadie.contact@gmail.com"
              className="flex items-center justify-center gap-3 bg-zinc-800/50 p-6 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <Mail className="h-6 w-6 text-yellow-500" />
              <span className="text-gray-300">sebastianlabadie.contact@gmail.com</span>
            </Link>
            
            <Link 
              href="tel:(598)91843400"
              className="flex items-center justify-center gap-3 bg-zinc-800/50 p-6 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <Phone className="h-6 w-6 text-yellow-500" />
              <span className="text-gray-300">(598) 91843400</span>
            </Link>
            
            <div className="flex items-center justify-center gap-3 bg-zinc-800/50 p-6 rounded-lg md:col-span-2 lg:col-span-1">
              <MapPin className="h-6 w-6 text-yellow-500" />
              <span className="text-gray-300">Uruguay</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <WhatsApp className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

