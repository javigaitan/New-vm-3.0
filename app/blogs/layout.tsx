import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog: guías para estudiar y trabajar en el exterior",
  description:
    "Consejos, guías y experiencias reales sobre visados, costos, ciudades y vida diaria para estudiar y trabajar en Irlanda y otros destinos.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blog: guías para estudiar y trabajar en el exterior | Vaga-Mundo",
    description:
      "Consejos, guías y experiencias reales sobre visados, costos, ciudades y vida diaria para estudiar y trabajar en Irlanda y otros destinos.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/blogs",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
