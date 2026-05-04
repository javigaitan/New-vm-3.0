"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ServiciosFrancia } from "@/components/servicios-francia"
import { useEffect } from "react"

export default function DestinoFranciaPage() {
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

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        {/* Banner Section */}
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full rounded-b-[50px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/francia-hd.jpg"
              alt="Banner de Francia"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-8 lg:bottom-32 lg:left-12">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              <span className="inline-flex items-center gap-3">
                {"¡Bienvenidos a Francia"}
                <img
                  src="/images/BanderaFrancia.svg"
                  alt="Bandera de Francia"
                  className="inline-block h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
                />
              </span>
              <br />
              donde el arte y la cultura inspiran tu futuro!
            </h1>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-primary-vio md:text-5xl text-center">Exploremos Francia</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
              <div className="w-full lg:w-1/2">
                <img src="/images/francia.png" alt="Mapa de Francia" className="w-full h-auto" />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/par-s-francia-torre-eiffel-ciudad.jpg" alt="París" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">{"París"}</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/montpellier-francia-ciudad.jpg" alt="Montpellier" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Montpellier</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/lyon-francia-ciudad.jpg" alt="Lyon" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Lyon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Francia */}
        <section className="py-16 md:py-24 bg-primary-vio">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl text-center">
              {"¿Por qué es el destino más elegido?"}
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Su ubicación en Europa te permite viajar fácilmente a otros países y vivir una experiencia
                      internacional completa.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Ofrece un sistema educativo de prestigio mundial, con instituciones reconocidas y programas
                      accesibles para estudiantes extranjeros.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Es un país multicultural, ideal para conocer personas de todo el mundo y ampliar tu red
                      internacional.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Combina excelente calidad de vida, seguridad, transporte público eficiente y una gran oferta
                      cultural y gastronómica.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Francia collage */}
              <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center pt-30">
                <img src="/images/francia-202.png" alt="Collage de Francia" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24">
          <ServiciosFrancia />
        </section>
      </main>
      <Footer />
    </>
  )
}
