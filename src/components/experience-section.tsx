const experiences = {
  en: [
    {
      year: "2021-2024",
      title: "Mobile Development and R&D Team Lead",
      company: "ICITELCO",
      description:
        "Lead the mobile development team, focusing primarily on React Native, where I develop, train, and manage staff. Additionally, I research and develop solutions using technologies such as React, Vue, and Angular in the frontend, Node.js and Genexus in the backend, being a key reference for other team members.",
    },
    {
      year: "2020-2021",
      title: "Developer",
      company: "Soy delivery",
      description:
        "Supported the implementation of new features and maintenance of applications.",
    },
  ],
  es: [
    {
      year: "2021-2024",
      title: "Líder de Desarrollo Mobile e I+D",
      company: "ICITELCO",
      description:
        "Lidero el equipo de desarrollo mobile, enfocado principalmente en React Native, donde desarrollo, capacito y gestiono al personal. Además, investigo y desarrollo soluciones utilizando tecnologías como React, Vue y Angular en el frontend, Node.js y Genexus en el backend, siendo un referente clave para los demás miembros.",
    },
    {
      year: "2020-2021",
      title: "Desarrollador",
      company: "Soy delivery",
      description:
        "Soporte en la implementación de nuevas funcionalidades y en el mantenimiento de aplicaciones .",
    },
  ],
};

export function ExperienceSection({ lang }: { lang: "en" | "es" }) {
  const content = {
    en: {
      title: "Experience",
    },
    es: {
      title: "Experiencia Laboral",
    },
  };

  return (
    <section id="experience" className="py-20 bg-bgTertiary">
      <div className="container mx-auto px-4 mb-[100px]">
        <h2 className="text-6xl font-bold text-white mt-[-115px] mb-12 font-sourceSerifPro">
          {content[lang].title}
        </h2>
        <div className="space-y-12">
          {experiences[lang].map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">
                {exp.title}
              </div>

              <div className="flex flex-col sm:flex-row items-start mb-1  before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-[#5d5e62] rounded-full">
                  {exp.year}
                </time>
                <div className="text-xl font-bold text-primary">
                  {exp.company}
                </div>
              </div>

              <div className="text-grayText">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
