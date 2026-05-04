import { NavbarTransparent } from "@/components/navbar-transparent"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Vagabot } from "@/components/vagabot"
import { HeroBanner } from "@/components/hero-banner"
import { ServiciosNew } from "@/components/servicios-new"
import { VMFacts } from "@/components/vm-facts"
import { GoogleReviews } from "@/components/google-reviews"
import { Blogs } from "@/components/blogs"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { BenefitsCarousel } from "@/components/benefits-carousel"
import { benefits } from "@/data/benefits"


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
