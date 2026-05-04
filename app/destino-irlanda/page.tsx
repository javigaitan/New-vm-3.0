"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { GraduationCap, Briefcase, Home, MapPin } from "lucide-react"
import { ServiciosNew } from "@/components/servicios-new"
import { useEffect } from "react"


const benefits = [
  {
    icon: GraduationCap,
    title: "Educación de calidad",
    description: "Universidades e instituciones reconocidas mundialmente",
  },
  {
    icon: Briefcase,
    title: "Oportunidades laborales",
    description: "Permiso de trabajo mientras estudias",
  },
  {
    icon: Home,
    title: "Calidad de vida",
    description: "País seguro y acogedor con excelente calidad de vida",
  },
  {
    icon: MapPin,
    title: "Ubicación estratégica",
    description: "Puerta de entrada a Europa",
  },
]

export default function DestinoIrlandaPage() {
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
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden rounded-b-[50px]">
          <img
            src="/images/ireland-banner-landscape.jpg"
            alt="Paisaje impactante de Irlanda"
            className="h-full w-full object-cover rounded-b-[50px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-4 md:bottom-24 md:left-8 lg:bottom-32 lg:left-12">
            <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              <span className="inline-flex items-center gap-3">
                ¡Bienvenidos a Irlanda
                <img 
                  src="/images/BanderaIrlanda.svg" 
                  alt="Bandera de Irlanda" 
                  className="inline-block h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
                />
              </span>
              <br />
              la isla esmeralda!
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24 ">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-primary-vio md:text-5xl text-center">Exploremos Irlanda</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
              {/* Map on the left */}
              <div className="w-full lg:w-1/2">
                <img src="/images/irlandamaps.png" alt="Mapa de Irlanda" className="w-full h-auto" />
              </div>

              {/* Cities column on the right */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/dublin.png" alt="Dublin" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Dublin</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/galway.png" alt="Galway" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Galway</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img src="/images/cork.png" alt="Cork" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-white text-2xl font-semibold drop-shadow-lg">Cork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ireland */}
        <section className="py-16 md:py-24 bg-primary-vio">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl text-center">
              ¿Por qué es el destino más elegido?
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2">

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Su ubicación geográfica te permitirá viajar y conocer otros países de Europa en cuestión de horas
                      y de forma económica.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Es un destino multicultural con su población proveniente de todas partes del mundo y con un fuerte
                      legado vikingo.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      El inglés es su lengua oficial, por lo que estarás en contacto con el idioma todo el tiempo.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <img src="/images/vector-check.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">
                      Tiene buena calidad de vida, siendo uno de los países más seguros del mundo y con una economía en
                      crecimiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Diagonal images */}
              <div className="w-full lg:w-1/2 relative h-[500px]">
                {/* Top-right image */}
                <div className="absolute top-0 right-0 w-72 rounded-2xl overflow-hidden">
                  <img src="/images/trevol.png" alt="Puente de Dublin con tréboles" className="w-full h-auto" />
                </div>

                {/* Bottom-left image */}
                <div className="absolute bottom-0 left-0 w-72 rounded-2xl overflow-hidden">
                  <img src="/images/cerveza.png" alt="Rio de Dublin con cervezas" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs 
        <section className=" py-16 md:py-24">
          <ServiciosNew />
        </section>*/}
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
        Solicitá tu cotización
      </h1>

        <section className="min-h-[60vh] py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <div
  className="hs-form-frame"
  data-region="eu1"
  data-form-id="ba88580a-cbef-4bbe-89a6-b684f9b4dfbd"
  data-portal-id="26265942"
/>
        </div>
      </section>


      </main>
      <Footer />
    </>
  )
}
