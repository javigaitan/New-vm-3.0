import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gastronomía irlandesa: qué comer en Irlanda",
  description:
    "Platos típicos, pubs y costumbres: descubre qué comer en Irlanda y cómo es la gastronomía local para estudiantes internacionales.",
  alternates: { canonical: "/gastronomia-irlanda" },
  openGraph: {
    title: "Gastronomía irlandesa: qué comer en Irlanda | Vaga-Mundo",
    description:
      "Platos típicos, pubs y costumbres: descubre qué comer en Irlanda y cómo es la gastronomía local para estudiantes internacionales.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/gastronomia-irlanda",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
