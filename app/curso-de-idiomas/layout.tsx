import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cursos de idiomas en el extranjero",
  description:
    "Cursos de inglés, francés, alemán y español en escuelas acreditadas de Irlanda, Malta, Reino Unido, Francia, Alemania y España.",
  alternates: { canonical: "/curso-de-idiomas" },
  openGraph: {
    title: "Cursos de idiomas en el extranjero | Vaga-Mundo",
    description:
      "Cursos de inglés, francés, alemán y español en escuelas acreditadas de Irlanda, Malta, Reino Unido, Francia, Alemania y España.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/curso-de-idiomas",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
