import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cómo estudiar y trabajar en Irlanda: guía",
  description:
    "Guía paso a paso para estudiar y trabajar en Irlanda: requisitos del visado, horas de trabajo permitidas, costos y cómo empezar.",
  alternates: { canonical: "/estudia-trabaja-irlanda" },
  openGraph: {
    title: "Cómo estudiar y trabajar en Irlanda: guía | Vaga-Mundo",
    description:
      "Guía paso a paso para estudiar y trabajar en Irlanda: requisitos del visado, horas de trabajo permitidas, costos y cómo empezar.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/estudia-trabaja-irlanda",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
