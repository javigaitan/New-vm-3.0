import type { LucideIcon } from "lucide-react"
import { CalendarCheck, Sparkles, Users } from "lucide-react"

type FactCard = {
  title: string
  description: string
  icon: LucideIcon
}

const facts: FactCard[] = [
  {
    title: "10+ Años de Experiencia",
    description:
      "Nacimos de la pasión por viajar y aprender. Durante más de una década hemos perfeccionado procesos para que tu única preocupación sea disfrutar del destino.",
    icon: CalendarCheck,
  },
  {
    title: "4,000+ Sueños Cumplidos",
    description:
      "Nuestra mejor carta de presentación son los miles de estudiantes que hoy tienen una carrera global gracias a nuestro asesoramiento personalizado.",
    icon: Sparkles,
  },
  {
    title: "Nacimos de nuestra propia historia",
    description:
      "Antes de asesorar a otros, fuimos nosotros quienes preparamos las maletas para emigrar, estudiar y trabajar fuera. Creamos este proyecto precisamente para ofrecer el acompañamiento que a nosotros nos habría gustado tener cuando empezamos.",
    icon: Users,
  },
]

export function VMFacts() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {facts.map((fact, index) => (
            <FactCardItem key={index} fact={fact} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FactCardItem({ fact }: { fact: FactCard }) {
  const Icon = fact.icon

  return (
    <div className="bg-primary-vio rounded-3xl p-8 flex flex-col hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight text-balance">{fact.title}</h3>
        <Icon className="shrink-0 w-8 h-8 text-white" strokeWidth={2} />
      </div>
      <p className="text-white/90 leading-relaxed">{fact.description}</p>
    </div>
  )
}