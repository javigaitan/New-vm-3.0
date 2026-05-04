"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Cursos de Idiomas",
    image: "/images/curso-idiomas-majo.png",
    href: "/curso-de-idiomas",
  },
  {
    title: "Summer Camps",
    image: "/images/summercamps.png",
    href: "/summer-camps",
  },
  {
    title: "Viajes Grupales",
    image: "/images/viajes-grupales.png",
    href: "/viajes-grupales",
  },
]

export function ServiciosUK() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-12")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container mx-auto px-4 pt-10 pb-20">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
        ¿Qué experiencias ofrecemos?
      </h1>

      <div className="flex flex-wrap justify-center mt-8 gap-4 lg:gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card w-full sm:w-1/2 lg:w-1/3 p-4 opacity-0 translate-y-12 transition-all duration-1000 ease-in-out"
          >
            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <Link href={service.href}>
                  <button className="w-full cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-secondary-tur2 text-base sm:text-lg font-semibold text-center text-text py-3 sm:py-4 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-tur">
                    {service.title}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
