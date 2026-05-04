import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DoctoradosPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <section className="bg-primary-vio py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Doctorados</h1>
              <p className="text-lg text-white/90">Alcanza el máximo nivel académico con un doctorado internacional</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-primary-vio">Programas de Doctorado</h2>
                <p className="text-lg text-text">
                  Te ayudamos a acceder a programas de doctorado en universidades de prestigio internacional. Desde la
                  selección del programa hasta la solicitud de becas.
                </p>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-tur hover:bg-secondary-tur/90 text-primary-vio font-bold"
                >
                  <Link href="/contacto">Solicita asesoría</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
