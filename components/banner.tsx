import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <section className="relative mx-auto max-w-[1440px]">
      <div className="relative">
        {/* Desktop Image - with rounded bottom-left corner */}
        <div className="relative hidden md:block">
          <div className="relative h-[500px] overflow-hidden rounded-bl-[100px]">
            <Image
              src="/images/foto-20banner-201.svg"
              alt="Estudiantes de Viaga Mundo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-bl-[100px] bg-black/40" />
          </div>
        </div>

        {/* Mobile Image - with rounded bottom corners */}
        <div className="relative block md:hidden">
          <div className="relative h-[500px] overflow-hidden rounded-b-[50px]">
            <Image
              src="/images/bannerbackok-201.svg"
              alt="Estudiantes de Viaga Mundo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-b-[50px] bg-black/40" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 md:left-[50px] md:px-10 lg:left-[50px] lg:px-7 lg:pl-[55px]">
          <h1 className="mb-2 text-4xl font-bold leading-tight text-white md:mb-3 md:pb-20 md:text-4xl lg:pb-2 lg:text-6xl text-balance">
¡El mundo te espera!
          </h1>
          <h2 className="mb-4 text-xl font-normal leading-snug text-white md:mb-0 md:text-4xl lg:text-4xl text-pretty">
Vive, estudia y trabaja en el extranjero
          </h2>

          <div className="py-4 md:inline-block md:py-8 md:pl-8 lg:pl-0">
            <Link href="https://wa.me/1170585095/?text=Hola%20Vaga-Mundo,%20quisiera%20explorar%20opciones%20educativas%20en%20el%20extranjero">
              <Button
  size="lg"
  className="
    w-full rounded-full 
    bg-secondari-verde 
    hover:bg-secondari-verde
    px-7 py-4 text-base font-semibold 
    text-primary-vio 
    transition-all duration-300 
    hover:scale-105 
    md:w-auto md:px-8 md:text-xl
    cursor-pointer
  "
>
  Solicita tu cotización
</Button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
