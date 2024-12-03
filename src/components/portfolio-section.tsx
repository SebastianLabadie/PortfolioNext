import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ProjectModal } from "./project-modal";

const projects = [
  {
    title: "Gestion Interna CNdeF",
    image: "/images/nacional/mockups.png",
    contentDescription: [
      {
        es: `\tEs una aplicacion de gestion interna para el Club Nacional de Football, optimizando procesos y mejorando la eficiencia operativa. Tiene 3 modulos Operaciones, Reservas y RRHH.\n\tDesde esta aplicacion los usuarios pueden realizar sus tareas diarias, reservar canchas, salas de reuniones, gimnasios,etc. Y ademas pedir adelantos salariales o licencias como vacaciones, dias por estudio, donaciones de sangre, etc.`,
      },
      {
        en: `\tIt is an internal management application for Club Nacional de Football, optimizing processes and improving operational efficiency. It has 3 modules: Operations, Reservations and HR.\n\tFrom this application, users can perform their daily tasks, reserve courts, meeting rooms, gyms, etc. And also request salary advances or leave as vacations, study days, blood donations, etc.`,
      },
    ],
    contentType: "video" as const,
    content: ["/videos/nacional.mp4"], // Replace with actual video URL
  },
  {
    title: "Trigenus",
    image: "/images/trigenus/mockups.png",
    contentDescription: [
      {
        es: `\tEs una aplicacion de recoleccion de residuos utilizada tanto por comercios, escuelas y hogares. El objetivo es facilitar la recoleccion y mejorar la eficiencia en la gestion de residuos generando un impacto ambiental, social y economico.`,
      },
      {
        en: `\tIt is an application for collecting waste used by both businesses, schools and households. The goal is to facilitate collection and improve efficiency in waste management, generating an environmental, social and economic impact.`,
      },
    ],
    contentType: "gallery" as const,
    content: [
      "/images/trigenus/0.jpg",
      "/images/trigenus/1.jpg",
      "/images/trigenus/2.jpg",
      "/images/trigenus/3.jpg",
      "/images/trigenus/4.jpg",
      "/images/trigenus/5.jpg",
      "/images/trigenus/6.jpg",
      "/images/trigenus/7.jpg",
    ],
  },
  {
    title: "Tecnicos",
    image: "/placeholder.svg",
    contentDescription: [
      {
        es: "\tEs una aplicacion de field service para que las cuadrillas de tecnicos del rubro de telecomunicaciones puedan realizar sus tareas, instalaciones, desconecciones, reparaciones, mudanzas, etc. \n\tDesde esta aplicacion los tecnicos sus tareas del dia, enviar comandos a distintos dispositivos decodificadores, chromecast, etc. Pueden counicarse con el cliente, pueden subir fotos de evidencia, pueden manifestar problemas con su visita.",
      },
      {
        en: "\tIt is a field service application for technicians in the telecommunications industry to perform their tasks, installations, disconnections, repairs, moves, etc. \n\tFrom this application, technicians can perform their daily tasks, send commands to various decoders, chromecast, etc. They can communicate with the customer, upload photos as evidence, and report problems with their visit.",
      },
    ],
    contentType: "gallery" as const,
    content: [
      "/images/trigenus/1.jpg",
      "/images/trigenus/2.jpg",
      "/images/trigenus/3.jpg",
    ], 
  },
  {
    title: "Mi TCC",
    image: "/images/MiTCC/mockups.png",
    contentDescription: [
      {
        es: "\tEs una aplicacion para autogestion de clientes, desde esta aplicacion los usuarios pueden ver sus servicios, sus facturas, afiliarse a un debito automatico, realizar reclamos, contratar productos, firmar contratos pendientes, etc",
      },
      {
        en: "\tIt is an application for customer self-service, from which users can view their services, their bills, subscribe to automatic debit, make complaints, contract products, sign pending contracts, etc",
      },
    ],
    contentType: "gallery" as const,
    content: [
      "/images/MiTCC/1.jpg",
      "/images/MiTCC/2.jpg",
      "/images/MiTCC/3.jpg",
      "/images/MiTCC/4.jpg",
      "/images/MiTCC/5.jpg",
      "/images/MiTCC/6.jpg",
      "/images/MiTCC/7.jpg",
      "/images/MiTCC/8.jpg",
      "/images/MiTCC/9.jpg",
      "/images/MiTCC/10.jpg",
      "/images/MiTCC/11.jpg",
      "/images/MiTCC/12.jpg",
    ], 
  },
  {
    title: "Ventas Alonex",
    image: "/placeholder.svg",
    contentDescription: [
      {
        es: "Sistema de gestión de ventas para Alonex, aumentando la eficiencia y proporcionando análisis detallados en tiempo real.",
      },
      {
        en: "Sales management system for Alonex, increasing efficiency and providing detailed real-time analytics.",
      },
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], 
  },
  {
    title: "CRM",
    image: "/placeholder.svg",
    contentDescription: [
      {
        es: "Sistema CRM personalizado, diseñado para mejorar la relación con los clientes y aumentar la productividad del equipo de ventas.",
      },
      {
        en: "Custom CRM system designed to enhance customer relationships and increase sales team productivity.",
      },
    ],
    contentType: "gallery" as const,
    content: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], 
  },
];

export function PortfolioSection({ lang }: { lang: "en" | "es" }) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const content = {
    en: {
      title: "Portfolio",
      button: "View More",
      projectSeeMore: "See More",
    },
    es: {
      title: "Portafolio",
      button: "Ver mas",
      projectSeeMore: "Ver mas",
    },
  };
  return (
    <section id="portfolio" className="py-20 bg-bgSecondary">
      <div className="container mx-auto px-4 relative">
        <div className="pattern hidden md:grid place-content-center absolute h-[260px] w-[260px] -top-[200px] -right-0"></div>
        <h2 className="text-5xl font-bold text-white mb-12 text-center font-sourceSerifPro ">
          {content[lang].title}
        </h2>
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
                  <h3 className="text-white text-2xl font-bold">
                    {project.title}
                  </h3>
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
  );
}
