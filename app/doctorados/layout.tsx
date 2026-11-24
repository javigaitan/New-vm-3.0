import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Doctorados en Europa",
  description:
    "Información y asesoría para cursar un doctorado en universidades europeas: requisitos, admisión y opciones de financiación.",
  alternates: { canonical: "/doctorados" },
  openGraph: {
    title: "Doctorados en Europa | Vaga-Mundo",
    description:
      "Información y asesoría para cursar un doctorado en universidades europeas: requisitos, admisión y opciones de financiación.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/doctorados",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
