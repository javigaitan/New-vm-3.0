"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function Footer() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js"
    script.async = true
    script.defer = true
    script.crossOrigin = "anonymous"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <footer className="bg-primary-vio text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-vagamundo.png"
                alt="Vaga-Mundo Logo"
                width={200}
                height={80}
                className="h-auto w-48"
              />
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary-tur transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/contactanos" className="hover:text-secondary-tur transition-colors">
                  Contáctanos
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.vaga-mundo.com/es/terminos-y-condiciones-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-tur transition-colors"
                >
                  Términos y condiciones de servicio
                </a>
              </li>
              <li>
                <a
                  href="https://blog.vaga-mundo.com/es/politicas-privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-tur transition-colors"
                >
                  Políticas de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/541171366335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-tur transition-colors"
                >
                  011 7136-6335
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:consultas@vaga-mundo.com" className="hover:text-secondary-tur transition-colors">
                  consultas@vaga-mundo.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/VagaMundoTravellers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-tur transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/vagamundo_travellers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-tur transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vaga-mundo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-tur transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@vaga-mundo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-tur transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@vaga_mundo_travellers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-tur transition-colors"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex space-x-8 items-center mt-6 pl-4">
          <a href="https://www.icef.com/agency/0016M00002KTcRTQA1" target="_blank" rel="noopener noreferrer">
            <span id="iasBadge" data-account-id="5281" className="inline-block cursor-pointer scale-75" />
          </a>
          <Image
            src="/images/st-referencechecked-cmyk-201.svg"
            alt="ST Reference Checked"
            width={70}
            height={68}
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/images/english-20education-20logo.svg"
            alt="English Education"
            width={82}
            height={75}
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-8">
        <div className="text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Vaga-Mundo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
