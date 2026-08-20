"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

const defaultFaqs: FaqItem[] = [
  {
    question: "¿La visa de estudiante en Irlanda permite trabajar?",
    answer:
      "Sí. La visa de estudiante en Irlanda permite trabajar hasta 20 horas semanales durante el período de clases y tiempo completo durante las vacaciones. Esto hace posible que los estudiantes generen ingresos en euros mientras mejoran su nivel de inglés y adquieren experiencia laboral internacional.",
  },
  {
    question: "¿Cuánto se gana trabajando en Irlanda como estudiante?",
    answer:
      "El salario mínimo en Irlanda es uno de los más altos de Europa y actualmente el pago promedio por hora es de aproximadamente €14,15. Muchos estudiantes que viajan a estudiar y trabajar en Irlanda consiguen empleo en el sector servicios durante su primer mes, lo que les permite comenzar a generar ingresos rápidamente.",
  },
  {
    question: "¿Es posible trabajar en Irlanda sin saber inglés?",
    answer:
      "Sí, no se exige un nivel mínimo de inglés para aplicar a la visa de estudiante en Irlanda. Al llegar, la escuela realiza un examen de nivel para ubicarte en el curso adecuado. Aunque es posible encontrar trabajo con un nivel básico, cuanto mejor sea tu inglés, mayores serán tus oportunidades laborales y salariales.",
  },
  {
    question: "¿Cuánto dura la visa de estudiante en Irlanda?",
    answer:
      "La visa de estudio en Irlanda tiene una duración aproximada de 8 meses, equivalentes a 33 semanas, y puede renovarse hasta completar un máximo de 2 años estudiando cursos de inglés. También existen opciones académicas universitarias que permiten extender la permanencia en el país.",
  },
  {
    question: "¿Cuándo puedo comenzar mi curso de inglés en Irlanda?",
    answer:
      "Puedes comenzar tu curso de inglés en Irlanda en cualquier mes del año, ya que los programas son cíclicos y las escuelas inician nuevos módulos todos los lunes. Esto brinda flexibilidad para planificar tu viaje según tus objetivos personales y profesionales.",
  },
  {
    question: "¿Dónde me hospedo al llegar a Irlanda?",
    answer:
      "Al llegar a Irlanda puedes hospedarte en residencias estudiantiles mientras buscas alojamiento fijo. Contar con una dirección válida desde el primer día facilita trámites importantes como el registro de visa, la obtención del número PPSN y la apertura de una cuenta bancaria, lo que acelera tu proceso de instalación en el país. Vaga Mundo cuenta con residencia estudiantil en Dublín, consulta con tu asesor esta opción.",
  },
  {
    question: "¿Recibo apoyo para conseguir trabajo en Irlanda?",
    answer:
      "Sí, contarás con acompañamiento antes y después de tu viaje. Esto incluye asesoría previa, soporte en destino, acceso a grupos exclusivos donde se comparten ofertas laborales y orientación para mejorar tu currículum, optimizar tu perfil de LinkedIn y prepararte para entrevistas. El objetivo es que no viajes solo, sino con respaldo real durante todo tu proceso de estudio y trabajo en Irlanda.",
  },
]

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