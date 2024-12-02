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
    <section className="py-20 bg-bgSecondary">
      <div className="container mx-auto px-4 mb-[100px]">
        <h2 className="text-5xl font-bold text-white mb-12 font-sourceSerifPro mt-[-100px]">{content[lang].title}</h2>
        <div  className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">
                {content[lang].degree}
              </div>

              <div className="flex flex-col sm:flex-row items-start mb-1  before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-[#5d5e62] rounded-full">
                  {content[lang].year}
                </time>
                <div className="text-xl font-bold text-primary">
                  {content[lang].institution}
                </div>
              </div>

              {/* <div className="text-grayText">{exp.description}</div> */}
            </div>
      </div>
    </section>
  )
}

