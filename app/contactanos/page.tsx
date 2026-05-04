"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

declare global {
  interface Window {
    hbspt: any
  }
}

export default function ContactanosPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const existingScript = document.querySelector('script[src="//js-eu1.hsforms.net/forms/embed/v2.js"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
      script.type = "text/javascript"
      script.charset = "utf-8"
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "26265942",
            formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
            target: "#hubspotForm",
          })
        }
      }
      document.body.appendChild(script)
    } else {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26265942",
          formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
          target: "#hubspotForm",
        })
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-primary-vio mt-6 text-center mx-3 lg:mx-0">
        Contactactanos
      </h1>

      <section className="min-h-[60vh] py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <div id="hubspotForm"></div>
        </div>
      </section>

      <Footer />
    </>
  )
}
