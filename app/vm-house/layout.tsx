import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VM House: alojamiento para estudiantes en Dublín",
  description:
    "VM House es el alojamiento de Vaga-Mundo en Dublín: habitaciones para estudiantes internacionales, en un entorno seguro y bien ubicado.",
  alternates: { canonical: "/vm-house" },
  openGraph: {
    title: "VM House: alojamiento para estudiantes en Dublín | Vaga-Mundo",
    description:
      "VM House es el alojamiento de Vaga-Mundo en Dublín: habitaciones para estudiantes internacionales, en un entorno seguro y bien ubicado.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/vm-house",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
