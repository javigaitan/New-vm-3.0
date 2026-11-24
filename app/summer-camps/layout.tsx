import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Summer camps de idiomas para jóvenes",
  description:
    "Campamentos de verano para aprender idiomas en el extranjero: clases, actividades y excursiones con supervisión y alojamiento incluidos.",
  alternates: { canonical: "/summer-camps" },
  openGraph: {
    title: "Summer camps de idiomas para jóvenes | Vaga-Mundo",
    description:
      "Campamentos de verano para aprender idiomas en el extranjero: clases, actividades y excursiones con supervisión y alojamiento incluidos.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/summer-camps",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
