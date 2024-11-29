import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Modern Architecture",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Amazon Scraper",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Urban Design",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Mountain View",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "City Living",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Tech Setup",
    image: "/placeholder.svg",
    link: "#"
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}

