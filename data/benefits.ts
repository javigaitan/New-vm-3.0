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
  
]
