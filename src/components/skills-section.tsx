import Image from "next/image"

const skills = [
  { name: "Leadership", icon: "/tech/leadership.svg" },
  { name: "Application Optimization", icon: "/tech/optimization.svg" },
  { name: "Agile Methodologies", icon: "/tech/agile.svg" },
  { name: "Web & Mobile Development", icon: "/tech/web-mobile.svg" },
  { name: "Teamwork", icon: "/tech/teamwork.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Vue", icon: "/tech/vue.svg" },
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Genexus", icon: "/tech/genexus.svg" },
]

export function SkillsSection({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "My Skills"
    },
    es: {
      title: "Mis Habilidades"
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">{content[lang].title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-zinc-700 transition-colors"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-gray-300 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

