import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IrlandaGratuitoPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="text-sm font-semibold text-secondary-tur">Educación</span>
                <h1 className="mt-2 mb-4 text-4xl font-bold text-primary-vio md:text-5xl">
                  Estudia gratis en Irlanda: Todo lo que necesitas saber
                </h1>
                <p className="text-text">Publicado el 5 de Marzo, 2024</p>
              </div>

              <img
                src="/university-campus-ireland.jpg"
                alt="Campus universitario"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  ¿Sabías que es posible estudiar gratis o con ayudas en Irlanda? Existen diversas opciones de becas y
                  programas gratuitos para estudiantes internacionales.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Free Fees Initiative</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Este programa gubernamental cubre las tasas de matrícula para estudiantes de la UE y algunos casos
                  especiales. Si tienes ciudadanía europea o residencia en Irlanda por 3 años, podrías calificar.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Becas disponibles</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Government of Ireland International Education Scholarships</li>
                  <li>Trinity College Dublin Scholarships</li>
                  <li>University College Dublin Global Excellence Scholarships</li>
                  <li>Fulbright Scholarships</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Trabajar mientras estudias</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Una forma de cubrir tus gastos es combinando tus estudios con trabajo part-time. El programa Work &
                  Study te permite trabajar legalmente y así financiar tu educación.
                </p>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <h3 className="mb-4 text-xl font-bold text-primary-vio">¿Quieres más información?</h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-tur hover:bg-secondary-tur/90 text-primary-vio font-bold"
                >
                  <Link href="/contacto">Contacta con nosotros</Link>
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
