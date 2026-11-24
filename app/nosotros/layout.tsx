import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes somos: agencia con sede en Dublín",
  description:
    "Conoce al equipo de Vaga-Mundo: asesores con sede en Dublín que ya acompañaron a miles de estudiantes a estudiar y trabajar en Europa.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Quiénes somos: agencia con sede en Dublín | Vaga-Mundo",
    description:
      "Conoce al equipo de Vaga-Mundo: asesores con sede en Dublín que ya acompañaron a miles de estudiantes a estudiar y trabajar en Europa.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/nosotros",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
