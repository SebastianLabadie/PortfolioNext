const experiences = {
  en: [
    {
      year: "2021-2024",
      title: "Mobile Development and R&D Team Lead",
      company: "ICITELCO",
      description: "Lead the mobile development team, focusing primarily on React Native, where I develop, train, and manage staff. Additionally, I research and develop solutions using technologies such as React, Vue, and Angular in the frontend, Node.js and Genexus in the backend, being a key reference for other team members."
    },
    {
      year: "2020-2021",
      title: "Developer",
      company: "Soy delivery",
      description: "Supported the implementation of new features and maintenance of applications."
    }
  ],
  es: [
    {
      year: "2021-2024",
      title: "Líder de Desarrollo Mobile e I+D",
      company: "ICITELCO",
      description: "Lidero el equipo de desarrollo mobile, enfocado principalmente en React Native, donde desarrollo, capacito y gestiono al personal. Además, investigo y desarrollo soluciones utilizando tecnologías como React, Vue y Angular en el frontend, Node.js y Genexus en el backend, siendo un referente clave para los demás miembros."
    },
    {
      year: "2020-2021",
      title: "Desarrollador",
      company: "Soy delivery",
      description: "Soporte en la implementación de nuevas funcionalidades y en el mantenimiento de aplicaciones."
    }
  ]
}

export function ExperienceSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "Experience"
    },
    es: {
      title: "Experiencia Laboral"
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">{content[lang].title}</h2>
        <div className="space-y-12">
          {experiences[lang].map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 text-zinc-900 px-3 py-1 rounded text-sm font-medium">
                  {exp.year}
                </div>
                <div className="w-px h-full bg-zinc-700 my-4" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-yellow-500">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

