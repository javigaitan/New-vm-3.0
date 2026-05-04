"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import { MapPin, Calendar, Compass, Search, MessageCircle, GraduationCap } from "lucide-react"
import { cursos, type Curso } from "@/lib/cursos-data"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const WHATSAPP_LINK = "https://wa.me/5493513935872?text=Hola,%20he%20visto%20la%20oferta%20de%20programas%20de%20estudio%20en%20su%20pagina%20web,%20me%20gustaria%20ponerme%20en%20contacto%20para%20recibir%20informacion"

function BusquedaContent() {
  const searchParams = useSearchParams()
  
  const [destino, setDestino] = useState(searchParams.get("destino") || "")
  const [mes, setMes] = useState(searchParams.get("mes") || "")
  const [busqueda, setBusqueda] = useState(searchParams.get("interes") || "")
  const [resultados, setResultados] = useState<Curso[]>([])

  useEffect(() => {
    // Filtrar cursos basados en los criterios
    let filtered = [...cursos]
    
    if (destino && destino !== "otro") {
      filtered = filtered.filter(curso => 
        curso.destino.toLowerCase() === destino.toLowerCase()
      )
    }
    
    if (busqueda && busqueda !== "otro") {
      filtered = filtered.filter(curso => 
        curso.tipo.toLowerCase().includes(busqueda.toLowerCase()) ||
        curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    }
    
    setResultados(filtered)
  }, [destino, mes, busqueda])

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destino) params.append("destino", destino)
    if (mes) params.append("mes", mes)
    if (busqueda) params.append("interes", busqueda)
    
    window.history.pushState({}, "", `/busqueda?${params.toString()}`)
    
    // Re-trigger filter
    let filtered = [...cursos]
    if (destino && destino !== "otro") {
      filtered = filtered.filter(curso => 
        curso.destino.toLowerCase() === destino.toLowerCase()
      )
    }
    if (busqueda && busqueda !== "otro") {
      filtered = filtered.filter(curso => 
        curso.tipo.toLowerCase().includes(busqueda.toLowerCase()) ||
        curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    }
    setResultados(filtered)
  }

  const handleCotizar = (curso: Curso) => {
    const mensaje = `Hola, me interesa el programa "${curso.nombre}" en ${curso.destino}. Me gustaría recibir más información.`
    const encodedMsg = encodeURIComponent(mensaje)
    window.open(`https://wa.me/5493513935872?text=${encodedMsg}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-vio to-primary-vio/80">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
            Encuentra tu programa ideal
          </h1>
          
          {/* Search Form */}
          <div className="w-full max-w-4xl mx-auto">
            {/* Desktop Version */}
            <div className="hidden md:flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-2xl p-2 pl-6">
              {/* Destino */}
              <div className="flex items-center flex-1 border-r border-gray-200 pr-4">
                <MapPin className="w-5 h-5 text-primary-vio mr-3" />
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 font-medium">Destino</label>
                  <select
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none pr-6"
                  >
                    <option value="">Todos los destinos</option>
                    <option value="irlanda">Irlanda</option>
                    <option value="malta">Malta</option>
                    <option value="espana">España</option>
                    <option value="uk">Reino Unido</option>
                    <option value="alemania">Alemania</option>
                    <option value="francia">Francia</option>
                    <option value="otro">Otro destino</option>
                  </select>
                </div>
              </div>

              {/* Mes */}
              <div className="flex items-center flex-1 border-r border-gray-200 px-4">
                <Calendar className="w-5 h-5 text-primary-vio mr-3" />
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 font-medium">Mes</label>
                  <select
                    value={mes}
                    onChange={(e) => setMes(e.target.value)}
                    className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none pr-6"
                  >
                    <option value="">Cualquier mes</option>
                    <option value="enero">Enero</option>
                    <option value="febrero">Febrero</option>
                    <option value="marzo">Marzo</option>
                    <option value="abril">Abril</option>
                    <option value="mayo">Mayo</option>
                    <option value="junio">Junio</option>
                    <option value="julio">Julio</option>
                    <option value="agosto">Agosto</option>
                    <option value="septiembre">Septiembre</option>
                    <option value="octubre">Octubre</option>
                    <option value="noviembre">Noviembre</option>
                    <option value="diciembre">Diciembre</option>
                  </select>
                </div>
              </div>

              {/* Qué estás buscando */}
              <div className="flex items-center flex-1 px-4">
                <Compass className="w-5 h-5 text-primary-vio mr-3" />
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 font-medium">{"¿Qué estás buscando?"}</label>
                  <select
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none pr-6"
                  >
                    <option value="">Todos los programas</option>
                    <option value="idiomas">Cursos de idiomas</option>
                    <option value="universidad">Carreras universitarias</option>
                    <option value="work-study">Work & Study</option>
                    <option value="profesional">Formación profesional</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Botón de búsqueda */}
              <button
                onClick={handleSearch}
                className="bg-primary-vio hover:bg-primary-vio/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden flex flex-col bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 space-y-3">
              {/* Destino */}
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-3">
                <MapPin className="w-5 h-5 text-primary-vio mr-3" />
                <select
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none flex-1"
                >
                  <option value="">Todos los destinos</option>
                  <option value="irlanda">Irlanda</option>
                  <option value="malta">Malta</option>
                  <option value="espana">España</option>
                  <option value="uk">Reino Unido</option>
                  <option value="alemania">Alemania</option>
                  <option value="francia">Francia</option>
                  <option value="otro">Otro destino</option>
                </select>
              </div>

              {/* Mes */}
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-3">
                <Calendar className="w-5 h-5 text-primary-vio mr-3" />
                <select
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                  className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none flex-1"
                >
                  <option value="">Cualquier mes</option>
                  <option value="enero">Enero</option>
                  <option value="febrero">Febrero</option>
                  <option value="marzo">Marzo</option>
                  <option value="abril">Abril</option>
                  <option value="mayo">Mayo</option>
                  <option value="junio">Junio</option>
                  <option value="julio">Julio</option>
                  <option value="agosto">Agosto</option>
                  <option value="septiembre">Septiembre</option>
                  <option value="octubre">Octubre</option>
                  <option value="noviembre">Noviembre</option>
                  <option value="diciembre">Diciembre</option>
                </select>
              </div>

              {/* Qué estás buscando */}
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-3">
                <Compass className="w-5 h-5 text-primary-vio mr-3" />
                <select
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none flex-1"
                >
                  <option value="">{"¿Qué estás buscando?"}</option>
                  <option value="idiomas">Cursos de idiomas</option>
                  <option value="universidad">Carreras universitarias</option>
                  <option value="work-study">Work & Study</option>
                  <option value="profesional">Formación profesional</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Botón de búsqueda */}
              <button
                onClick={handleSearch}
                className="bg-secondari-verde hover:bg-secondari-verde/90 text-primary-vio py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-semibold cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {resultados.length > 0 ? (
            <>
              <p className="text-primary-vio/70 mb-8 text-center">
                {resultados.length} programa{resultados.length !== 1 ? "s" : ""} encontrado{resultados.length !== 1 ? "s" : ""}
              </p>
              
              <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                {resultados.map((curso) => (
                  <div
                    key={curso.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0">
                        <img
                          src={curso.imagen}
                          alt={curso.nombre}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary-turque text-primary-vio text-xs font-semibold px-3 py-1 rounded-full">
                            {curso.tipo}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-sm text-primary-vio/60 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{curso.destino}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-primary-vio mb-2">
                            {curso.nombre}
                          </h3>
                          
                          <p className="text-primary-vio/70 text-sm mb-4 line-clamp-2">
                            {curso.descripcion}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm text-primary-vio/60">desde</span>
                            <span className="text-2xl font-bold text-primary-vio">{curso.precio}</span>
                          </div>
                          
                          <div className="flex gap-3 w-full sm:w-auto">
                            <button
  onClick={() => window.open(curso.url, "_blank")}
  className="flex-1 sm:flex-none px-6 py-3 bg-primary-vio text-white font-semibold rounded-full hover:bg-primary-vio/90 transition-colors"
>
  Pedir cotización
</button>
                            <a
                              href={WHATSAPP_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                            >
                              <MessageCircle className="w-5 h-5" />
                              {"Asesoría inmediata"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-16 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-primary-turque/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-12 h-12 text-primary-vio" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-primary-vio mb-4">
                No encontramos programas con esos filtros
              </h2>
              
              <p className="text-primary-vio/70 mb-8 leading-relaxed">
                {"No te preocupes, tenemos muchas opciones para ti. Nuestros asesores pueden ayudarte a encontrar el programa perfecto según tus necesidades y objetivos."}
              </p>
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Hablar con un asesor
              </a>
              
              <p className="text-primary-vio/50 text-sm mt-4">
                Respuesta inmediata por WhatsApp
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function BusquedaPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-vio"></div>
      </main>
    }>
      <BusquedaContent />
    </Suspense>
  )
}
