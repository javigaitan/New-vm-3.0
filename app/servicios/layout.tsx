import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Otros servicios para tu viaje: seguros, SIM y más",
  description:
    "Todo lo que necesitas para tu viaje: seguro médico, SIM internacional, alojamiento, traslados y otros servicios de nuestros partners.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Otros servicios para tu viaje: seguros, SIM y más | Vaga-Mundo",
    description:
      "Todo lo que necesitas para tu viaje: seguro médico, SIM internacional, alojamiento, traslados y otros servicios de nuestros partners.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/servicios",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
