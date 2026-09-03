"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

const defaultFaqs: FaqItem[] = [
  {
    question: "¿La visa de estudiante en Malta permite trabajar?",
    answer:
      "Sí. Los estudiantes internacionales que cumplen con los requisitos establecidos pueden trabajar hasta 20 horas semanales durante sus estudios. Esto permite complementar la experiencia académica con una experiencia laboral internacional y generar ingresos mientras vives en Malta.",
  },

  {
    question: "¿Cuánto se puede ganar trabajando en Malta como estudiante?",
    answer:
      "El salario depende del tipo de empleo, la experiencia y el sector. Muchos estudiantes encuentran oportunidades principalmente en áreas como hostelería, restauración, turismo y servicios. Tu nivel de inglés también puede influir directamente en el tipo de oportunidades a las que puedes acceder.",
  },

  {
    question: "¿Es posible trabajar en Malta sin saber inglés?",
    answer:
      "Es posible encontrar algunas oportunidades con un nivel básico, especialmente en determinados puestos del sector servicios. Sin embargo, cuanto mejor sea tu nivel de inglés, mayores serán tus posibilidades de acceder a más ofertas y mejores condiciones laborales.",
  },

  {
    question: "¿Cuánto tiempo puedo estudiar inglés en Malta?",
    answer:
      "La duración de tu estancia dependerá del programa que elijas y de las condiciones de tu permiso de estancia. Malta ofrece cursos de inglés de diferentes duraciones, desde programas cortos hasta estancias de varios meses, por lo que puedes elegir la opción que mejor se adapte a tus objetivos.",
  },

  {
    question: "¿Cuándo puedo comenzar mi curso de inglés en Malta?",
    answer:
      "Puedes comenzar tu curso durante prácticamente todo el año. Las escuelas de Malta ofrecen diferentes fechas de inicio y programas con distintas duraciones, lo que permite organizar tu viaje de acuerdo con tu disponibilidad y objetivos.",
  },

  {
    question: "¿Dónde me hospedo al llegar a Malta?",
    answer:
      "Puedes elegir entre diferentes alternativas de alojamiento, como residencias estudiantiles, apartamentos compartidos o familias anfitrionas. Tu asesor de Vaga Mundo te ayudará a conocer las opciones disponibles y elegir la alternativa que mejor se adapte a tu presupuesto y estilo de vida.",
  },

  {
    question: "¿Recibo apoyo para conseguir trabajo en Malta?",
    answer:
      "¡Por supuesto! En Vaga Mundo te acompañamos antes de viajar y durante tu experiencia en Malta. Recibirás orientación para preparar tu CV, mejorar tu perfil profesional y afrontar entrevistas, además de información y recursos para facilitar tu búsqueda de empleo. También podrás acceder a nuestra comunidad y a información sobre oportunidades laborales disponibles en el destino. Recuerda que tu proactividad, nivel de inglés y actitud serán fundamentales para conseguir trabajo y adaptarte al mercado laboral maltés.",
  },

  {
    question: "¿Por qué estudiar inglés en Malta?",
    answer:
      "Malta combina aprendizaje de inglés, experiencia internacional y un entorno multicultural en un destino europeo. Además de estudiar, tendrás la posibilidad de conocer personas de diferentes países, disfrutar de la vida en una isla mediterránea y, cumpliendo los requisitos correspondientes, complementar tu experiencia con trabajo.",
  },

  {
    question: "¿Necesito un nivel de inglés específico para estudiar en Malta?",
    answer:
      "No necesariamente. Existen cursos para diferentes niveles, desde principiantes hasta estudiantes avanzados. Antes de comenzar, la escuela puede realizar una prueba de nivel para ubicarte en el grupo más adecuado para ti.",
  },

  {
    question: "¿Vaga Mundo me acompaña durante todo el proceso?",
    answer:
      "Sí. Nuestro acompañamiento comienza antes de tu viaje y continúa una vez que llegas a Malta. Te ayudamos con la preparación del viaje, orientación sobre documentación y alojamiento y te brindamos soporte durante tu experiencia para que puedas adaptarte con mayor facilidad al destino.",
  },
];

export function FaqSection({
  title = "Preguntas Frecuentes",
  faqs = defaultFaqs,
}: {
  title?: string
  faqs?: FaqItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="relative bg-[#eeeeee] py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-vio mb-3 uppercase">{title}</h2>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-2">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                >
                  <span className="text-lg md:text-xl font-bold text-primary-vio group-hover:text-secondari-verde transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 w-6 h-6 text-[#1f97ab] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-10">
                      <p className="text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                      <div className="w-12 h-0.5 bg-[#F7E95E] rounded-full mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}