"use client"

import Link from "next/link"
import { useEffect } from "react"

export function ServiciosFrancia() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default

        ScrollReveal().reveal(".card", {
          delay: 200,
          distance: "50px",
          duration: 800,
          easing: "ease-in-out",
          interval: 200,
          origin: "bottom",
          reset: true,
        })
      }
    }

    initScrollReveal()
  }, [])

  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary-vio md:text-5xl">
          ¿Qué experiencias ofrecemos?
        </h2>

        <div className="flex flex-wrap justify-center">
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
                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-primary-turque transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-b-lg shadow-lg focus:outline-none cursor-pointer">
                      Curso de Idiomas
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Estudia y Trabaja en el Exterior Card */}
          <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-cover flex justify-center flex-col rounded-lg">
              <div className="relative">
                <img
                  src="/images/estudio-trabajo-exterior-carreras.png"
                  alt="Estudia y Trabaja en el Exterior"
                  className="w-full h-auto rounded-lg mx-auto"
                />
                <div className="absolute bottom-0 left-0 w-full">
                  <Link href="/work&study">
                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-primary-turque transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-b-lg shadow-lg focus:outline-none cursor-pointer">
                      Estudia y Trabaja en el Exterior
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
