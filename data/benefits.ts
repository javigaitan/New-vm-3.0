import { StaticImageData } from "next/image"

import beneficioImg from "./benefits/beneficiosdestino.png"
import Equipodestino from "./benefits/equipoendestino.png"
import Equipoapoyo from "./benefits/emocional.png"
import Talleres from "./benefits/tallereslab.jpg"





export interface Benefit {
  id: string
  title: string
  description: string
  image: string | StaticImageData
  href: string
}

export const benefits: Benefit[] = [
  {
    id: "talleres",
    title: "Workshop Laborales",
    description: "Talleres especializados que te preparan para una mejor integración laboral en Irlanda.",
    image: Talleres,
    href: "",
  },
  {
    id: "destino",
    title: "Equipo en Destino",
    description: "Tenemos equipo en destino para tus consultas o soporte en Irlanda.",
    image: Equipodestino,
    href: "",
  },
  {
    id: "support",
    title: "Acompañamiento Emocional",
    description: "Encuentros psicológicos que te dan las herramientas para viajar.",
    image: Equipoapoyo,
    href: "",
  },
  {
    id: "beneficios",
    title: "Beneficios con la comunidad VM",
    description: "Aprovecha los diferentes descuentos que tenemos para ofrecerte por ser parte de nuestra comunidad",
    image: beneficioImg,
    href: "",
  },

  {
    id: "alojamiento",
    title: "Alojamiento Garantizado",
    description: "Llega a Irlanda a VM House residencia estudiantil de Vaga Mundo",
    image: beneficioImg,
    href: "",
  },

  {
    id: "ingles",
    title: "Inglés pre-viaje sin costo",
    description: "Desarrolla tu fluidez con clases grupales y gana confianza en el idioma antes de llegar a tu destino",
    image: beneficioImg,
    href: "",
  },

  {
    id: "comunidad",
    title: "Comunidad Activa",
    description: "Únete desde el primer día a una red dinámica de más de 4,000 estudiantes que se encuentran realizando su experiencia académica internacional",
    image: beneficioImg,
    href: "",
  },

  {
    id: "precio",
    title: "Mismo precio garantizado",
    description: "Viaja, estudia y trabaja con el sistema Vaga-Mundo sin costos adicionales. Respaldado por su trayectoria e importante red de escuelas aliadas en el exterior, Vaga-Mundo es financiado directamente por las instituciones educativas y no por los estudiantes",
    image: beneficioImg,
    href: "",
  },
  
]
