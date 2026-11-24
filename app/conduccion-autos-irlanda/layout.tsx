import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conducir en Irlanda: guía completa",
  description:
    "Todo sobre conducir en Irlanda: licencia, conducción por la izquierda, normas de tránsito y consejos para estudiantes internacionales.",
  alternates: { canonical: "/conduccion-autos-irlanda" },
  openGraph: {
    title: "Conducir en Irlanda: guía completa | Vaga-Mundo",
    description:
      "Todo sobre conducir en Irlanda: licencia, conducción por la izquierda, normas de tránsito y consejos para estudiantes internacionales.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/conduccion-autos-irlanda",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
