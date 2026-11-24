import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contáctanos: asesoría gratuita para estudiar afuera",
  description:
    "Escríbenos y recibe asesoría personalizada y sin costo para estudiar y trabajar en Irlanda, Malta, España, Reino Unido y más destinos.",
  alternates: { canonical: "/contactanos" },
  openGraph: {
    title: "Contáctanos: asesoría gratuita para estudiar afuera | Vaga-Mundo",
    description:
      "Escríbenos y recibe asesoría personalizada y sin costo para estudiar y trabajar en Irlanda, Malta, España, Reino Unido y más destinos.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/contactanos",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
