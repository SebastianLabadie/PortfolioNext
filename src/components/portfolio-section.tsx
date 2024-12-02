import Image from "next/image"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { ProjectModal } from "./project-modal"



const projects = [
  {
    title: "Gestion Interna CNdeF",
    image: "/images/nacional.png",
    contentDescription: [
      {es: `\tEs una aplicacion de gestion interna para el Club Nacional de Football, optimizando procesos y mejorando la eficiencia operativa. Tiene 3 modulos Operaciones, Reservas y RRHH.\n\n\tDesde esta aplicacion los usuarios pueden realizar sus tareas diarias, reservar canchas, salas de reuniones, gimnasios,etc. Y ademas pedir adelantos salariales o licencias como vacaciones, dias por estudio, donaciones de sangre, etc.`},
      {en: `\tIt is an internal management application for Club Nacional de Football, optimizing processes and improving operational efficiency. It has 3 modules: Operations, Reservations and HR.\n\n\tFrom this application, users can perform their daily tasks, reserve courts, meeting rooms, gyms, etc. And also request salary advances or leave as vacations, study days, blood donations, etc.`}
    ],
    contentType: "video" as const,
    content: ["/videos/nacional.mp4"	] // Replace with actual video URL
  },
  {
    title: "Trigenus",
    image: "/placeholder.svg",
    contentDescription: [
      {es: "Es una aplicacion de recoleccion de residuos utilizada tanto por comercios, escuelas y hogares. S"},
      {en: "Innovative platform for managing renewable energy projects, facilitating collaboration and real-time tracking."}
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"] // Replace with actual image URLs
  },
  {
    title: "Tecnicos Express",
    image: "/placeholder.svg",
    contentDescription: [
      {es: "Aplicación móvil para conectar técnicos especializados con clientes, agilizando servicios de reparación y mantenimiento."},
      {en: "Mobile application connecting specialized technicians with customers, streamlining repair and maintenance services."}
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"] // Replace with actual image URLs
  },
  {
    title: "Clientes TCC",
    image: "/placeholder.svg",
    contentDescription: [
      {es: "Portal de gestión de clientes para TCC, mejorando la experiencia del usuario y optimizando procesos internos."},
      {en: "Customer management portal for TCC, enhancing user experience and optimizing internal processes."}
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"] // Replace with actual image URLs
  },
  {
    title: "Ventas Alonex",
    image: "/placeholder.svg",
    contentDescription: [
      {es: "Sistema de gestión de ventas para Alonex, aumentando la eficiencia y proporcionando análisis detallados en tiempo real."},
      {en: "Sales management system for Alonex, increasing efficiency and providing detailed real-time analytics."}
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"] // Replace with actual image URLs
  },
  {
    title: "CRM",
    image: "/placeholder.svg",
    contentDescription: [
      {es: "Sistema CRM personalizado, diseñado para mejorar la relación con los clientes y aumentar la productividad del equipo de ventas."},
      {en: "Custom CRM system designed to enhance customer relationships and increase sales team productivity."}
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"] // Replace with actual image URLs
  },
]

export function PortfolioSection({lang}: {lang: "en" | "es"}) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const content = {
    en: {
      title: "Portfolio",
      button: "View More",
      projectSeeMore: "See More"
    },
    es: {
      title: "Portafolio",
      button: "Ver mas",
      projectSeeMore: "Ver mas"
    }
  }
  return (
    <section id="portfolio" className="py-20 bg-bgSecondary">
      <div className="container mx-auto px-4 relative">
        <div className="pattern hidden md:grid place-content-center absolute h-[260px] w-[260px] -top-[200px] -right-0"></div>
        <h2 className="text-5xl font-bold text-white mb-12 text-center font-sourceSerifPro ">{content[lang].title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-square overflow-hidden rounded-lg flex items-center justify-center"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-[90%] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                <button 
                className="bg-primary text-bgPrimary px-6 py-1.5 rounded-md font-semibold hover:bg-primary transition-colors  text-center inline-flex items-center"
                onClick={() => setSelectedProject(project)}
                >
                  {content[lang].projectSeeMore}
                  <FaArrowRight className="w-4 h-4 ms-2" />
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-primary text-zinc-900 px-6 py-3 rounded-md font-semibold hover:bg-primary transition-colors">
            {content[lang].button}
          </button>
        </div>
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject!}
        lang={lang}
      />
    </section>
  )
}

