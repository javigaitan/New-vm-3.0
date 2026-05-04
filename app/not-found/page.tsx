import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-6xl font-bold text-primary-vio md:text-8xl">404</h1>
              <h2 className="mb-4 text-3xl font-bold text-primary-vio md:text-4xl">Página no encontrada</h2>
              <p className="mb-8 text-lg text-text">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
              <Button
                asChild
                size="lg"
                className="bg-secondary-tur hover:bg-secondary-tur/90 text-primary-vio font-bold"
              >
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
