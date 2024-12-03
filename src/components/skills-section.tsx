import Atropos from "atropos/react";
import Image from "next/image";

const skills = [
  { name: "React", icon: "/images/skills/react.png", iconHeight: 75 },
  { name: "React Native / Expo", icon: "/images/skills/expo.png", iconHeight: 60 },
  { name: "Node.js", icon: "/images/skills/node.png", iconHeight: 75 },
  { name: "Git", icon: "/images/skills/git.png", iconHeight: 75 },
  { name: "Docker", icon: "/images/skills/docker.webp", iconHeight: 75 },
  { name: "AWS", icon: "/images/skills/aws.png", iconHeight: 75 },
  { name: "Vue", icon: "/images/skills/vue.png", iconHeight: 75 },
  { name: "Linux", icon: "/images/skills/linux.png", iconHeight: 75 },
  { name: "Html & CSS & JS", icon: "/images/skills/html_css_js.png", iconHeight: 75 },
  { name: "Genexus", icon: "/images/skills/genexus.png", iconHeight: 75 },
];

export function SkillsSection({ lang }: { lang: "en" | "es" }) {
  const content = {
    en: {
      title: "My Skills",
    },
    es: {
      title: "Mis Habilidades",
    },
  };

  return (
    <section className="py-20 bg-bgSecondary">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-12 text-center font-sourceSerifPro">
          {content[lang].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-6 justify-center">
          {skills.map((skill) => (
            <Atropos key={skill.name} className="my-atropos shadow-md">
              <div
                className="bg-bgTertiary p-6 rounded-lg flex flex-col items-center justify-center gap-4 "
              >
                <div className="h-[80px]">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={100}
                    height={skill.iconHeight}
                    style={{
                      height: `${skill.iconHeight}px !important`,
                      width: "auto !important",
                    }}
                  />
                </div>
                <span className="text-white text-lg">{skill.name}</span>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
  );
}
