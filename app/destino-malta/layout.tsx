import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar inglés y trabajar en Malta",
  description:
    "Aprende inglés en Malta y vive junto al Mediterráneo. Cursos, programas de estudio y trabajo, alojamiento y asesoría de Vaga-Mundo.",
  alternates: { canonical: "/destino-malta" },
  openGraph: {
    title: "Estudiar inglés y trabajar en Malta | Vaga-Mundo",
    description:
      "Aprende inglés en Malta y vive junto al Mediterráneo. Cursos, programas de estudio y trabajo, alojamiento y asesoría de Vaga-Mundo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/destino-malta",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
