import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Financia tu viaje de estudios al exterior",
  description:
    "Descubre cómo ahorrar y financiar tu programa de estudios en el extranjero con planes de pago flexibles y la ayuda de Vaga-Mundo.",
  alternates: { canonical: "/ahorro" },
  openGraph: {
    title: "Financia tu viaje de estudios al exterior | Vaga-Mundo",
    description:
      "Descubre cómo ahorrar y financiar tu programa de estudios en el extranjero con planes de pago flexibles y la ayuda de Vaga-Mundo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/ahorro",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
