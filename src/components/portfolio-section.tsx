import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ProjectModal } from "./project-modal";

const projects = [
  {
    title: "Gestion Interna CNdeF",
    image: "/images/nacional/mockups.png",
    type:"APP",
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
    type:"APP",
    contentDescription: [
      {
        es: `\tEs una aplicación de recolección de residuos utilizada tanto por comercios, escuelas y hogares. El objetivo es facilitar la recolección y mejorar la eficiencia en la gestión de residuos, generando un impacto ambiental, social y económico.`,
      },
      {
        en: `\tIt is a waste collection application used by businesses, schools, and households. The goal is to facilitate waste collection and improve efficiency in waste management, creating an environmental, social, and economic impact.`,
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
    image: "/images/tecnicos/mockup.png",
    type:"APP",
    contentDescription: [
      {
        es: "\tEs una aplicación de field service para que las cuadrillas de técnicos del rubro de telecomunicaciones puedan realizar sus tareas, instalaciones, desconexiones, reparaciones, mudanzas, etc. \n\tDesde esta aplicación los técnicos pueden realizar sus tareas del día, enviar comandos a distintos dispositivos, decodificadores, Chromecast, etc. Pueden comunicarse con el cliente, pueden subir fotos de evidencia, pueden manifestar problemas con su visita.",
      },
      {
        en: "\tIt is a field service application designed for telecommunications technicians to perform tasks such as installations, disconnections, repairs, relocations, and more.\n\tThrough this application, technicians can manage their daily tasks, send commands to various devices like decoders and Chromecasts, communicate with customers, upload evidence photos, and report issues encountered during their visits.",
      },
    ],
    contentType: "gallery" as const,
    content: [
      "/images/tecnicos/1.jpg",
      "/images/tecnicos/2.jpg",
      "/images/tecnicos/3.jpg",
      "/images/tecnicos/4.jpg",
      "/images/tecnicos/5.jpg",
      "/images/tecnicos/6.jpg",
      "/images/tecnicos/7.jpg",
      "/images/tecnicos/8.jpg",
      "/images/tecnicos/9.jpg",
    ], 
  },
  {
    title: "Mi TCC",
    image: "/images/MiTCC/mockups.png",
    type:"APP",
    contentDescription: [
      {
        es: "\tEs una aplicación para autogestión de clientes, desde esta aplicación los usuarios pueden ver sus servicios, sus facturas, afiliarse a un débito automático, realizar reclamos, contratar productos, firmar contratos pendientes, etc.",
      },
      {
        en: "\tIt is a self-service application for customers. Through this application, users can view their services, access their invoices, enroll in automatic payments, file complaints, purchase products, sign pending contracts, and more.",
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
    title: "Ventas",
    image: "/images/ventas/mockup.png",
    type:"APP",
    contentDescription: [
      {
        es: "\tEs una aplicación para los vendedores puerta a puerta; pueden ofrecerle a los clientes nuevos productos y servicios de telecomunicaciones como internet, telefonía, cable, etc.",
      },
      {
        en: "\tIt is an application for door-to-door sales representatives. They can offer customers new telecommunications products and services such as internet, phone, cable, and more.",
      },
    ],
    contentType: "gallery" as const,
    content: [
      "/images/ventas/1.jpg",
      "/images/ventas/2.jpg",
      "/images/ventas/3.jpg",
      "/images/ventas/4.jpg",
      "/images/ventas/5.jpg",
      "/images/ventas/6.jpg",
      "/images/ventas/7.jpg",
      "/images/ventas/8.jpg",
      "/images/ventas/9.jpg",
      "/images/ventas/10.jpg",
      "/images/ventas/11.jpg",
    ], 
  },
  {
    title: "CRM",
    image: "/images/CRM/mockup.png",
    type:"WEB",
    contentDescription: [
      {
        es: "\tEs una solución integral que consolida la gestión de relaciones con los clientes a través de múltiples canales. Permite centralizar operaciones, monitorear interacciones en tiempo real, optimizar campañas de marketing, gestionar la deuda y automatizar notificaciones. Además, integra un marcador predictivo y herramientas avanzadas de análisis, facilitando la toma de decisiones y potenciando el crecimiento del negocio.\n\tEn una única pantalla los usuarios pueden encontrar contratos, facturas, recibos, contactos previos, equipos, servicios, scoring, avisos automáticos, una infinidad de acciones y más sobre el cliente.",
      },
      {
        en: "\tIt is a comprehensive solution that consolidates customer relationship management across multiple channels. It allows you to centralize operations, monitor interactions in real time, optimize marketing campaigns, manage debts, and automate notifications. Additionally, it integrates a predictive dialer and advanced analytics tools, facilitating decision-making and driving business growth.\n\tOn a single screen, users can access contracts, invoices, receipts, previous contacts, equipment, services, scoring, automated notifications, a wide range of actions, and more about the customer.",
      },
    ],
    contentType: "gallery" as const,
    content: [
      "/images/CRM/1.png",
      "/images/CRM/2.png",
      "/images/CRM/3.png",
      "/images/CRM/4.png",
      "/images/CRM/5.png",
      "/images/CRM/6.png",
      "/images/CRM/7.png",
      "/images/CRM/8.png",
    ], 
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
                priority
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
