"use client"

import Image from "next/image"
import Link from "next/link"

const partners = [
  {
    name: "Alan x el mundo",
    logo: "/images/alanxelmundo.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Assist 365",
    logo: "/images/assist365.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Assist Card",
    logo: "/images/assistcard.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Erasmusu",
    logo: "/images/erasmusu.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Holafly",
    logo: "/images/holafly.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Holasim",
    logo: "/images/holasim.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Moneyjar",
    logo: "/images/moneyjar.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Pampa Directo",
    logo: "/images/pampadirecto.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Pax",
    logo: "/images/pax-cfc6f87b.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "Planet",
    logo: "/images/planet01-6e89a9e9.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "SAS",
    logo: "/images/SAS-d09c9d92.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "SPOT",
    logo: "/images/SPOT-4e0ca686.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "TWC",
    logo: "/images/TWC-2c472042.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
  {
    name: "World Packers",
    logo: "/images/WP-dfd226ca.svg",
    url: "https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197",
  },
]

export function Partners() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-vio lg:text-4xl">Nuestros Partners</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {/* Duplicate partners array for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <Link
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 cursor-pointer p-8 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex h-32 w-64 items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={250}
                    height={250}
                    className="max-h-full max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
