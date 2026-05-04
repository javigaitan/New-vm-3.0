import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function GastronomiaIrlandaPage() {
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
                  Gastronomía irlandesa: Qué comer en Irlanda
                </h1>
                <p className="text-text">Publicado el 1 de Marzo, 2024</p>
              </div>

              <img
                src="/irish-food-pub-meal.jpg"
                alt="Comida irlandesa"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  La gastronomía irlandesa es más que fish and chips. Descubre los platos tradicionales y la cultura
                  culinaria que te espera en la isla esmeralda.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Platos tradicionales imperdibles</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Irish Stew - Estofado tradicional de cordero</li>
                  <li>Boxty - Pancakes de papa irlandeses</li>
                  <li>Colcannon - Puré de papas con col</li>
                  <li>Full Irish Breakfast - Desayuno completo irlandés</li>
                  <li>Seafood Chowder - Sopa cremosa de mariscos</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Cultura de los pubs</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Los pubs irlandeses son mucho más que lugares para beber. Son centros sociales donde podrás disfrutar
                  de música en vivo, conocer locales y probar comida tradicional en un ambiente acogedor.
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
