import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar inglés en Reino Unido",
  description:
    "Estudia inglés en Londres y otras ciudades del Reino Unido. Cursos para todos los niveles, alojamiento y asesoría personalizada.",
  alternates: { canonical: "/destino-uk" },
  openGraph: {
    title: "Estudiar inglés en Reino Unido | Vaga-Mundo",
    description:
      "Estudia inglés en Londres y otras ciudades del Reino Unido. Cursos para todos los niveles, alojamiento y asesoría personalizada.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/destino-uk",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
