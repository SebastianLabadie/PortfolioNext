import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function ContactSection({ lang }: { lang: "en" | "es" }) {
  const content = {
    en: {
      title: "Contact Me",
    },
    es: {
      title: "Contáctame",
    },
  };

  return (
    <section id="contact" className="py-20 bg-bgTertiary">
      <div className="max-w-[100%] mx-auto text-center space-y-12">
        {/* Sección del título */}
        <div className="flex items-center justify-center mt-[-105px]">
          <div className="flex-1 h-[2px] bg-primary"></div>
          <h2 className="text-5xl font-bold text-white font-sourceSerifPro px-6">
            {content[lang].title}
          </h2>
          <div className="flex-1 h-[2px] bg-primary"></div>
        </div>
        <div className="container mx-auto px-4">
          {/* Sección de contactos */}
          <div className="grid gap-6 grid-cols-4">
            {/* <div className="col-span-1"></div> */}
            <Link
              href="mailto:sebastianlabadie.contact@gmail.com"
              className="col-start-1 col-span-2  flex items-center justify-center gap-2 bg-bgSecondary p-4 rounded-lg hover:bg-bgPrimary transition-colors"
            >
              <Mail className="h-6 w-6 text-white" strokeWidth={2} />
              <span className="text-primary font-medium">
                sebastianlabadie.contact@gmail.com
              </span>
            </Link>

            <Link
              href="tel:(598)91843400"
              className="col-start-3 col-span-2 flex items-center justify-center gap-2 bg-bgSecondary p-4 rounded-lg hover:bg-bgPrimary transition-colors"
            >
              <Phone className="h-6 w-6 text-white" strokeWidth={2} />
              <span className="text-primary font-medium">(598) 91843400</span>
            </Link>
            {/* <div className="col-span-1"></div> */}
            <div className="flex items-center justify-center gap-2 bg-bgSecondary p-4 rounded-lg col-span-2 col-start-2">
              <MapPin className="h-6 w-6 text-white" strokeWidth={2} />
              <span className="text-primary font-medium">Uruguay</span>
            </div>
          </div>
        </div>
        {/* Sección de redes sociales */}
        <div className="space-y-6 ]">
          <div className="flex items-center justify-center mb-[-90px]">
            <div className="flex-1 h-[2px] bg-primary"></div>
            <div className="px-6">
              <div className="flex justify-center gap-6">
                <Link
                  href="https://www.linkedin.com/in/sebasti%C3%A1n-labadie-173902181/"
                  className="text-white hover:text-primary transition-colors"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/SebastianLb6"
                  className="text-white hover:text-primary transition-colors"
                >
                  <FaX className="h-6 w-6" />
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-primary transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://wa.me/59891843400"
                  className="text-white hover:text-primary transition-colors"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex-1 h-[2px] bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
