import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudiar en España: cursos, carreras y másters",
  description:
    "Estudia en España en tu idioma: carreras, másters, cursos de formación y programas para vivir en Europa con la asesoría de Vaga-Mundo.",
  alternates: { canonical: "/destino-espana" },
  openGraph: {
    title: "Estudiar en España: cursos, carreras y másters | Vaga-Mundo",
    description:
      "Estudia en España en tu idioma: carreras, másters, cursos de formación y programas para vivir en Europa con la asesoría de Vaga-Mundo.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/destino-espana",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
