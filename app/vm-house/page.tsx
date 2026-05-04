"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Drama as Tram, Clock, Calendar, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function VMHousePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const images = [
    "/residencia-5.jpeg",
    "/residencia-6.jpeg",
    "/residencia-7.jpeg",
    "/residencia-8.jpeg",
    "/residencia-1.jpeg",
    "/residencia-2.jpeg",
    "/residencia-4.jpeg",
  ]

  const imagesPerPage = 3
  const totalPages = Math.ceil(images.length / imagesPerPage)
  const startIndex = currentPage * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = images.slice(startIndex, endIndex)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const highlights = [
    {
      icon: MapPin,
      title: "Localización",
      description: "11 The Crescent, Kingswood Heights Drive, Kilnamanagh, Dublin, D24 A0XC, Irlanda",
    },
    {
      icon: Tram,
      title: "Transporte",
      description:
        "A solo 2 minutos caminando de la parada Kingswood del Luas Red Line. Llega al centro de Dublín de manera rápida y directa.",
    },
    {
      icon: Clock,
      title: "Check-In / Check-Out",
      description: "Check-In a partir de las 2 PM. Check-Out hasta las 10 AM.",
    },
    {
      icon: Calendar,
      title: "Ingresos",
      description: "Los ingresos a nuestra residencia son los días miércoles.",
    },
    {
      icon: Sparkles,
      title: "Incluye",
      description: "Bills, impuestos, limpieza general y compras del supermercado de insumos básicos compartidos.",
    },
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary-vio rounded-b-[50px] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondari-verde mb-6 text-start">
                <span className="inline-flex items-center gap-4">
                  VM House
                  <img
                    src="/images/vm-house-logo.png"
                    alt="Logo VM House"
                    className="inline-block h-16 md:h-20 lg:h-24 w-auto"
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed text-start">
                La residencia estudiantil de <strong>Vaga-Mundo</strong> está pensada para acompañar a los estudiantes internacionales en
                sus primeras semanas en Dublín. Ofrecemos espacios amplios, luminosos y confortables, que recrean <strong>un
                verdadero hogar</strong>, donde podrás sentirte acogido y seguro.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/56927039398?text=Hola!%20Quisiera%20mas%20informacion%20sobre%20su%20residencia%20en%20Dublin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondari-verde hover:bg-secondari-verde/90 text-primary-vio font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Quiero más información
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-vio mb-4 text-center">
                Lo que dicen nuestros estudiantes
              </h2>
              <p className="text-lg text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                <strong>Experiencias reales</strong> de quienes vivieron en VM House
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/captura-20de-20pantalla-202025-12-17-20a-20la-28s-29-2010.png"
                    alt="Estudiantes de Vagamundo en VM House"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Right Column - Testimonials */}
                <div className="space-y-6">
                  {/* Testimonial 1 */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-turq">
                    <p className="text-foreground/90 italic mb-3 leading-relaxed">
                      "VM House fue el mejor lugar para comenzar mi aventura en Dublín. Me sentí como en casa desde el
                      primer día. Las instalaciones son impecables y el ambiente es muy cálido."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-turq rounded-full"></div>
                      <p className="text-primary-vio font-semibold">María G. - Argentina</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondari-verde">
                    <p className="text-foreground/90 italic mb-3 leading-relaxed">
                      "La ubicación es perfecta, el Luas está a 2 minutos y puedes llegar al centro en poco tiempo.
                      Además, conocí personas increíbles de todo el mundo. ¡Una experiencia inolvidable!"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondari-verde rounded-full"></div>
                      <p className="text-primary-vio font-semibold">Carlos R. - México</p>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-vio">
                    <p className="text-foreground/90 italic mb-3 leading-relaxed">
                      "Me encantó la limpieza y el orden de la residencia. Todo está pensado para que te sientas cómodo.
                      El equipo de Vaga-Mundo siempre estuvo disponible para ayudarnos."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-vio rounded-full"></div>
                      <p className="text-primary-vio font-semibold">Ana S. - Colombia</p>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-vio">
                    <p className="text-foreground/90 italic mb-3 leading-relaxed">
                      "Me encantó la limpieza y el orden de la residencia. Todo está pensado para que te sientas cómodo.
                      El equipo de Vaga-Mundo siempre estuvo disponible para ayudarnos."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-vio rounded-full"></div>
                      <p className="text-primary-vio font-semibold">Ana S. - Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-vio mb-4 text-center">
                Residencia Estudiantil en Dublín
              </h2>
              <p className="text-lg text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
                Todo lo que necesitas saber sobre <strong>tu nuevo hogar en Irlanda</strong>
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Location & Transport */}
                <div className="space-y-6">
                  <div className="bg-primary-vio rounded-2xl p-8 text-white">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-secondari-verde rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-7 h-7 text-primary-vio" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Localización</h3>
                        <p className="text-white/90 leading-relaxed">
                          11 The Crescent, Kingswood Heights Drive, Kilnamanagh, Dublin, D24 A0XC, Irlanda
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1770645076664!5m2!1ses!2sar!6m8!1m7!1s04DE5a7BEu8REaQuRvQf7w!2m2!1d53.30348432678475!2d-6.369455141554123!3f40.985214!4f0!5f0.7820865974627469"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación VM House en Google Maps"
                        className="w-full rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="bg-secondari-verde rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary-vio rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tram className="w-7 h-7 text-secondari-verde" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-vio mb-2">Transporte</h3>
                        <p className="text-primary-vio/80 leading-relaxed">
                          A solo 2 minutos caminando de la parada Kingswood del Luas Red Line. Llega al centro de Dublín
                          de manera rápida y directa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Check-in, Entry Days, Includes */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-muted">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-vio/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary-vio" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-vio mb-2">Check-In / Check-Out</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Check-In a partir de las 2 PM. Check-Out hasta las 10 AM.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-muted">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondari-verde/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary-vio" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-vio mb-2">Ingresos</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Los ingresos a nuestra residencia son los días miércoles.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-muted">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-primary-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-vio mb-2">Incluye</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Bills, impuestos, limpieza general y compras del supermercado de insumos básicos compartidos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Container */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-vio mb-12 text-center">Conoce la Residencia</h2>

            {/* Images Grid */}
            <div className="relative max-w-7xl mx-auto">
              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {currentImages.map((img, index) => {
                  const actualIndex = startIndex + index
                  return (
                    <div
                      key={actualIndex}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                      onClick={() => setSelectedImage(actualIndex)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`VM House - Foto ${actualIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                          Click para ampliar
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevPage}
                  className="w-12 h-12 rounded-full bg-primary-vio text-white hover:bg-primary-vio/90 transition-colors flex items-center justify-center shadow-lg"
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentPage ? "bg-primary-vio w-8" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setCurrentPage(index)}
                      aria-label={`Ir a página ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="w-12 h-12 rounded-full bg-primary-vio text-white hover:bg-primary-vio/90 transition-colors flex items-center justify-center shadow-lg"
                  aria-label="Página siguiente"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Page Counter */}
              <p className="text-center mt-4 text-foreground/60">
                Página {currentPage + 1} de {totalPages}
              </p>
            </div>
          </div>
        </section>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-green transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>

            {/* Previous Image Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! - 1 + images.length) % images.length)
              }}
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Image Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! + 1) % images.length)
              }}
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={28} />
            </button>

            {/* Main Image */}
            <div className="relative max-w-6xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={`VM House - Foto ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Counter and Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
              <p className="text-white text-sm font-medium">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
