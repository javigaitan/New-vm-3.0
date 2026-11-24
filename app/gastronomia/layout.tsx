import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gastronomía en tu destino de estudios",
  description:
    "Descubre la gastronomía de los destinos donde puedes estudiar con Vaga-Mundo: platos típicos, costumbres y consejos para estudiantes.",
  alternates: { canonical: "/gastronomia" },
  openGraph: {
    title: "Gastronomía en tu destino de estudios | Vaga-Mundo",
    description:
      "Descubre la gastronomía de los destinos donde puedes estudiar con Vaga-Mundo: platos típicos, costumbres y consejos para estudiantes.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/gastronomia",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
