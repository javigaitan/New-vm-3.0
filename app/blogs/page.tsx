import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const allBlogPosts = [
  {
    title: "Irlanda: El destino perfecto para estudiar inglés",
    excerpt: "Descubre por qué Irlanda se ha convertido en el destino favorito de estudiantes latinoamericanos",
    image: "/dublin-ireland-cityscape.jpg",
    href: "/irlanda-el-destino-perfecto",
    date: "15 Mar 2024",
    category: "Destinos",
  },
  {
    title: "Cómo estudiar y trabajar en Irlanda",
    excerpt: "Guía completa sobre los programas Work & Study y cómo aprovechar al máximo tu experiencia",
    image: "/students-working-in-cafe-ireland.jpg",
    href: "/estudia-trabaja-irlanda",
    date: "10 Mar 2024",
    category: "Work & Study",
  },
  {
    title: "Estudia gratis en Irlanda: Todo lo que necesitas saber",
    excerpt: "Conoce las opciones y requisitos para estudiar en Irlanda sin costo",
    image: "/university-campus-ireland.jpg",
    href: "/irlanda-gratuito",
    date: "5 Mar 2024",
    category: "Educación",
  },
  {
    title: "Gastronomía irlandesa: Qué comer en Irlanda",
    excerpt: "Descubre los platos típicos y la cultura culinaria de Irlanda",
    image: "/irish-food-pub-meal.jpg",
    href: "/gastronomia-irlanda",
    date: "1 Mar 2024",
    category: "Cultura",
  },
  {
    title: "Los lugares más increíbles para visitar en Irlanda",
    excerpt: "Una guía de los mejores destinos turísticos irlandeses que no puedes perderte",
    image: "/cliffs-of-moher-ireland.jpg",
    href: "/lugares-increibles",
    date: "25 Feb 2024",
    category: "Turismo",
  },
  {
    title: "Conducción de autos en Irlanda: Guía completa",
    excerpt: "Todo lo que necesitas saber sobre conducir en Irlanda por primera vez",
    image: "/dublin-city-traffic-ireland.jpg",
    href: "/conduccion-autos-irlanda",
    date: "20 Feb 2024",
    category: "Guías",
  },
  {
    title: "Deportes en Irlanda: Más allá del fútbol",
    excerpt: "Conoce los deportes tradicionales irlandeses y la cultura deportiva del país",
    image: "/gaelic-football-hurling.jpg",
    href: "/deportes-irlanda",
    date: "15 Feb 2024",
    category: "Cultura",
  },
]

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <section className="bg-primary-vio py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Blog</h1>
              <p className="text-lg text-white/90">
                Consejos, guías y toda la información que necesitas para tu experiencia internacional
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allBlogPosts.map((post) => (
                <Link key={post.href} href={post.href}>
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-secondary-tur">{post.category}</span>
                        <span className="text-xs text-text/60">{post.date}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-primary-vio group-hover:text-secondary-tur transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
