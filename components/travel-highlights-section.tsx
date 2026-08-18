"use client"

import { useEffect, useRef, useState } from "react"

type TravelMetric = {
  number: number
  label: string
  prefix?: string
  suffix?: string
  icon: string
  decimals?: number
}

export function TravelHighlightsSection() {
  const travelMetrics: TravelMetric[] = [
    { number: 5000, label: "Estudiantes en Viaje", prefix: "+", icon: "🎒" },
    { number: 30, label: "Destinos", prefix: "+", icon: "🌎" },
    { number: 4.9, label: "Ranking de la Comunidad", suffix: "/5", icon: "⭐", decimals: 1 },
  ]

  return (
    <section className="relative bg-slate-900 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 uppercase">Números que nos definen</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {travelMetrics.map((metric, index) => (
            <TravelMetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TravelMetricCard({
  metric,
  index,
}: {
  metric: TravelMetric
  index: number
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const decimals = metric.decimals ?? 0
  const multiplier = Math.pow(10, decimals)

  // TODO: reemplazar por las imágenes reales de viajes en /public/images
  const backgroundImages = [
    "/images/estudiantes-viaje.jpg",
    "/images/destinos.jpg",
    "/images/ranking-comunidad.jpg",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const targetValue = Math.round(metric.number * multiplier)
    const increment = targetValue / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep))
      } else {
        setCount(targetValue)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, metric.number, multiplier])

  const displayValue = (count / multiplier).toLocaleString("es-AR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer"
      style={{
        animationName: isVisible ? "fadeIn" : "none",
        animationDuration: "0.5s",
        animationTimingFunction: "ease-out",
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <div
        className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
        style={{
          backgroundImage: `url('${backgroundImages[index]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Single translucent turquoise overlay - reduced opacity for visibility */}
        <div className="absolute inset-0 bg-[#1f97ab]/30"></div>

        <div className="relative z-10 p-6 flex flex-col items-center text-center space-y-3">
          <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {metric.prefix}
            {displayValue}
            {metric.suffix}
          </div>
          <div className="w-12 h-0.5 bg-[#F7E95E] rounded-full transition-all duration-300 group-hover:w-16 group-hover:h-1 group-hover:opacity-100"></div>
          <p className="text-lg md:text-base font-medium text-white drop-shadow-md leading-tight">{metric.label}</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}