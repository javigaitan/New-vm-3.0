"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useEffect } from "react"

export default function PreparatoriosUniversidadPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <div className="container mx-auto px-4 py-7">
          {/* Title for mobile - shows above image */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:hidden">
            <h1 className="text-4xl font-bold mb-4 text-primary-vio">Preparatorios a la Universidad</h1>
          </div>

          {/* Main content layout */}
          <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start">
            {/* Image section */}
            <div className="w-full lg:w-1/2 p-4 flex justify-center">
              <img
                src="/images/preparatorio-universitario.png"
                alt="Preparatorios a la Universidad"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Text section */}
            <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              {/* Title for desktop - shows next to text */}
              <h1 className="text-4xl font-bold mb-4 text-primary-vio hidden lg:block">
                Preparatorios a la Universidad
              </h1>

              <p className="text-lg text-text">
                Los programas preparatorios están diseñados para estudiantes internacionales que desean prepararse para
                ingresar a una universidad en el extranjero.
                <br />
                <br />
                Estos cursos ofrecen formación académica intensiva en el idioma del país destino, además de proporcionar
                las habilidades necesarias para tener éxito en un entorno universitario internacional.
                <br />
                <br />
                Al completar un programa preparatorio, los estudiantes adquieren el nivel de idioma requerido y están
                mejor preparados para enfrentar los desafíos académicos de la educación superior en el extranjero.
              </p>

              <div className="pt-10 pb-8">
                <Link href="https://wa.me/541170585095/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20programa%20preparatorio%20universitario!">
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
            {/* Curso de Idiomas Card */}
            <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                <div className="relative">
                  <img
                    src="/images/curso-20idioma-265fb314.png"
                    alt="Curso de Idiomas"
                    className="w-full h-auto rounded-lg mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full">
                    <Link href="/curso-de-idiomas">
                      <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-primary-turq transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-b-lg shadow-lg focus:outline-none cursor-pointer">
                        Curso de Idiomas
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Carreras Universitarias Card */}
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
      </main>
      <Footer />
    </>
  )
}
