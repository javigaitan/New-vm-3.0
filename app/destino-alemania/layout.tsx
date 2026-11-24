import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar alemán y carreras en Alemania",
  description:
    "Estudia alemán o una carrera universitaria en Alemania. Te asesoramos con cursos, admisión, visado y alojamiento para tu experiencia.",
  alternates: { canonical: "/destino-alemania" },
  openGraph: {
    title: "Estudiar alemán y carreras en Alemania | Vaga-Mundo",
    description:
      "Estudia alemán o una carrera universitaria en Alemania. Te asesoramos con cursos, admisión, visado y alojamiento para tu experiencia.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/destino-alemania",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
