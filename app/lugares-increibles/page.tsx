import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function LugaresIncreiblesPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="text-sm font-semibold text-secondary-tur">Turismo</span>
                <h1 className="mt-2 mb-4 text-4xl font-bold text-primary-vio md:text-5xl">
                  Los lugares más increíbles para visitar en Irlanda
                </h1>
                <p className="text-text">Publicado el 25 de Febrero, 2024</p>
              </div>

              <img
                src="/cliffs-of-moher-ireland.jpg"
                alt="Cliffs of Moher"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  Irlanda está llena de paisajes impresionantes y lugares históricos que debes visitar durante tu
                  estancia.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Destinos imprescindibles</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Cliffs of Moher - Acantilados espectaculares en la costa oeste</li>
                  <li>Giant's Causeway - Formación rocosa única (Irlanda del Norte)</li>
                  <li>Ring of Kerry - Ruta escénica impresionante</li>
                  <li>Galway - Ciudad costera vibrante</li>
                  <li>Newgrange - Monumento prehistórico más antiguo que Stonehenge</li>
                  <li>Killarney National Park - Parque natural con lagos y montañas</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Consejos para viajar</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Aprovecha los fines de semana largos y vacaciones para explorar. El transporte público conecta las
                  principales ciudades, y muchos estudiantes organizan viajes grupales para compartir gastos.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
