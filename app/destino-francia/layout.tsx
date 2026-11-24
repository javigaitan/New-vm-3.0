import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar francés en Francia",
  description:
    "Aprende francés en París y otras ciudades de Francia. Cursos para todos los niveles, alojamiento y asesoría de Vaga-Mundo.",
  alternates: { canonical: "/destino-francia" },
  openGraph: {
    title: "Estudiar francés en Francia | Vaga-Mundo",
    description:
      "Aprende francés en París y otras ciudades de Francia. Cursos para todos los niveles, alojamiento y asesoría de Vaga-Mundo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/destino-francia",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
