import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EstudiaTrabajaPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="text-sm font-semibold text-secondary-tur">Work & Study</span>
                <h1 className="mt-2 mb-4 text-4xl font-bold text-primary-vio md:text-5xl">
                  Cómo estudiar y trabajar en Irlanda
                </h1>
                <p className="text-text">Publicado el 10 de Marzo, 2024</p>
              </div>

              <img
                src="/students-working-in-cafe-ireland.jpg"
                alt="Estudiantes trabajando"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  Los programas Work & Study en Irlanda te permiten estudiar inglés y trabajar legalmente al mismo
                  tiempo, convirtiéndose en una de las opciones más populares entre estudiantes internacionales.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Requisitos para Work & Study</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Estar matriculado en un curso de mínimo 25 semanas</li>
                  <li>Asistencia mínima del 85% a clases</li>
                  <li>Registro en inmigración irlandesa</li>
                  <li>Seguro médico internacional</li>
                  <li>Fondos económicos suficientes</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Permiso de trabajo</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Puedes trabajar hasta 20 horas semanales durante el período de clases y 40 horas en vacaciones. Esto
                  te permite cubrir tus gastos y ganar experiencia laboral internacional.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Sectores con más oportunidades</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Hostelería y turismo</li>
                  <li>Retail y comercio</li>
                  <li>Servicios al cliente</li>
                  <li>Limpieza y mantenimiento</li>
                  <li>Tecnología (para niveles avanzados)</li>
                </ul>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <h3 className="mb-4 text-xl font-bold text-primary-vio">Comienza tu aventura Work & Study</h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-tur hover:bg-secondary-tur/90 text-primary-vio font-bold"
                >
                  <Link href="/work&study">Ver programas</Link>
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
