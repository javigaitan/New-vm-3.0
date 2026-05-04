"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Send, MessageSquare, Minimize2 } from "lucide-react"
import emailjs from "@emailjs/browser"

interface Message {
  text: string
  isBot: boolean
  timestamp: Date
}

interface UserData {
  nombre: string
  telefono: string
  email: string
  destino: string
  consulta: string
}

function Vagabot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! Soy Vagabot 🌍 ¿Cómo puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [currentStep, setCurrentStep] = useState(0)
  const [userData, setUserData] = useState<UserData>({
    nombre: "",
    telefono: "",
    email: "",
    destino: "",
    consulta: "",
  })
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Inicializar EmailJS con tu Public Key
    emailjs.init("YOUR_PUBLIC_KEY") // Reemplaza con tu Public Key de EmailJS
  }, [])

  const botQuestions = [
    "Te solicito estos datos para que una asesora pueda ponerse en contacto contigo. Para empezar, ¿cuál es tu nombre?",
    "Genial {nombre}! ¿Cuál es tu número de teléfono?",
    "¿Cuál es tu correo electrónico?",
    "Perfecto! ¿A qué destino te gustaría viajar?",
    "Excelente elección! Cuéntame, ¿qué consulta tienes sobre tu viaje a {destino}?",
  ]

  const validateName = (name: string): { valid: boolean; error?: string } => {
    if (!name.trim()) {
      return { valid: false, error: "Por favor, ingresa tu nombre." }
    }
    if (/\d/.test(name)) {
      return { valid: false, error: "El nombre no puede contener números." }
    }
    return { valid: true }
  }

  const validatePhone = (phone: string): { valid: boolean; error?: string } => {
    if (!phone.trim()) {
      return { valid: false, error: "Por favor, ingresa tu número de teléfono." }
    }
    if (!/^\d+$/.test(phone.trim())) {
      return { valid: false, error: "El número de teléfono solo puede contener números." }
    }
    return { valid: true }
  }

  const validateEmail = (email: string): { valid: boolean; error?: string } => {
    if (!email.trim()) {
      return { valid: false, error: "Por favor, ingresa tu correo electrónico." }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return { valid: false, error: "Por favor, ingresa un correo electrónico válido." }
    }
    return { valid: true }
  }

  const validateDestination = (destination: string): { valid: boolean; error?: string } => {
    if (!destination.trim()) {
      return { valid: false, error: "Por favor, ingresa un destino." }
    }
    if (/\d/.test(destination)) {
      return { valid: false, error: "El destino debe ser el nombre de un país o ciudad." }
    }
    return { valid: true }
  }

  const validateConsulta = (consulta: string): { valid: boolean; error?: string } => {
    if (!consulta.trim()) {
      return { valid: false, error: "Por favor, ingresa tu consulta." }
    }
    return { valid: true }
  }

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { text, isBot, timestamp: new Date() }])
  }

  const sendEmail = async () => {
    setIsLoading(true)

    const templateParams = {
      from_name: "Vagabot",
      to_name: "Vaga-Mundo",
      nombre: userData.nombre,
      telefono: userData.telefono,
      email: userData.email,
      destino: userData.destino,
      consulta: userData.consulta,
      reply_to: "consultas@vaga-mundo.com",
    }

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
        templateParams,
      )

      addMessage(
        `¡Gracias ${userData.nombre}! Tu consulta ha sido enviada correctamente. Nuestro equipo se pondrá en contacto contigo pronto. 🎉`,
        true,
      )
    } catch (error) {
      console.error("[v0] Error sending email:", error)
      addMessage(
        "Lo siento, hubo un error al enviar tu consulta. Por favor, intenta contactarnos directamente por WhatsApp.",
        true,
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage = inputValue.trim()

    let validation: { valid: boolean; error?: string } = { valid: true }

    if (currentStep === 0) {
      validation = validateName(userMessage)
    } else if (currentStep === 1) {
      validation = validatePhone(userMessage)
    } else if (currentStep === 2) {
      validation = validateEmail(userMessage)
    } else if (currentStep === 3) {
      validation = validateDestination(userMessage)
    } else if (currentStep === 4) {
      validation = validateConsulta(userMessage)
    }

    if (!validation.valid) {
      addMessage(userMessage, false)
      setTimeout(() => {
        addMessage(validation.error!, true)
      }, 300)
      setInputValue("")
      return
    }

    addMessage(userMessage, false)
    setInputValue("")

    // Actualizar datos del usuario según el paso actual
    const newUserData = { ...userData }
    if (currentStep === 0) {
      newUserData.nombre = userMessage
      setUserData(newUserData)
    } else if (currentStep === 1) {
      newUserData.telefono = userMessage
      setUserData(newUserData)
    } else if (currentStep === 2) {
      newUserData.email = userMessage
      setUserData(newUserData)
    } else if (currentStep === 3) {
      newUserData.destino = userMessage
      setUserData(newUserData)
    } else if (currentStep === 4) {
      newUserData.consulta = userMessage
      setUserData(newUserData)
    }

    // Avanzar al siguiente paso
    const nextStep = currentStep + 1

    if (nextStep < botQuestions.length) {
      setTimeout(() => {
        let nextQuestion = botQuestions[nextStep]
        // Personalizar mensaje con datos del usuario
        nextQuestion = nextQuestion.replace("{nombre}", newUserData.nombre).replace("{destino}", newUserData.destino)
        addMessage(nextQuestion, true)
        setCurrentStep(nextStep)
      }, 500)
    } else {
      // Enviar email con los datos recopilados
      setTimeout(() => {
        sendEmail()
      }, 500)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        text: "¡Hola! Soy Vagabot 🌍 ¿Cómo puedo ayudarte hoy?",
        isBot: true,
        timestamp: new Date(),
      },
    ])
    setCurrentStep(0)
    setUserData({
      nombre: "",
      telefono: "",
      email: "",
      destino: "",
      consulta: "",
    })
    setTimeout(() => {
      addMessage(botQuestions[0], true)
    }, 500)
  }

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true)
            if (currentStep === 0 && messages.length === 1) {
              setTimeout(() => {
                addMessage(botQuestions[0], true)
              }, 500)
            }
          }}
          className="fixed bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#6B21A8] text-white shadow-lg hover:scale-110 transition-transform hover:bg-[#7C3AED]"
          aria-label="Abrir Vagabot"
        >
          <MessageSquare className="h-7 w-7" />
        </button>
      )}

      {/* Ventana del chat */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-24 z-50 flex flex-col bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized ? "h-16 w-80" : "h-[500px] w-80 md:w-96"
          }`}
        >
          {/* Header del chat */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#6B21A8] to-[#7C3AED] text-white px-4 py-3 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Vagabot</h3>
                <p className="text-xs opacity-90">Asistente virtual</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                aria-label="Minimizar"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setIsMinimized(false)
                }}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Área de mensajes */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.isBot ? "bg-white text-gray-800 shadow-sm" : "bg-[#6B21A8] text-white"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input de mensaje */}
              <div className="p-4 bg-white border-t rounded-b-2xl">
                {currentStep < botQuestions.length ? (
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Escribe tu respuesta..."
                      className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-transparent"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !inputValue.trim()}
                      className="bg-[#6B21A8] text-white rounded-full p-2 hover:bg-[#7C3AED] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Enviar mensaje"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={handleReset}
                    className="w-full bg-[#00E5B5] text-[#6B21A8] font-semibold rounded-full py-2 hover:bg-[#00D4A6] transition-colors"
                  >
                    Nueva consulta
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Vagabot
export { Vagabot }
