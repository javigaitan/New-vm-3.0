"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import Vagabot from "@/components/vagabot"
import Image from "next/image"
import Link from "next/link"
import { Shield, Plane, Home, Briefcase, Users } from "lucide-react"

export default function ServiciosPage() {
  const services = [
    {
      icon: Shield,
      title: "Seguros y asistencias al viajero",
      description:
        "Los imprevistos médicos como pueden ser una urgencia odontológica o bien uno no médico como la pérdida de equipaje, suelen formar parte de nuestros viajes y alterar nuestra planificación.\n\nPor eso, desde Vaga-Mundo tenemos alianzas con los principales proveedores de seguros y asistencias al viajero, para que tu única preocupación sea la de disfrutar. Todas ellas ofrecen planes de pago a medida y asistencia médica 24/7 en tu mismo idioma.\n\nYa sea que viajes a estudiar, de vacaciones, por trabajo, solo o acompañado, tenemos la cobertura ideal para ti.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero tener más info sobre seguros y asistencias al viajero!",
      image: "/images/asistencia-20me-cc-81dica-20en-20viajes-201.png",
      imagePosition: "right",
    },
    {
      icon: Plane,
      title: "Tickets aéreos, alquiler de autos, atracciones y mucho más.",
      description:
        "Uno de los primeros pasos que realizamos para materializar el viaje de nuestros sueños es la compra del boleto de avión, ya sea que viajes solo, acompañado, en familia o con amigos.\n\nPor eso, en Vaga-Mundo tenemos las mejores opciones en tickets aéreos, alquileres de auto, atracciones y mucho más, dentro o fuera de Europa.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero tener más info sobre tickets aéreos!",
      image: "/images/tickets-20aereos.png",
      imagePosition: "left",
    },
    {
      icon: Home,
      title: "Alojamiento propio y externos",
      description:
        "Un gran miedo que enfrentamos al momento de vivir una experiencia en el exterior es el saber dónde nos alojaremos.\n\nPor eso, en Vaga-Mundo contamos con alojamiento propio en Dublín, Irlanda para que nuestros estudiantes se sientan como en casa, una vez arribados a la isla verde.\n\nAsimismo, tanto en Irlanda como en otros destinos del mundo tenemos convenios con partners como pueden ser alojamientos estudiantiles, host family o las mismas escuelas de inglés, para que nuestros estudiantes se sientan cómodos.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero tener más info sobre alojamientos!",
      image: "/images/residencia-20vm-202024.png",
      imagePosition: "right",
    },
    {
      icon: Briefcase,
      title: "Programas de inserción laboral",
      description:
        "Una experiencia de estudio en el extranjero se termina de resignificar si a esta le sumamos una experiencia laboral.\n\nPor eso, desde Vaga-Mundo, además de los talleres que brindamos de forma gratuita para ayudar a nuestros estudiantes a conseguir empleo en Europa, ofrecemos este programa de inserción laboral.\n\nLa propuesta consiste en un diagnóstico situacional del aplicante para poder ofrecer una eficiente proximidad con el mercado laboral postulante. El proceso inicia con el interés de la persona y finaliza concretando entrevistas con empresas del rubro seleccionado.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero tener más info sobre programas laborales!",
      image: "/images/job-20workshop-20-28documento-29-201.png",
      imagePosition: "left",
    },
    {
      icon: Users,
      title: "Viajes grupales y actividades en comunidad",
      description:
        "En Vaga-Mundo sabemos la importancia de hacer comunidad en los diferentes destinos y una forma de mantener vivo este espíritu son los viajes grupales. Ya sea una escapada de fin de semana al interior de los países donde están estudiando, o bien un viaje a otro continente, como puede ser conocer la multisensorial Marruecos.\n\nEn Vaga-Mundo siempre estamos planificando una próxima experiencia viajera en comunidad.\n\nPara conocer más sobre las actividades y beneficios de ser miembros de la comunidad VM visita aquí.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero tener más info sobre viajes grupales!",
      image: "/images/viajes-20grupales.png",
      imagePosition: "right",
    },
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Vagabot />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative rounded-b-[50px]  bg-primary-vio py-24 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-turq rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mr-auto text-start">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-secondari-verde">Otros Servicios</h1>
              <p className="text-lg md:text-xl text-white">
                En Vaga-Mundo nos enfocamos en la satisfacción integral de nuestros clientes. Por eso, ofrecemos
                soluciones 360º diseñadas para maximizar su experiencia de viaje.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="mx-auto max-w-6xl">
                    <div
                      className={`flex flex-col ${service.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                    >
                      {/* Content Side */}
                      <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-turq/10">
                          <Icon className="w-8 h-8 text-primary-vio" />
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-vio leading-tight">
                          {service.title}
                        </h2>

                        <div className="prose prose-sm md:prose-base max-w-none">
                          {service.description.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="text-text/80 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        <Link
                          href={`https://wa.me/541171366335/?text=${encodeURIComponent(service.whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-primary-vio border-2 border-primary-vio rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:scale-105">
                            <span className="absolute inset-0 w-full h-full bg-primary-vio transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            <span className="relative">Solicitar más información</span>
                          </button>
                        </Link>
                      </div>

                      {/* Image Side - Only visible on desktop */}
                      <div className="hidden lg:block flex-1">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    {index < services.length - 1 && (
                      <div className="mt-20 mx-auto max-w-xs">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-vio/20 to-transparent"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
