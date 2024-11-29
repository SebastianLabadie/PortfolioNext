import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-white">Testimonial</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                The <span className="text-gray-300">design quality</span>, flexibility, documentation and
                support are all absolutely <span className="text-yellow-500">excellent</span>. I buy the Avada
                theme for all my clients, knowing that whatever they
                require, Avada will be able to deliver.
              </p>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">Josef Sharon</h3>
                <p className="text-yellow-500">CEO, Omisoft</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-yellow-400 rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Testimonial"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

