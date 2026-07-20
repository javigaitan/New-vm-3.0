"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ServiciosNew } from "@/components/servicios-new"
import { useEffect } from "react"

export default function DestinoEspanaPage() {
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
<section className="relative h-[300px] md:h-[380px] lg:h-[420px] xl:h-[600px] overflow-hidden rounded-b-[50px]">
            <img
            src="/espana-scenic-banner.jpg"
            alt="Banner de España"
            className="h-full w-full object-cover rounded-b-[50px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-8 lg:bottom-32 lg:left-12">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              Europa en tu idioma:
              <span className="inline-flex items-center gap-3">
                {"Estudia y trabaja en España"}
                <img
                  src="/images/BanderaEspana.svg"
                  alt="Bandera de España"
                  className="inline-block h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
                />
              </span>
              <br />
            </h1>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-primary-vio md:text-5xl text-center">Exploremos España</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
              {/* Map on the left */}
              <div className="w-full lg:w-1/2">
                <img src="/images/espanamaps.png" alt="Mapa de España" className="w-full h-auto" />
              </div>

              {/* Cities column on the right */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/valencia-espana.jpg" alt="Valencia" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Valencia</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/barcelona-espana.jpg" alt="Barcelona" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Barcelona</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/madrid-espana.jpg" alt="Madrid" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Madrid</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/murcia-espana.jpg" alt="Murcia" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Murcia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why España */}
        <section className="py-16 md:py-24 bg-primary-vio">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl text-center">
¿Por qué estudiar en España?
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed">
    <strong>Sin barreras de idioma:</strong> Al ser tu lengua nativa, la integración es inmediata. Sentite local desde el primer momento y potenciá tu rendimiento académico sin complicaciones de comunicación.
  </p>
</div>

<div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed">
    <strong>Excelente clima:</strong> Situada en una posición estratégica dentro de Europa, España destaca por su agradable clima mediterráneo y una cultura abierta y diversa, convirtiéndose en el destino ideal para los latinoamericanos que buscan un ambiente cálido y hospitalario.
  </p>
</div>

<div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed">
    <strong>Excelencia académica global:</strong> Formate en universidades de prestigio mundial que le darán un peso indiscutible a tu currículum.
  </p>
</div>

<div className="flex gap-4 items-start">
  <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
  <p className="text-white leading-relaxed">
    <strong>Tu trampolín a Europa:</strong> Ubicación estratégica y excelente conectividad para que viajes por todo el continente en tus tiempos libres.
  </p>
</div>
                </div>
              </div>

              {/* Right side - Diagonal images */}
              <div className="w-full lg:w-1/2 relative h-[500px]">
                {/* Top-right image */}
                <div className="absolute top-0 right-0 w-72 rounded-2xl overflow-hidden">
                  <img src="/images/jugoespana.svg" alt="Jugo de España" className="w-full h-auto" />
                </div>

                {/* Bottom-left image */}
                <div className="absolute bottom-0 left-0 w-72 rounded-2xl overflow-hidden">
                  <img src="/images/abanicoespana.svg" alt="Abanico Español" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
Armá tu plan a España Hoy      </h1>
<h2 className="text-2xl md:text-3xl lg:text-3xl  leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
Completá tus datos y recibe tu presupuesto personalizado    </h2>

        <section className="min-h-[60vh] py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <div
  className="hs-form-frame"
  data-region="eu1"
  data-form-id="87ab99e4-7dd8-455c-8b62-6eb70484ad34"
  data-portal-id="26265942"
/>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
