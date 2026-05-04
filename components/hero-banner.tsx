"use client"

import { SearchForm } from "./search-form"

export function HeroBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Mountains_Nature.mp4" type="video/mp4" />
        {/* Fallback a imagen si el video no carga */}
      </video>

      {/* Overlay sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20">
        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 drop-shadow-lg">
          El mundo te espera
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white text-center mb-12 drop-shadow-md font-light">
          {"Viví, estudiá y trabajá en el exterior"}
        </p>

        {/* Search Form */}
        <SearchForm />
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
