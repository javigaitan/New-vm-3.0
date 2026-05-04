"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useEffect } from "react"

declare global {
  interface Window {
    hbspt: any
  }
}

export default function WorkStudyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.impactoattribution.com/widgets/v1/IASBadge.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const existingScript = document.querySelector('script[src="//js-eu1.hsforms.net/forms/embed/v2.js"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
      script.type = "text/javascript"
      script.charset = "utf-8"
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "26265942",
            formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
            target: "#hubspotForm",
          })
        }
      }
      document.body.appendChild(script)
    } else {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26265942",
          formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
          target: "#hubspotForm",
        })
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <div className="container mx-auto px-4 py-7">
          {/* Title for mobile - shows above image */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:hidden">
            <h1 className="text-4xl font-bold mb-4 text-primary-vio">Estudia y Trabaja en el Exterior</h1>
          </div>

          {/* Main content layout */}
          <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start">
            {/* Image section */}
            <div className="w-full lg:w-1/2 p-4 flex justify-center">
              <img
                src="/images/estudioytrabajoexterior-a11767e8.png"
                alt="Estudia y Trabaja en el Exterior"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Text section */}
            <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              {/* Title for desktop - shows next to text */}
              <h1 className="text-4xl font-bold mb-4 text-primary-vio hidden lg:block">
                Estudia y Trabaja en el Exterior
              </h1>

              <p className="text-lg text-text">
                Esta experiencia es ideal para quienes quieren aprender o mejorar un idioma mientras tienen la
                posibilidad de trabajar medio tiempo en el destino para solventar sus gastos.
                <br />
                <br />
                Dependiendo del destino elegido, este tipo de visado puede extenderse por uno o dos períodos
                adicionales.
                <br />
                <br />
                Los interesados no tienen restricciones de edad y no necesitan tener conocimientos previos en inglés.
              </p>

              <div className="pt-10 pb-8">
                <Link href="https://wa.me/541170585095/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20programa%20de%20estudia%20y%20trabaja!">
                  <button className="bg-secondari-verde text-primary-vio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300 hover:scale-105 cursor-pointer">
                    Solicitar más información
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primary-vio mt-6 text-center mb-8">
            Otras experiencias que ofrecemos
          </h2>

          <div className="flex flex-wrap justify-center mt-8">
            {/* Language Courses Card */}
            <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                <div className="relative">
                  <img
                    src="/images/curso-20idioma-265fb314.png"
                    alt="Cursos de Idiomas"
                    className="w-full h-auto rounded-lg mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full">
                    <Link href="/curso-de-idiomas">
                      <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-primary-turq transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-b-lg shadow-lg focus:outline-none cursor-pointer">
                        Cursos de Idiomas
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* University Programs Card */}
            <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                <div className="relative">
                  <img
                    src="/images/posgrados-1096ebf6.png"
                    alt="Carreras Universitarias"
                    className="w-full h-auto rounded-lg mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full">
                    <Link href="/carreras-universitarias">
                      <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-primary-turq transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-b-lg shadow-lg focus:outline-none cursor-pointer">
                        Posgrados y Carreras Universitarias
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary-vio mb-8">¡Solicita más información!</h2>
            <div id="hubspotForm" className="bg-white rounded-lg shadow-lg p-6"></div>
          </div>

          <div className="absolute left-0 z-20 p-4">
            <div className="left-0 z-20">
              <span id="iasBadge" data-account-id="5281"></span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
