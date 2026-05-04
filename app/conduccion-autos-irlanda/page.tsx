import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function ConduccionAutosPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="text-sm font-semibold text-secondary-tur">Guías</span>
                <h1 className="mt-2 mb-4 text-4xl font-bold text-primary-vio md:text-5xl">
                  Conducción de autos en Irlanda: Guía completa
                </h1>
                <p className="text-text">Publicado el 20 de Febrero, 2024</p>
              </div>

              <img
                src="/dublin-city-traffic-ireland.jpg"
                alt="Tráfico en Dublín"
                className="mb-8 w-full rounded-lg object-cover h-96"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-text mb-4">
                  Conducir en Irlanda puede ser una experiencia única. Aquí te explicamos todo lo que necesitas saber.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Lo básico</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Se conduce por el lado izquierdo de la carretera</li>
                  <li>El volante está en el lado derecho del vehículo</li>
                  <li>Límites de velocidad: 50 km/h en ciudad, 80-100 km/h en carretera, 120 km/h en autopista</li>
                  <li>Rotondas son muy comunes</li>
                  <li>Señalización en inglés e irlandés</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Licencia de conducir</h2>

                <p className="text-lg leading-relaxed text-text mb-4">
                  Si tienes licencia de la UE, puedes conducir directamente. Para licencias de otros países, puedes
                  conducir durante 12 meses con tu licencia internacional. Después necesitarás obtener una licencia
                  irlandesa.
                </p>

                <h2 className="text-2xl font-bold text-primary-vio mt-8 mb-4">Consejos importantes</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-text">
                  <li>Practica en áreas tranquilas antes de aventurarte en ciudades</li>
                  <li>Ten especial cuidado en rotondas</li>
                  <li>Las carreteras rurales pueden ser estrechas</li>
                  <li>El clima puede ser impredecible</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
