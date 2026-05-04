"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const blogData = [
  {
    title: "Descubre Irlanda: El Destino Perfecto para Aprender Inglés",
    description:
      "Si estás buscando un destino que combine educación de calidad, una cultura fascinante y una experiencia de vida única, Irlanda es tu lugar ideal....",
    image: "/images/dublin-20-286-29.jpg",
    slug: "/irlanda-el-destino-perfecto",
  },
  {
    title: "Guía Completa para Estudiar y Trabajar en Irlanda",
    description: "Si estás buscando una experiencia única para mejorar tu inglés o realizar estudios superiores...",
    image: "/images/dublin-20-285-29.jpg",
    slug: "/estudia-trabaja-irlanda",
  },
  {
    title: "Guía Completa para Estudiar y Trabajar en Irlanda",
    description:
      "Si estás buscando una experiencia única para mejorar tu inglés o realizar estudios superiores, Irlanda es el destino perfecto para ti",
    image: "/images/brooke-cagle-9fhmo1-5ioo8-unsplash-1-1536x1151.png",
    slug: "/blogs",
  },
]

export function Blogs() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogData.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative py-16 md:py-20 lg:py-24">
      {/* Desktop Layout - visible en lg y superior */}
      <div className="hidden lg:flex items-center min-h-[677px]">
        {/* Imagen de fondo decorativa a la izquierda */}
        <div className="flex items-center justify-start w-[45%]">
          <Image
            src="/images/group-20120-20-281-29.png"
            alt="Background decorativo"
            width={800}
            height={677}
            className="w-[80%] max-h-[677px] object-cover"
          />
        </div>

        {/* Carrusel de blogs a la derecha */}
        <div className="flex flex-col justify-center w-[55%] pr-8">
          <div className="relative h-[677px] flex items-center justify-center">
            {/* Blog actual */}
            <div className="relative w-[90%] h-full">
              <Image
                src={blogData[currentSlide].image || "/placeholder.svg"}
                alt={blogData[currentSlide].title}
                fill
                className="object-cover rounded-3xl"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/40 rounded-3xl" />

              {/* Contenido del blog */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-12 py-10">
                <h2 className="text-3xl font-bold leading-normal text-center text-white mb-6">
                  {blogData[currentSlide].title}
                </h2>
                <p className="text-lg leading-relaxed text-center text-white mb-8 max-w-xl">
                  {blogData[currentSlide].description}
                </p>
                <Link href={blogData[currentSlide].slug}>
                  <button className="hover:bg-secondari-verde transition duration-300 text-base font-bold rounded-full text-primary-vio border-2 border-primary-vio py-4 px-12 bg-white focus:outline-none cursor-pointer">
                    Leer más
                  </button>
                </Link>
              </div>
            </div>

            {/* Dots de navegación */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
              {blogData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Ir al blog ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - visible solo en md y menor */}
      <div className="bg-secondary-verde min-h-screen flex items-center justify-center lg:hidden">
        <div className="flex flex-col justify-center w-full h-full px-4">
          <h1 className="text-primary-vio text-4xl font-bold text-center mb-8">Blog VM</h1>

          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Blog actual en móvil */}
            <div className="relative w-full max-w-2xl h-full">
              <Image
                src={blogData[currentSlide].image || "/placeholder.svg"}
                alt={blogData[currentSlide].title}
                fill
                className="object-cover rounded-3xl"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/40 rounded-3xl" />

              {/* Contenido del blog */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8">
                <h2 className="text-2xl md:text-3xl font-bold leading-normal text-center text-white mb-4">
                  {blogData[currentSlide].title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-center text-white mb-6">
                  {blogData[currentSlide].description}
                </p>
                <Link href={blogData[currentSlide].slug}>
                  <button className="hover:bg-secondary-tur transition duration-300 text-base md:text-lg font-bold rounded-full text-primary-vio border-2 border-primary-vio py-3 px-8 bg-white focus:outline-none cursor-pointer">
                    Leer más
                  </button>
                </Link>
              </div>
            </div>

            {/* Dots de navegación */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
              {blogData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Ir al blog ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
