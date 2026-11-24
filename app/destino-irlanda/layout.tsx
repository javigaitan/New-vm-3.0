import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar inglés y trabajar en Irlanda",
  description:
    "Estudia inglés y trabaja en Irlanda con Vaga-Mundo: cursos en Dublín y otras ciudades, visado de estudiante, alojamiento y empleo.",
  alternates: { canonical: "/destino-irlanda" },
  openGraph: {
    title: "Estudiar inglés y trabajar en Irlanda | Vaga-Mundo",
    description:
      "Estudia inglés y trabaja en Irlanda con Vaga-Mundo: cursos en Dublín y otras ciudades, visado de estudiante, alojamiento y empleo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/destino-irlanda",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
