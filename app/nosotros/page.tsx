"use client"

import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <div className="relative min-h-screen pb-4">
        <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container relative z-10">
          {/* Título centrado con mayor jerarquía */}
          <div className="w-full text-center mb-12">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-primary-vio">
              ¿Quiénes Somos?
            </h1>
          </div>

          {/* Primer bloque: Imagen a la izquierda, texto a la derecha */}
          <div className="flex flex-col md:flex-row items-center w-full p-6 space-y-8 md:space-y-0 md:space-x-8 relative z-10">
            <div className="w-full md:w-2/5">
              <img
                src="/images/nosotros1.png"
                alt="Equipo Vaga Mundo"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left mb-4 md:mb-0">
              <p className="lg:text-2xl text-xl text-primary-vio font-regular">
                Somos una agencia especializada en{" "}
                <span className="font-bold text-secondari-verde">programas de estudio en el extranjero</span> con más de{" "}
                <span className="font-bold text-secondari-verde">15 años de experiencia</span>. Nuestro compromiso es
                hacer realidad los sueños de estudiantes que desean expandir sus horizontes a través de experiencias
                educativas internacionales de calidad.
              </p>
            </div>
          </div>

          {/* Sección panorámica con imagen de Irlanda y texto glassmorphism */}
          <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden my-12">
            {/* Imagen de fondo */}
            <img
              src="/images/ireland-landscape.jpg"
              alt="Paisaje de Irlanda"
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            
            {/* Contenedor de texto con glassmorphism */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 lg:p-12 max-w-4xl border border-white/20 shadow-2xl">
                <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                  Desde nuestros inicios, hemos ayudado a más de{" "}
                  <span className="font-bold text-secondari-verde">5,000 estudiantes</span> a cumplir sus metas de estudiar en
                  destinos como Irlanda, Malta y España. Nuestro equipo de expertos brinda asesoría personalizada en cada
                  etapa del proceso, desde la selección del programa hasta la adaptación en el destino elegido.
                </p>
              </div>
            </div>
          </div>

          {/* Tercera sección - Dos columnas: Texto izquierda, Imagen derecha */}
          <div className="flex flex-col md:flex-row items-stretch w-full p-6 gap-8 relative z-10 my-8">
            {/* Columna izquierda - Texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl lg:text-2xl text-primary-vio leading-relaxed text-left">
                  Trabajamos exclusivamente con instituciones educativas certificadas y reconocidas internacionalmente. 
                  Nuestra red de partners nos permite ofrecer programas de alta calidad en idiomas, carreras 
                  universitarias y formación profesional, garantizando una experiencia educativa excepcional.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-primary-vio leading-relaxed text-left">
                  Nuestros servicios van más allá de la inscripción académica. Ofrecemos apoyo integral que incluye 
                  asesoría de visado, búsqueda de alojamiento, apertura de cuenta bancaria, y acompañamiento continuo 
                  durante toda tu estadía.{" "}
                  <span className="font-semibold">Estamos contigo en cada paso de tu aventura internacional.</span>
                </p>
              </div>
            </div>
            {/* Columna derecha - Imagen */}
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full h-full min-h-[300px] md:min-h-full relative rounded-xl overflow-hidden">
                <img
                  src="/images/nosotros3.png"
                  alt="Grupo de estudiantes en Irlanda con catedral de fondo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative z-10 pt-6 pb-3">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-8 text-primary-vio mt-6 text-center">
              Conoce más sobre nosotros
            </h2>
            <div className="flex justify-center mt-8">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <div className="relative overflow-hidden pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/vF9afFz-xTw?si=HfC_RY0uJsE0uqk0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Webinar de Malta vs Irlanda"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}