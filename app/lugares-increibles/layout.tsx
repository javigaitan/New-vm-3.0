import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Los lugares más increíbles para visitar en Irlanda",
  description:
    "Acantilados, castillos y ciudades con encanto: los lugares imperdibles de Irlanda para recorrer durante tu experiencia de estudio.",
  alternates: { canonical: "/lugares-increibles" },
  openGraph: {
    title: "Los lugares más increíbles para visitar en Irlanda | Vaga-Mundo",
    description:
      "Acantilados, castillos y ciudades con encanto: los lugares imperdibles de Irlanda para recorrer durante tu experiencia de estudio.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/lugares-increibles",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
