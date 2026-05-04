import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IrlandaDestinoPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="text-sm font-semibold text-secondary-tur">Destinos</span>
                <h1 className="mt-2 mb-4 text-4xl font-bold text-primary-vio md:text-5xl">
                  Irlanda: El destino perfecto para estudiar inglés
                </h1>
                <p className="text-text">Publicado el 15 de Marzo, 2024</p>
              </div>

              <img
                src="/dublin-ireland-cityscape.jpg"
                alt="Dublín, Irlanda"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  Irlanda se ha posicionado como uno de los destinos más atractivos para estudiantes internacionales que
                  desean aprender inglés y vivir una experiencia cultural única en Europa.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">
                  ¿Por qué elegir Irlanda para estudiar inglés?
                </h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  La isla esmeralda ofrece una combinación perfecta de educación de calidad, cultura vibrante, paisajes
                  impresionantes y oportunidades laborales. Las escuelas irlandesas son reconocidas mundialmente por su
                  excelencia académica y metodologías innovadoras.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Ventajas de estudiar en Irlanda</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Permiso para trabajar mientras estudias (20 horas semanales)</li>
                  <li>Educación de alta calidad con escuelas acreditadas</li>
                  <li>Sociedad multicultural y acogedora</li>
                  <li>Ubicación estratégica para viajar por Europa</li>
                  <li>Paisajes naturales impresionantes</li>
                  <li>Oportunidades de networking internacional</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Principales ciudades para estudiar</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Dublín, Cork y Galway son las ciudades más populares entre estudiantes internacionales. Cada una
                  ofrece un ambiente único, desde la vibrante vida urbana de Dublín hasta el encanto costero de Galway.
                </p>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <h3 className="mb-4 text-xl font-bold text-primary-vio">¿Listo para estudiar en Irlanda?</h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-tur hover:bg-secondary-tur/90 text-primary-vio font-bold"
                >
                  <Link href="/contacto">Solicita información</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
