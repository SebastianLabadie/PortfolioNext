import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    contentDescription: { [key: string]: string }[]
    contentType: 'video' | 'gallery'
    content: string[] // URLs for video or images
  }
  lang: 'en' | 'es'
}

export function ProjectModal({ isOpen, onClose, project, lang }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-300 mb-6 whitespace-pre-wrap">
            {project.contentDescription.find(desc => desc[lang])?.[lang]}
          </p>
          {project.contentType === 'video' ? (
            <video width="100%" height="auto" controls preload="auto">
            <source src={project.content[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="rounded-lg overflow-hidden"
            >
              {project.content.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-auto" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  )
}

