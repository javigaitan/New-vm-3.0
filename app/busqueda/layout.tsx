import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Encuentra tu programa ideal",
  description:
    "Busca programas de estudio en el extranjero por destino, duración y tipo de curso, y recibe una propuesta a medida de Vaga-Mundo.",
  alternates: { canonical: "/busqueda" },
  openGraph: {
    title: "Encuentra tu programa ideal | Vaga-Mundo",
    description:
      "Busca programas de estudio en el extranjero por destino, duración y tipo de curso, y recibe una propuesta a medida de Vaga-Mundo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/busqueda",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
