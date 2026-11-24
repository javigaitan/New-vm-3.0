import { NavbarTransparent } from "@/components/navbar-transparent"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroBanner } from "@/components/hero-banner"
import { ServiciosNew } from "@/components/servicios-new"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { BenefitsCarousel } from "@/components/benefits-carousel"
import { benefits } from "@/data/benefits"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Vaga-Mundo | Agencia de estudios y trabajo en el extranjero" },
  description:
    "Estudia idiomas, trabaja o haz tu carrera en Irlanda, Malta, España, Reino Unido y más. Asesoría gratuita y acompañamiento desde nuestra sede en Dublín.",
  alternates: { canonical: "/" },
}



export default function HomePage() {
  return (
    <>
      <NavbarTransparent />
      <WhatsAppButton />
      {/*<Vagabot />*/}
      <main>
        <HeroBanner />
        <ServiciosNew />
        {/* <VMFacts /> 
        {/* <GoogleReviews /> */}
        {/* <Blogs />*/}
<BenefitsCarousel benefits={benefits} />    
  <Partners />
      </main>
      <Footer />
    </>
  )
}
