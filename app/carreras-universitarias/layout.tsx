import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carreras universitarias, posgrados y másters en Europa",
  description:
    "Estudia una carrera de grado, posgrado o máster en Europa. Te orientamos en la elección del programa, la admisión y la financiación.",
  alternates: { canonical: "/carreras-universitarias" },
  openGraph: {
    title: "Carreras universitarias, posgrados y másters en Europa | Vaga-Mundo",
    description:
      "Estudia una carrera de grado, posgrado o máster en Europa. Te orientamos en la elección del programa, la admisión y la financiación.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/carreras-universitarias",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
