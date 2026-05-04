"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Benefit } from "@/data/benefits"

interface BenefitCardProps {
  benefit: Benefit
  isActive: boolean
}

export function BenefitCard({ benefit, isActive }: BenefitCardProps) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl bg-card shadow-lg"
      whileHover={isActive ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-75 w-full overflow-hidden">
        <Image
          src={benefit.image}
          alt={benefit.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, 320px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-card-foreground">
          {benefit.title}
        </h3>
        <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>      {/* 
        <Button asChild variant="default" size="sm" className="mt-2 w-full">
          <Link href={benefit.href}>Ver más</Link>
        </Button>*/}
      </div>
    </motion.div>
  )
}
