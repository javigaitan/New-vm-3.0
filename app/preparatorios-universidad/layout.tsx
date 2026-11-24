import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preparatorios para la universidad en el extranjero",
  description:
    "Programas preparatorios para ingresar a universidades europeas: idioma académico, requisitos y acompañamiento hasta tu admisión.",
  alternates: { canonical: "/preparatorios-universidad" },
  openGraph: {
    title: "Preparatorios para la universidad en el extranjero | Vaga-Mundo",
    description:
      "Programas preparatorios para ingresar a universidades europeas: idioma académico, requisitos y acompañamiento hasta tu admisión.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/preparatorios-universidad",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
