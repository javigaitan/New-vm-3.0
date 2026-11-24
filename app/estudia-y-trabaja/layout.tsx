import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estudia y trabaja en el exterior: Irlanda y Malta",
  description:
    "Estudia inglés y trabaja medio tiempo para cubrir tus gastos. Te ayudamos con escuela, visado, alojamiento y empleo. Sin límite de edad.",
  alternates: { canonical: "/estudia-y-trabaja" },
  openGraph: {
    title: "Estudia y trabaja en el exterior: Irlanda y Malta | Vaga-Mundo",
    description:
      "Estudia inglés y trabaja medio tiempo para cubrir tus gastos. Te ayudamos con escuela, visado, alojamiento y empleo. Sin límite de edad.",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vaga-Mundo" }],
    url: "/estudia-y-trabaja",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
