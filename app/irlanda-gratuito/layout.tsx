import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar gratis en Irlanda: lo que necesitas saber",
  description:
    "¿Se puede estudiar gratis en Irlanda? Te contamos qué opciones existen, requisitos, becas y costos reales para estudiantes internacionales.",
  alternates: { canonical: "/irlanda-gratuito" },
  openGraph: {
    title: "Estudiar gratis en Irlanda: lo que necesitas saber | Vaga-Mundo",
    description:
      "¿Se puede estudiar gratis en Irlanda? Te contamos qué opciones existen, requisitos, becas y costos reales para estudiantes internacionales.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/irlanda-gratuito",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
