import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function GastronomiaPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <section className="bg-primary-vio py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Gastronomía</h1>
              <p className="text-lg text-white/90">Descubre la cultura culinaria de tus destinos de estudio</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <p className="text-lg text-text">
                La gastronomía es una parte fundamental de la experiencia cultural al estudiar en el extranjero.
                Descubre los sabores de Irlanda, Malta y España.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
