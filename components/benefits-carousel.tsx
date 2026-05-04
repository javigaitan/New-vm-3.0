"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useAnimation, useMotionValue, PanInfo } from "framer-motion"
import { BenefitCard } from "./benefit-card"
import type { Benefit } from "@/data/benefits"

interface BenefitsCarouselProps {
  benefits: Benefit[]
  autoplaySpeed?: number
  pauseDuration?: number
}

export function BenefitsCarousel({
  benefits,
  autoplaySpeed = 4000,
  pauseDuration = 3000,
}: BenefitsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const itemCount = benefits.length

  const getVisibleIndices = useCallback(() => {
    const prev = (activeIndex - 1 + itemCount) % itemCount
    const next = (activeIndex + 1) % itemCount
    return { prev, current: activeIndex, next }
  }, [activeIndex, itemCount])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % itemCount)
  }, [itemCount])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount)
  }, [itemCount])

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const pauseAutoplay = useCallback(() => {
    setIsPaused(true)
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, pauseDuration)
  }, [pauseDuration])

  // Autoplay effect
  useEffect(() => {
    if (isPaused || isDragging) return

    const interval = setInterval(() => {
      goToNext()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [isPaused, isDragging, autoplaySpeed, goToNext])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  const handleDragStart = () => {
    setIsDragging(true)
    setIsPaused(true)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 50
    const velocity = info.velocity.x

    if (info.offset.x > threshold || velocity > 500) {
      goToPrev()
    } else if (info.offset.x < -threshold || velocity < -500) {
      goToNext()
    }

    pauseAutoplay()
  }

  const { prev, current, next } = getVisibleIndices()

  const getCardStyle = (position: "prev" | "current" | "next") => {
    const baseTransition = {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    }

    switch (position) {
      case "prev":
        return {
          x: "-75%",
          scale: 0.8,
          opacity: 0.6,
          zIndex: 1,
          filter: "blur(2px)",
          transition: baseTransition,
        }
      case "current":
        return {
          x: "0%",
          scale: 1,
          opacity: 1,
          zIndex: 10,
          filter: "blur(0px)",
          transition: baseTransition,
        }
      case "next":
        return {
          x: "75%",
          scale: 0.8,
          opacity: 0.6,
          zIndex: 1,
          filter: "blur(2px)",
          transition: baseTransition,
        }
    }
  }

  return (
    <div className="w-full select-none">
      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative mx-auto h-[500px] w-full max-w-5xl overflow-hidden px-4"
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          {/* Previous card */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[280px] md:w-[320px]"
            initial={false}
            animate={getCardStyle("prev")}
          >
            <BenefitCard benefit={benefits[prev]} isActive={false} />
          </motion.div>

          {/* Current card */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[280px] md:w-[320px]"
            initial={false}
            animate={getCardStyle("current")}
          >
            <BenefitCard benefit={benefits[current]} isActive={true} />
          </motion.div>

          {/* Next card */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[280px] md:w-[320px]"
            initial={false}
            animate={getCardStyle("next")}
          >
            <BenefitCard benefit={benefits[next]} isActive={false} />
          </motion.div>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {benefits.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToIndex(index)
              pauseAutoplay()
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir al beneficio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
