import { useState } from "react"
import { MapPin, Clock, Compass, Search } from "lucide-react"

const destinos = [
  { value: "irlanda", label: "Irlanda" },
  { value: "malta", label: "Malta" },
  { value: "espana", label: "España" },
  { value: "uk", label: "Reino Unido" },
  { value: "alemania", label: "Alemania" },
  { value: "francia", label: "Francia" },
  { value: "otro", label: "Otro destino" },
]

const duraciones = [
  { value: "4-semanas", label: "4 semanas" },
  { value: "8-semanas", label: "8 semanas" },
  { value: "12-semanas", label: "12 semanas" },
  { value: "16-semanas", label: "16 semanas" },
  { value: "25-semanas", label: "25 semanas" },
  { value: "1-ano", label: "1 año" },
  { value: "2-anos", label: "2 años" },
]

const intereses = [
  { value: "idiomas", label: "Cursos de idiomas" },
  { value: "universidad", label: "Carreras universitarias" },
  { value: "work-study", label: "Work & Study" },
  { value: "profesional", label: "Formación profesional" },
  { value: "otro", label: "Otro" },
]

// Un único formulario responsive (antes había una copia para móvil y otra para escritorio)
const fieldClass =
  "flex items-center max-md:border max-md:border-gray-200 max-md:rounded-full px-4 py-3 md:flex-1 md:py-0"
const selectClass =
  "bg-transparent text-primary-vio font-medium focus:outline-none cursor-pointer appearance-none flex-1 md:pr-6"

export function SearchForm() {
  const [destino, setDestino] = useState("")
  const [duracion, setDuracion] = useState("")
  const [busqueda, setBusqueda] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destino) params.append("destino", destino)
    if (duracion) params.append("duracion", duracion)
    if (busqueda) params.append("interes", busqueda)

    window.location.href = `/busqueda?${params.toString()}`
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col space-y-3 p-4 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl md:flex-row md:items-center md:space-y-0 md:rounded-full md:p-2 md:pl-6">
        <div className={`${fieldClass} md:pl-0 md:pr-4 md:border-r md:border-gray-200`}>
          <MapPin className="w-5 h-5 text-primary-vio mr-3 shrink-0" />
          <div className="flex flex-col flex-1">
            <label htmlFor="sf-destino" className="hidden md:block text-xs text-gray-500 font-medium">
              Destino
            </label>
            <select id="sf-destino" value={destino} onChange={(e) => setDestino(e.target.value)} className={selectClass}>
              <option value="">Seleccionar destino</option>
              {destinos.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={`${fieldClass} md:px-4 md:border-r md:border-gray-200`}>
          <Clock className="w-5 h-5 text-primary-vio mr-3 shrink-0" />
          <div className="flex flex-col flex-1">
            <label htmlFor="sf-duracion" className="hidden md:block text-xs text-gray-500 font-medium">
              Duración
            </label>
            <select id="sf-duracion" value={duracion} onChange={(e) => setDuracion(e.target.value)} className={selectClass}>
              <option value="">Seleccionar duración</option>
              {duraciones.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={`${fieldClass} md:px-4`}>
          <Compass className="w-5 h-5 text-primary-vio mr-3 shrink-0" />
          <div className="flex flex-col flex-1">
            <label htmlFor="sf-interes" className="hidden md:block text-xs text-gray-500 font-medium">
              {"¿Qué estás buscando?"}
            </label>
            <select id="sf-interes" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} className={selectClass}>
              <option value="">{"¿Qué estás buscando?"}</option>
              {intereses.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          aria-label="Buscar programas"
          className="flex items-center justify-center gap-2 bg-primary-vio hover:bg-primary-vio/90 text-white font-semibold py-4 rounded-full transition-all duration-300 cursor-pointer md:p-4 md:hover:scale-105"
        >
          <Search className="w-5 h-5 md:w-6 md:h-6" />
          <span className="md:hidden">Buscar</span>
        </button>
      </div>
    </div>
  )
}
