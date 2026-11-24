import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Irlanda: el destino perfecto para estudiar inglés",
  description:
    "Descubre por qué Irlanda es uno de los mejores destinos para aprender inglés: calidad educativa, posibilidad de trabajar y calidad de vida.",
  alternates: { canonical: "/irlanda-el-destino-perfecto" },
  openGraph: {
    title: "Irlanda: el destino perfecto para estudiar inglés | Vaga-Mundo",
    description:
      "Descubre por qué Irlanda es uno de los mejores destinos para aprender inglés: calidad educativa, posibilidad de trabajar y calidad de vida.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/irlanda-el-destino-perfecto",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
