"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  quote: string
  author: string
}

// TODO: reemplazar por los testimonios reales (podés sacarlos de Google Reviews)
const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Fantástico... Nos ayudaron con todo antes del viaje, incluso los pasajes. A mi llegada tuve un inconveniente y no tuvieron ningún problema en solucionármelo en el momento. La verdad, los recomiendo.",
    author: "Marcos Muñoz",
  },
  {
    quote:
      "El proceso fue muy claro desde el primer contacto. Me acompañaron en cada paso, desde la visa hasta conseguir alojamiento. Súper recomendable si estás pensando en viajar.",
    author: "Julieta Fernández",
  },
  {
    quote:
      "Excelente atención y seguimiento constante. Gracias a ellos conseguí trabajo a las pocas semanas de llegar. Todo el equipo muy predispuesto a ayudar.",
    author: "Lucas Pereyra",
  },
]

export function TestimonialsCarousel({
  title = "Ellos ya dieron el paso",
  rating = "5.0",
  testimonials = defaultTestimonials,
  logoSrc = "/images/vaga-mundo-badge.png",
}: {
  title?: string
  rating?: string
  testimonials?: Testimonial[]
  logoSrc?: string
}) {
  const [index, setIndex] = useState(0)

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[index]

  return (
    <section className="relative bg-slate-100 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1f97ab] mb-10 md:mb-14 uppercase">{title}</h2>

        <div className="relative flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Testimonio anterior"
            className="shrink-0 text-[#1f97ab] hover:text-[#177a8a] transition-colors"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-10 flex-1">
            {/* Badge circular con logo + rating */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#1f97ab] flex items-center justify-center overflow-hidden">
                {/* Reemplazar por <img src={logoSrc} ... /> con el logo real */}
                <span className="text-white text-xs font-bold text-center px-2 uppercase">Vaga Mundo</span>
              </div>
              <div className="absolute -bottom-1 -right-1 md:-right-3 bg-[#F7E95E] rounded-xl px-3 py-1.5 shadow-md">
                <span className="text-[#1f97ab] font-extrabold text-lg">{rating}</span>
              </div>
            </div>

            {/* Texto */}
            <div className="text-center sm:text-left">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">{current.quote}</p>
              <p className="mt-6 font-bold text-[#1f97ab]">{current.author}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Siguiente testimonio"
            className="shrink-0 text-[#1f97ab] hover:text-[#177a8a] transition-colors"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#1f97ab]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}