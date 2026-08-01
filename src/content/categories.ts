export interface Subcategory {
  slug: string;
  name: string;
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  /** Ruta a una imagen real en /public/images/categorias/. null hasta tener la foto definitiva. */
  image: string | null;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    slug: 'cafeteria',
    name: 'Cafetería',
    emoji: '',
    description: 'Café de especialidad para disfrutar solo o acompañado.',
    image: '/images/categorias/cafe.jpeg',
    subcategories: [
      { slug: 'desayunos', name: 'Desayunos' },
      { slug: 'meriendas', name: 'Meriendas' },
    ],
  },
  {
    slug: 'hamburgueseria',
    name: 'Hamburguesería',
    emoji: '',
    description: 'Hamburguesas, sándwiches y mucho más.',
    image: '/images/categorias/hamburguesa.jpeg',
    subcategories: [],
  },
  {
    slug: 'sandwicheria',
    name: 'Sándwichería',
    emoji: '',
    description: 'Sándwiches caseros para cualquier momento del día.',
    image: '/images/categorias/sandwicheria.jpeg',
    subcategories: [],
  },
  
];
