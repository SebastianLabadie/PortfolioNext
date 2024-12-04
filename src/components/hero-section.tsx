import SocialMedia from "./social-media"

export function HeroSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      greeting: "I'M",
      name: "Sebastián Labadie",
      title: "Fullstack Developer Web/Mobile",
      contactMe: "Contact Me"
    },
    es: {
      greeting: "Soy",
      name: "Sebastián Labadie",
      title: "Fullstack Developer Web/Mobile",
      contactMe: "Contáctame"
    }
  }

  return (
    <section className="min-h-screen bg-bgPrimary shadow-lg relative">
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl md:text-4xl mb-2 font-rethinkSans text-grayText">
              {content[lang].greeting}
              <span className="text-primary text-6xl md:text-8xl  ml-4 font-sourceSerifPro font-semibold">{content[lang].name}</span>
            </h1>
            <p className="text-3xl md:text-4xl text-grayText">
              {content[lang].title}
            </p>
            <button onClick={()=>{location.href = 'mailto:sebastianlabadie.contact@gmail.com'}} className="border-[4px] text-xl font-rethinkSans border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-bgPrimary transition-colors">
              {content[lang].contactMe}
            </button>
          </div>

          <div className="flex-0.3 w-full md:w-auto relative">
            {/* <Image
              src="/placeholder.svg"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-lg"6
            /> */}
            <div className="absolute right-0 top-[160px] -translate-y-1/2 flex flex-row md:flex-col items-center gap-6">
              <div className="w-[90px] h-[2px] md:w-[2px] md:h-[90px] bg-primary transition-colors"></div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

