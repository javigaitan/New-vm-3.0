"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ServiciosUK } from "@/components/servicios-uk"
import { useEffect } from "react"

export default function DestinoUKPage() {
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
              src="/images/magis-487-ludus-cuento.webp"
              alt="Banner de UK"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-8 lg:bottom-32 lg:left-12">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              {"¡Bienvenidos a Reino Unido"}
              <br />
              tierra de historia y leyendas!
            </h1>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-primary-vio md:text-5xl text-center">Exploremos UK</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
              {/* Map on the left */}
              <div className="w-full lg:w-1/2">
                <img
                  src="/images/reino-20unido-20-281-29.png"
                  alt="Mapa de Reino Unido con ciudades"
                  className="w-full h-auto"
                />
              </div>

              {/* Cities column on the right */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/edimburgo-uk.jpg" alt="Edimburgo" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Edimburgo</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/brighton-uk.jpg" alt="Brighton" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Brighton</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/londres-uk.jpg" alt="Londres" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Londres</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/manchester-uk.jpg" alt="Manchester" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Manchester</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why UK */}
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
                      Ciudad histórica y cultural, capital de Escocia. Famosa por su castillo, festivales
                      internacionales y un ambiente académico vibrante, con una mezcla única de tradición y modernidad.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Capital política, financiera y cultural del Reino Unido. Centro global de negocios, moda, arte y
                      entretenimiento, con una oferta multicultural sin igual.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Universidades de prestigio mundial como Oxford, Cambridge y UCL ofrecen programas académicos de
                      excelencia reconocidos globalmente, perfectos para tu desarrollo profesional.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      {"Inmersión total en el inglés británico y acceso fácil a Europa para explorar otros países, combinando estudios con experiencias culturales únicas e inolvidables."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - UK landmarks collage */}
              <div className="w-full lg:w-1/2 relative h-[500px]">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/reino-20unido-20.png"
                    alt="Landmarks del Reino Unido"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24">
          <ServiciosUK />
        </section>
      </main>
      <Footer />
    </>
  )
}
