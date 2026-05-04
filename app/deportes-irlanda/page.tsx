import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function DeportesIrlandaPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="text-sm font-semibold text-secondary-tur">Cultura</span>
                <h1 className="mt-2 mb-4 text-4xl font-bold text-primary-vio md:text-5xl">
                  Deportes en Irlanda: Más allá del fútbol
                </h1>
                <p className="text-text">Publicado el 15 de Febrero, 2024</p>
              </div>

              <img
                src="/gaelic-football-hurling.jpg"
                alt="Deportes gaélicos"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  Irlanda tiene una rica tradición deportiva que va mucho más allá del fútbol. Descubre los deportes
                  gaélicos y la pasión que generan.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Deportes gaélicos</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>
                    <strong>Gaelic Football</strong> - Similar al fútbol pero con manos permitidas
                  </li>
                  <li>
                    <strong>Hurling</strong> - Uno de los deportes de campo más rápidos del mundo
                  </li>
                  <li>
                    <strong>Camogie</strong> - Versión femenina del hurling
                  </li>
                  <li>
                    <strong>Gaelic Handball</strong> - Deporte de pelota tradicional
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Rugby</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  El rugby es inmensamente popular en Irlanda. El equipo nacional irlandés es uno de los mejores del
                  mundo y los partidos en el Aviva Stadium son experiencias inolvidables.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Participa</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Como estudiante, puedes unirte a clubes deportivos locales o equipos universitarios. Es una excelente
                  forma de conocer gente y sumergirte en la cultura irlandesa.
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
