import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Viajes grupales de estudio e idiomas",
  description:
    "Viajes grupales para estudiantes y colegios: cursos de idiomas, actividades culturales y acompañamiento de Vaga-Mundo en todo el viaje.",
  alternates: { canonical: "/viajes-grupales" },
  openGraph: {
    title: "Viajes grupales de estudio e idiomas | Vaga-Mundo",
    description:
      "Viajes grupales para estudiantes y colegios: cursos de idiomas, actividades culturales y acompañamiento de Vaga-Mundo en todo el viaje.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/viajes-grupales",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
