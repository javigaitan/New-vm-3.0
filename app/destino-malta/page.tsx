"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ServiciosNew } from "@/components/servicios-new"
import { useEffect } from "react"
import { FaqSection } from "@/components/faq-malta"


export default function DestinoMaltaPage() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default

        ScrollReveal().reveal(".banner-title", {
          delay: 300,
          distance: "50px",
          duration: 1000,
          easing: "ease-in-out",
          origin: "bottom",
          reset: true,
        })
      }
    }

    initScrollReveal()
  }, [])

  useEffect(() => {
  const scriptId = "hubspot-form-script"

  // evitar duplicados
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script")
    script.id = scriptId
    script.src = "https://js-eu1.hsforms.net/forms/embed/26265942.js"
    script.defer = true

    document.body.appendChild(script)
  }
}, [])

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        {/* Banner Section */}
<section className="relative h-[300px] md:h-[380px] lg:h-[420px] xl:h-[600px] overflow-hidden rounded-b-[50px]">
            <img
            src="/malta-scenic-landscape-banner.jpg"
            alt="Banner de Malta"
            className="h-full w-full object-cover rounded-b-[50px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-8 lg:bottom-32 lg:left-12">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              <span className="inline-flex items-center gap-3">
                {" Malta: vive en Europa, aprende inglés y disfruta de una vida junto al Mediterráneo"}
                
              </span>
         </h1>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-primary-vio md:text-5xl text-center">Exploremos Malta</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
              {/* Map on the left */}
              <div className="w-full lg:w-1/2">
                <img src="/images/maltamaps.png" alt="Mapa de Malta" className="w-full h-auto" />
              </div>

              {/* Cities column on the right */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/stjulians-malta.jpg" alt="St. Julian's" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">{"St. Julian's"}</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/valletta-malta.jpg" alt="Valletta" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Valletta</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/sliema-malta.jpg" alt="Sliema" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Sliema</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Malta */}
        <section className="py-16 md:py-24 bg-primary-vio">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl text-center">
              ¿Por qué estudiar en Malta?
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
            <p className="text-white leading-relaxed text-xl">
    <strong>Sol y calidad de vida:</strong> De mayo a octubre, disfruta de días largos, clima cálido y vida al aire libre. Vive la experiencia europea sin renunciar al sol y al Mediterráneo.

  </p>
</div>

<div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed text-xl">
    <strong>Inglés en el mundo real:</strong> Malta es un país bilingüe. Practica inglés todos los días, dentro y fuera del aula, en un entorno internacional donde aprender se convierte en parte de tu vida.

  </p>
</div>

<div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed text-xl">
    <strong>Tu base en Europa:</strong> Vive en el corazón del Mediterráneo y aprovecha la conexión de Malta con Italia y otros destinos europeos para descubrir nuevos países durante tu experiencia.
  </p>
</div>

<div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed text-xl">
    <strong>Una comunidad global:</strong> Conocé personas de los cinco continentes. Malta reúne estudiantes, viajeros y jóvenes profesionales de todo el mundo en una comunidad verdaderamente internacional.

  </p>
                  </div>
                </div>
              </div>

              {/* Right side - Diagonal images */}
              <div className="w-full lg:w-1/2 relative h-[500px]">
                {/* Top-right image */}
                <div className="absolute top-0 right-0 w-72 rounded-2xl overflow-hidden">
                  <img src="/images/ventanamalta.png" alt="Ventana Malta" className="w-full h-auto" />
                </div>

                {/* Bottom-left image */}
                <div className="absolute bottom-0 left-0 w-72 rounded-2xl overflow-hidden">
                  <img src="/images/palmeramalta.png" alt="Palmera Malta" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
                <FaqSection />
        

         <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
¿Quieres empezar tu experiencia en Malta?      </h1>

<h2 className="text-2xl md:text-3xl lg:text-3xl  leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
Dejanos tus datos y recibe una propuesta personalizada para tu viaje en menos de 24 horas.
    </h2>

        <section className="min-h-[60vh] py-16">
        <div className="container mx-auto max-w-2xl px-4">
    <div
  className="hs-form-frame"
  data-region="eu1"
  data-form-id="57c12db7-0310-4d80-8970-43d5ef356664"
  data-portal-id="26265942"
/>
        </div>
      </section>

      

      </main>
      <Footer />
    </>
  )
}
