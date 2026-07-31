import { useState } from "react"
import { MapPin, Clock, Compass, Search } from "lucide-react"

export function SearchForm() {
  const [destino, setDestino] = useState("")
  const [duracion, setDuracion] = useState("")
  const [busqueda, setBusqueda] = useState("")

  const handleSearch = () => {
    // Redirigir a contactanos con los parámetros seleccionados
    const params = new URLSearchParams()
    if (destino) params.append("destino", destino)
    if (duracion) params.append("duracion", duracion)
    if (busqueda) params.append("interes", busqueda)
    
    window.location.href = `/busqueda?${params.toString()}`
  }

  return (
    <div
      name="search_form"
      className="w-full max-w-4xl mx-auto"
    >
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
              <option value="">Seleccionar destino</option>
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

        {/* Duración de curso */}
        <div className="flex items-center flex-1 border-r border-gray-200 px-4">
          <Clock className="w-5 h-5 text-primary-vio mr-3" />
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 font-medium">Duración</label>
            <select
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none pr-6"
            >
              <option value="">Seleccionar duración</option>
              <option value="4-semanas">4 semanas</option>
              <option value="8-semanas">8 semanas</option>
              <option value="12-semanas">12 semanas</option>
              <option value="16-semanas">16 semanas</option>
              <option value="25-semanas">25 semanas</option>
              <option value="1-ano">1 año</option>
              <option value="2-anos">2 años</option>
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
              <option value="">Seleccionar</option>
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
            <option value="">Seleccionar destino</option>
            <option value="irlanda">Irlanda</option>
            <option value="malta">Malta</option>
            <option value="espana">España</option>
            <option value="uk">Reino Unido</option>
            <option value="alemania">Alemania</option>
            <option value="francia">Francia</option>
            <option value="otro">Otro destino</option>
          </select>
        </div>

  

        {/* Duración de curso */}
        <div className="flex items-center border border-gray-200 rounded-full px-4 py-3">
          <Clock className="w-5 h-5 text-primary-vio mr-3" />
          <select
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            className="bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none flex-1"
          >
            <option value="">Seleccionar duración</option>
            <option value="4-semanas">4 semanas</option>
            <option value="8-semanas">8 semanas</option>
            <option value="12-semanas">12 semanas</option>
            <option value="16-semanas">16 semanas</option>
            <option value="25-semanas">25 semanas</option>
            <option value="1-ano">1 año</option>
            <option value="2-anos">2 años</option>
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
          className="bg-primary-vio hover:bg-primary-vio/90 text-white py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-semibold cursor-pointer"
        >
          <Search className="w-5 h-5" />
          Buscar
        </button>
      </div>
    </div>
  )
}