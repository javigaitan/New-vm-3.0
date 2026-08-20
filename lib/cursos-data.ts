export interface Curso {
  id: number
  nombre: string
  tipo: string
  destino: string
  precio: string
  descripcion: string
  imagen: string
  url: string
  duracion:string
}

export const cursos: Curso[] = [
  {
    id: 1,
    nombre: "Work & Study",
    tipo: "Curso de idiomas",
    destino: "Irlanda",
    duracion: "25-semanas",
    precio: "USD 4.000",
    descripcion: "Programa de inglés en Dublín con inmersión total y actividades culturales incluidas.",
    imagen: "/images/dublin-irlanda.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 2,
    nombre: "Francés Básico",
    tipo: "Curso de idiomas",
    destino: "Francia",
    duracion: "4-semanas",
    precio: "USD 2.800",
    descripcion: "Aprende francés en París con profesores nativos y experiencias culturales únicas.",
    imagen: "/par-s-francia-torre-eiffel-ciudad.jpg",
    url:'/destino-francia',
  },
  {
    id: 3,
    nombre: "Work & Study ",
    tipo: "Work&Study",
    destino: "Irlanda",
    duracion: "25-semanas",
    precio: "USD 2.000",
    descripcion: "Estudia inglés y trabaja legalmente en Irlanda. Incluye visa de trabajo y asistencia laboral.",
    imagen: "/images/galway-irlanda.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 4,
    nombre: "Work & Study Inglés",
    tipo: "Work&Study",
    destino: "Malta",
        duracion: "4-semanas",

    precio: "USD 6.500",
    descripcion: "Combina estudio de inglés con trabajo en el paraíso mediterráneo de Malta.",
    imagen: "/images/valletta-malta.jpg",
    url:'/destino-malta',
  },
  {
    id: 5,
    nombre: "Máster Marketing Digital",
    tipo: "Universidad",
    destino: "Espana",
    duracion: "4-semanas",
    precio: "USD 5.800",
    descripcion: "En este máster adquieres una visión global para definir las estrategias y desarrollar las acciones de marketing y aprendes de forma práctica cómo poner en marcha tu plan de marketing digital para llegar así a tu público objetivo, dominando las técnicas, herramientas y competencias actuales del entorno digital.",
    imagen: "/images/barcelona-espana.jpg",
    url:'/destino-espana',
  },
  {
    id: 6,
    nombre: "Máster Community Management y Social Media Strategy",
    tipo: "Universidad",
    destino: "Espana",
    duracion: "25-semanas",
    precio: "USD 4.028",
    descripcion: "Un máster especializado que te permitirá liderar y desarrollar la estrategia de contenidos de una marca o empresa.",
    imagen: "/images/berlin-alemania.jpg",
    url:'/destino-espana',
  },
  {
    id: 7,
    nombre: "UX/UI",
    tipo: "Master",
    destino: "Espana",
    precio: "USD 4.680",
    duracion: "4-semanas",
    descripcion: "11 meses",
    imagen: "/images/valencia-espana.jpg",
    url:'/destino-espana',
  },
  {
    id: 8,
    nombre: "Inglés General",
    tipo: "Curso de idiomas",
    destino: "Malta",
    precio: "USD 3.720",
    duracion: "4-semanas",
    descripcion: "Aprende inglés con profesores nativos y experiencias culturales únicas.",
    imagen: "/images/sliema-malta.jpg",
    url:'/destino-malta',
  },
  {
    id: 9,
    nombre: "Programa Cultural y de Idiomas",
    tipo: "Otros",
    destino: "Reino Unido",
    precio: "USD 3.900",
    duracion: "4-semanas",
    descripcion: "Experiencia cultural completa en UK con clases de inglés y actividades turísticas.",
    imagen: "/images/londres-uk.jpg",
    url:'/destino-uk',
  },
  {
    id: 10,
    nombre: "Curso Introductorio Multidestino",
    tipo: "Otros",
    destino: "Otro",
    precio: "USD 2.500",
    duracion: "4-semanas",
    descripcion: "Programa flexible para explorar diferentes destinos y encontrar tu lugar ideal.",
    imagen: "/images/cork-irlanda.jpg",
    url:'/destino-irlanda',
  },
  {
    id: 10,
    nombre: "Curso Introductorio Multidestino",
    tipo: "Otros",
    destino: "Francia",
    precio: "USD 2.500",
    duracion: "4-semanas",
    descripcion: "Programa flexible para explorar diferentes destinos y encontrar tu lugar ideal.",
    imagen: "/images/cork-irlanda.jpg",
    url:'/destino-francia',
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

export const duracionMap: Record<string, string> = {
  "4-semanas": "4 semanas",
  "8-semanas": "8 semanas",
  "12-semanas": "12 semanas",
  "16-semanas": "16 semanas",
  "25-semanas": "25 semanas",
  "1-ano": "1 año",
  "2-anos": "2 años",
}