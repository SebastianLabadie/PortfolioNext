export function AboutSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "About Me",
      description: "Senior professional with extensive experience in development and team leadership in web and mobile areas. I have worked with the latest technologies and frameworks in telecommunications and retail companies. Currently, I lead the web/mobile development team and the R&D team at ICITelco, where I am responsible for ensuring code quality and optimizing applications to guarantee scalability and high performance. Additionally, I manage infrastructure tasks for system maintenance and updates."
    },
    es: {
      title: "Acerca de Mí",
      description: "Profesional senior con amplia experiencia en desarrollo y liderazgo de equipos en el área web y mobile. He trabajado con las ultimas tecnologías y frameworks en empresas de telecomunicaciones y retail. Actualmente, lidero el equipo de desarrollo web/mobile y el equipo de I+D de ICITelco, donde me encargo de asegurar la calidad del código y optimizar las aplicaciones para garantizar escalabilidad y alto rendimiento. Además, gestiono las tareas de infraestructura para el mantenimiento y actualización de los sistemas."
    }
  }

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">{content[lang].title}</h2>
        <p className="text-gray-400 max-w-3xl">
          {content[lang].description}
        </p>
      </div>
    </section>
  )
}

