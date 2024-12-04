import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Project } from '../../types'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project
  lang: 'en' | 'es'
}

export function ProjectModal({ isOpen, onClose, project, lang }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', handleEsc)

      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleEsc)
      }
    }
  }, [isOpen, onClose])

  if (!mounted) return null
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-zinc-900 rounded-lg max-w-[80vw] max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button onClick={onClose} className="text-gray-100 hover:text-white">
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-100 mb-6 whitespace-pre-wrap text-lg">
            {project.contentDescription.find(desc => desc[lang])?.[lang]}
          </p>
          {project.contentType === 'video' ? (
            <video width="80%" height="auto" controls preload="auto" className='mx-auto' >
              <source src={project.content[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={project.type === 'APP' ? 3 : 1}
              navigation
              centeredSlides={true}
              pagination={{ clickable: true }}
            >
              {project.content.map((image, index) => (

                <SwiperSlide key={index}  >
                  <Image src={image} alt={`${project.title} - Image ${index + 1}`}
                    width={project.type === 'APP' ? 320 : 1200}
                    height={0}
                    objectFit="cover"
                    // layout="fill"
                    priority
                    quality={100}
                    style={{ width: project.type === 'APP' ? '320px' : '90%', height: 'auto', objectFit: 'contain' , margin:'0 auto'}}
                  />
                 
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  )
}

