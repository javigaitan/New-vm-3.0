import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import Vagabot from "@/components/vagabot"
import Image from "next/image"
import Link from "next/link"

export default function AhorroPage() {
  const programs = [
    {
      icon: "/images/ahorro1.png",
      title: "Programa de Referidos",
      description:
        "Creamos este programa con el objetivo de recompensar económicamente a nuestra comunidad. Pueden participar estudiantes que estén próximos a viajar, quienes estén en los distintos destinos o incluso aquellos que ya culminaron su experiencia y volvieron a su país de origen.\n\nQueremos que los estudiantes nos refieran entre sus amigos y familiares, para que otros puedan sentir la misma satisfacción que sintieron al viajar con nosotros.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero más información sobre el Programa de Referidos.",
      image: "/images/ahorrofoto1.png",
      imagePosition: "right",
    },
    {
      icon: "/images/ahorro2.png",
      title: "Programa de Rifas",
      description:
        "Una vez elegido tu curso de inglés y abonada la seña, puedes acceder al beneficio de financiar tu curso con rifas. Para ello, nos aliamos con Planet01 para brindarte la posibilidad de que tus familiares, amigos y conocidos puedan ayudarte económicamente a cumplir tu sueño de vivir una experiencia de estudios en el exterior.\n\n¿Cómo funciona el programa? Te inscribes y haces la seña de tu curso con Vaga-Mundo. Coordinas con tu asesor la cantidad de boletas de reserva. Retiras tus rifas en las oficinas de Uruguay y empiezas a venderlas.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero más información sobre el Programa de Rifas.",
      image: "/images/ahorrofoto2.png",
      imagePosition: "left",
    },
    {
      icon: "/images/ahorro3.png",
      title: 'Programa "Me caso con viajar"',
      description:
        "A través de este programa de crowdfunding puedes recaudar dinero en eventos como tu cumpleaños, navidad, etc. A través de un enlace que te enviaremos, tus familiares y amigos van a poder regalarte el dinero equivalente a un producto o servicio para tu experiencia educativa en el extranjero como pueden ser los tickets aéreos, seguros médicos, alojamiento, curso de idioma o lo que consideres necesario.",
      whatsappText: '¡Hola, Vaga-Mundo! Quiero más información sobre el Programa "Me caso con viajar".',
      image: "/images/ahorrofoto3.png",
      imagePosition: "right",
    },
    {
      icon: "/images/ahorro4.png",
      title: "Programa de Embajadores VM",
      description:
        "A través de este programa de crowdfunding puedes recaudar dinero en eventos como tu cumpleaños, navidad, etc. A través de un enlace que te enviaremos, tus familiares y amigos van a poder regalarte el dinero equivalente a un producto o servicio para tu experiencia educativa en el extranjero como pueden ser los tickets aéreos, seguros médicos, alojamiento, curso de idioma o lo que consideres necesario.",
      whatsappText: "¡Hola, Vaga-Mundo! Quiero más información sobre el Programa de Embajadores VM.",
      image: "/images/ahorrofoto4.png",
      imagePosition: "left",
    },
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Vagabot />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative rounded-b-[50px] bg-primary-vio py-24 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-turq rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mr-auto text-start">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-secondari-verde">
                Financia tu viaje
              </h1>
              <p className="text-lg md:text-xl text-white">
                En Vaga-Mundo queremos ayudarte a cumplir el viaje de tus sueños, por eso creamos planes a medida para
                que puedas financiar tu experiencia educativa en el extranjero en cuotas o plazos. No olvides consultar
                a tu asesor sobre los medios de pagos que mejor se adapten a tus necesidades y país de origen.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section - Now styled like Otros Servicios */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {programs.map((program, index) => (
                <div key={index} className="mx-auto max-w-6xl">
                  <div
                    className={`flex flex-col ${program.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                  >
                    {/* Content Side */}
                    <div className="flex-1 space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary-turq/10 flex items-center justify-center">
                        <Image
                          src={program.icon || "/placeholder.svg"}
                          alt={program.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>

                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-vio leading-tight">
                        {program.title}
                      </h2>

                      <div className="prose prose-sm md:prose-base max-w-none">
                        {program.description.split("\n\n").map((paragraph, i) => (
                          <p key={i} className="text-text/80 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <Link
                        href={`https://wa.me/5491171366335?text=${encodeURIComponent(program.whatsappText)}`}
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
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < programs.length - 1 && (
                    <div className="mt-20 mx-auto max-w-xs">
                      <div className="h-px bg-gradient-to-r from-transparent via-primary-vio/20 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
