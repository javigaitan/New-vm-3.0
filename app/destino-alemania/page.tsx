"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ServiciosAlemania } from "@/components/servicios-alemania"
import { useEffect } from "react"

export default function DestinoAlemaniaPage() {
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
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full rounded-b-[50px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/alemania-scenic-banner.jpg"
              alt="Banner de Alemania"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-8 lg:bottom-32 lg:left-12">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              <span className="inline-flex items-center gap-3">
                {"Bienvenido a Alemania"}
                <img
                  src="/images/BanderaAlemania.svg"
                  alt="Bandera de Alemania"
                  className="inline-block h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
                />
              </span>
              <br />
              {"corazón de Europa"}
            </h1>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-primary-vio md:text-5xl text-center">Exploremos Alemania</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
              <div className="w-full lg:w-1/2">
                <img src="/images/alemania-20-282-29.png" alt="Mapa de Alemania" className="w-full h-auto" />
              </div>

              {/* Cities column on the right */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/hamburgo-alemania.jpg" alt="Hamburgo" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Hamburgo</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/berlin-alemania.jpg" alt="Berlín" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">{"Berlín"}</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/munich-alemania.jpg" alt="Munich" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Munich</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Alemania */}
        <section className="py-16 md:py-24 bg-primary-vio">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl text-center">
              {"¿Por qué elegirlo como destino?"}
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Su ubicación estratégica en Europa te permitirá viajar fácilmente a países vecinos como Francia,
                      Suiza, Países Bajos y Austria en pocas horas.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Es un destino multicultural con ciudades llenas de estudiantes y profesionales de todo el mundo,
                      combinando modernidad con un legado histórico único.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Aunque el alemán es oficial, muchas personas hablan inglés, facilitando la comunicación mientras
                      aprendes un nuevo idioma.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Alemania ofrece una excelente calidad de vida, destacándose por su seguridad, eficiencia,
                      transporte de primer nivel y una economía sólida.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Alemania collage */}
              <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
                <img
                  src="/images/alemania-202.png"
                  alt="Collage de Alemania"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
        Solicitá tu cotización
      </h1>

        <section className="min-h-[60vh] py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <div
  className="hs-form-frame"
  data-region="eu1"
  data-form-id="a81f09e3-bc09-46eb-abf4-b50ec25b4e09"
  data-portal-id="26265942"
/>
        </div>
      </section>

      </main>
      <Footer />
    </>
  )
}
