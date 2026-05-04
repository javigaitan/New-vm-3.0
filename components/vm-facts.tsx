"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function VMFacts() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative pb-7 lg:pb-20 transition-opacity duration-1000 bg-gradient-to-l from-primary-vio to-primary-vio ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Purple background section with title */}
      <div className="relative mx-auto bg-gradient-to-l from-primary-vio to-primary-vio pb-16 md:pb-20 lg:h-96 lg:pb-0 z-0">
        <div className="container mx-auto flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="lg:mt-20">
              <h2 className="mt-5 text-center text-2xl font-semibold leading-10 text-secondari-verde md:pb-8 md:text-4xl lg:text-5xl">
                ¿Por qué elegir <strong>Vaga-Mundo</strong>?
              </h2>
            </div>
          </div>
        </div>

        {/* Decorative passport icon - desktop only */}
        <div className="absolute right-16 top-14 hidden lg:block z-10">
          <Image
            src="/images/pasaporte.png"
            alt="Pasaporte"
            width={128}
            height={192}
            className="h-auto w-32 transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Desktop version - 5 columns */}
      <div className="hidden lg:block relative z-10">
        <div className="container mx-auto lg:-mt-40 lg:flex lg:items-center lg:justify-center">
          <div className="grid grid-cols-5 gap-x-6 lg:grid-cols-5">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact1.png"
                alt="Vivimos la experiencia en primera persona"
                width={240}
                height={280}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact2.png"
                alt="Acompañamiento personalizado"
                width={240}
                height={280}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact3.png"
                alt="Información actualizada"
                width={240}
                height={280}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact4.png"
                alt="Beneficios exclusivos"
                width={240}
                height={280}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact5.png"
                alt="Convenios con casas de estudios"
                width={240}
                height={280}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - 2 columns with 5th centered */}
      <div className="block lg:hidden relative z-10">
        <div className="-mt-8 flex items-center justify-center px-6 pl-[30px] pr-[30px] pt-[30px] md:-mt-40 md:container md:mx-auto md:px-12 md:pt-16">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-x-7 md:gap-y-7 md:px-7">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact1.png"
                alt="Vivimos la experiencia en primera persona"
                width={180}
                height={210}
                className="h-auto w-full scale-90 transform transition-transform duration-300 hover:scale-95"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact2.png"
                alt="Acompañamiento personalizado"
                width={180}
                height={210}
                className="h-auto w-full scale-90 transform transition-transform duration-300 hover:scale-95"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact3.png"
                alt="Información actualizada"
                width={180}
                height={210}
                className="h-auto w-full scale-90 transform transition-transform duration-300 hover:scale-95"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/fact4.png"
                alt="Beneficios exclusivos"
                width={180}
                height={210}
                className="h-auto w-full scale-90 transform transition-transform duration-300 hover:scale-95"
              />
            </div>
            <div className="flex flex-col items-center justify-center md:col-span-2 md:justify-self-center">
              <Image
                src="/images/fact5.png"
                alt="Convenios con casas de estudios"
                width={180}
                height={210}
                className="h-auto w-full scale-90 transform transition-transform duration-300 hover:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
