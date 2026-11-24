import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deportes en Irlanda: más allá del fútbol",
  description:
    "Hurling, fútbol gaélico, rugby y más: conoce los deportes que se viven en Irlanda y cómo sumarte durante tu experiencia de estudio.",
  alternates: { canonical: "/deportes-irlanda" },
  openGraph: {
    title: "Deportes en Irlanda: más allá del fútbol | Vaga-Mundo",
    description:
      "Hurling, fútbol gaélico, rugby y más: conoce los deportes que se viven en Irlanda y cómo sumarte durante tu experiencia de estudio.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/deportes-irlanda",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
