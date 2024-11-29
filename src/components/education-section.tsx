export function EducationSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "Education",
      degree: "Information Technology Analyst",
      institution: "Universidad ORT",
      year: "2021-2024"
    },
    es: {
      title: "Educación",
      degree: "Analista en Tecnologías de la Información",
      institution: "Universidad ORT",
      year: "2021-2024"
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">{content[lang].title}</h2>
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white">{content[lang].degree}</h3>
          <p className="text-yellow-500">{content[lang].institution}</p>
          <p className="text-gray-400">{content[lang].year}</p>
        </div>
      </div>
    </section>
  )
}

