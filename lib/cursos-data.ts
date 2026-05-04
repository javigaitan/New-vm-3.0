export interface Curso {
  id: number
  nombre: string
  tipo: string
  destino: string
  precio: string
  descripcion: string
  imagen: string
  url: string
}

export const cursos: Curso[] = [
  {
    id: 1,
    nombre: "Inglés General ",
    tipo: "Curso de idiomas",
    destino: "Irlanda",
    precio: "USD 3.200",
    descripcion: "Programa de inglés en Dublín con inmersión total y actividades culturales incluidas.",
    imagen: "/images/dublin-irlanda.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 2,
    nombre: "Francés Básico",
    tipo: "Curso de idiomas",
    destino: "Francia",
    precio: "USD 2.800",
    descripcion: "Aprende francés en París con profesores nativos y experiencias culturales únicas.",
    imagen: "/par-s-francia-torre-eiffel-ciudad.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 3,
    nombre: "Work & Study ",
    tipo: "Work&Study",
    destino: "Irlanda",
    precio: "USD 7.800",
    descripcion: "Estudia inglés y trabaja legalmente en Irlanda. Incluye visa de trabajo y asistencia laboral.",
    imagen: "/images/galway-irlanda.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 4,
    nombre: "Work & Study Inglés",
    tipo: "Work&Study",
    destino: "Malta",
    precio: "USD 6.500",
    descripcion: "Combina estudio de inglés con trabajo en el paraíso mediterráneo de Malta.",
    imagen: "/images/valletta-malta.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 5,
    nombre: "Máster Marketing Digital",
    tipo: "Universidad",
    destino: "España",
    precio: "USD 5.800",
    descripcion: "En este máster adquieres una visión global para definir las estrategias y desarrollar las acciones de marketing y aprendes de forma práctica cómo poner en marcha tu plan de marketing digital para llegar así a tu público objetivo, dominando las técnicas, herramientas y competencias actuales del entorno digital.",
    imagen: "/images/barcelona-espana.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 6,
    nombre: "Máster Community Management y Social Media Strategy",
    tipo: "Universidad",
    destino: "España",
    precio: "USD 4.028",
    descripcion: "Un máster especializado que te permitirá liderar y desarrollar la estrategia de contenidos de una marca o empresa.",
    imagen: "/images/berlin-alemania.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 7,
    nombre: "DIPLOMA EN GESTIÓN DE LA HOSPITALIDAD Y SERVICIOS DE SALA",
    tipo: "Formacion profesional",
    destino: "España",
    precio: "USD 3.290",
    descripcion: "FP en gastronomía y artes culinarias en España, cuna de la cocina mediterránea.",
    imagen: "/images/valencia-espana.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 8,
    nombre: "Inglés General",
    tipo: "Curso de idiomas",
    destino: "Malta",
    precio: "USD 3.720",
    descripcion: "Aprende inglés con profesores nativos y experiencias culturales únicas.",
    imagen: "/images/sliema-malta.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 9,
    nombre: "Programa Cultural y de Idiomas",
    tipo: "Otros",
    destino: "Reino Unido",
    precio: "USD 3.900",
    descripcion: "Experiencia cultural completa en UK con clases de inglés y actividades turísticas.",
    imagen: "/images/londres-uk.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 10,
    nombre: "Curso Introductorio Multidestino",
    tipo: "Otros",
    destino: "Otro",
    precio: "USD 2.500",
    descripcion: "Programa flexible para explorar diferentes destinos y encontrar tu lugar ideal.",
    imagen: "/images/cork-irlanda.jpg",
    url:'/destino-irlanda',
  },
]

// Mapping from SearchForm select values to JSON destino values
export const destinoMap: Record<string, string> = {
  irlanda: "Irlanda",
  malta: "Malta",
  espana: "España",
  uk: "Reino Unido",
  alemania: "Alemania",
  francia: "Francia",
  otro: "Otro",
}

// Mapping from SearchForm select values to JSON tipo values
export const tipoMap: Record<string, string> = {
  idiomas: "Curso de idiomas",
  universidad: "Universidad",
  "work-study": "Work&Study",
  profesional: "Formacion profesional",
  otro: "Otros",
}
