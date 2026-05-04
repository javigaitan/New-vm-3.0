import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function GraciasFormularioPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-secondary-tur/10 p-6">
                  <CheckCircle className="h-16 w-16 text-secondary-tur" />
                </div>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-primary-vio md:text-5xl">¡Gracias por contactarnos!</h1>

              <p className="mb-8 text-lg text-text">
                Hemos recibido tu solicitud correctamente. Nuestro equipo se pondrá en contacto contigo en las próximas
                24-48 horas para brindarte toda la información que necesitas.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-tur hover:bg-secondary-tur/90 text-primary-vio font-bold"
                >
                  <Link href="/">Volver al inicio</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/blogs">Leer nuestro blog</Link>
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
