import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomaturas en el extranjero",
  description:
    "Diplomaturas y cursos de especialización en el extranjero para potenciar tu perfil profesional. Asesoría personalizada de Vaga-Mundo.",
  alternates: { canonical: "/diplomaturas" },
  openGraph: {
    title: "Diplomaturas en el extranjero | Vaga-Mundo",
    description:
      "Diplomaturas y cursos de especialización en el extranjero para potenciar tu perfil profesional. Asesoría personalizada de Vaga-Mundo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/diplomaturas",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
