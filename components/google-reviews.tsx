"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const reviews = [
  {
    name: "Daiana Natalia Gutnisky",
    avatar: "/images/testimonio.png",
    rating: 5,
    comment:
      "Gracias a la publicacion hecha por Vaga-Mundo en su Instagram, respecto del programa de viaje para estudiar y trabajar en Irlanda, y sobre todo al Webinar brindado por la Agencia ...",
  },
  {
    name: "María González",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment: "Excelente servicio. Me ayudaron en todo el proceso para estudiar en Irlanda. Muy recomendable!",
  },
  {
    name: "Carlos Rodríguez",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment: "Profesionales y atentos. Cumplieron con todo lo prometido. Mi experiencia en Malta fue increíble.",
  },
]

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=ec9d3b8357a6f1a1&sxsrf=AE3TifMnZqU_243i-lirVJgsbw1o3fCJrg:1765229641263&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4L0RgQpmNm_lo1AQgmN8ZKiGGWnKePhK8FRhdjPyK7452S9rZh0YcaClKwqeTQ7sZi2BN8Hddx6QugR1sMRNKacYI6x&q=Vaga-Mundo+Opiniones&sa=X&ved=2ahUKEwizp9vt-K6RAxWtupUCHatKJ7QQ0bkNegQIIhAE&cshid=1765229756163248&biw=1440&bih=812&dpr=2"

export function GoogleReviews() {
  const [currentReview, setCurrentReview] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#1CD8D2]">
      {/* Background image - only visible on desktop */}
      <div className="hidden lg:block absolute inset-0">
        <Image src="/images/fondotestimonion.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="flex flex-col justify-center space-y-8 py-16 md:py-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-vio">Testimonios</h2>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md cursor-pointer transition-transform hover:scale-105"
            >
              <Card className="bg-white rounded-3xl shadow-lg">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <Image
                      src={reviews[currentReview].avatar || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <p className="text-lg font-semibold text-gray-800">"{reviews[currentReview].name}"</p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{reviews[currentReview].comment}</p>

                  <div className="mb-6 flex gap-1 justify-center">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex justify-center gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setCurrentReview(index)
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentReview ? "bg-gray-800 w-6" : "bg-gray-300"
                        }`}
                        aria-label={`Ver testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
