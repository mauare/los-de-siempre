export interface Category {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  /** Ruta a una imagen real en /public/images/categorias/. null hasta tener la foto definitiva. */
  image: string | null;
}

export const categories: Category[] = [
  {
    slug: 'cafeteria',
    name: 'Cafetería',
    emoji: '☕',
    description: 'Café de especialidad para disfrutar solo o acompañado.',
    image: null,
  },
  {
    slug: 'desayunos',
    name: 'Desayunos',
    emoji: '🥐',
    description: 'Para arrancar el día bien, en el local o para llevar.',
    image: null,
  },
  {
    slug: 'comidas-rapidas',
    name: 'Comidas rápidas',
    emoji: '🍔',
    description: 'Hamburguesas, sándwiches y mucho más.',
    image: null,
  },
  {
    slug: 'viandas',
    name: 'Viandas',
    emoji: '🍱',
    description: 'Comida casera lista para llevar.',
    image: null,
  },
  {
    slug: 'pasteleria',
    name: 'Pastelería',
    emoji: '🍰',
    description: 'Dulces recién hechos para acompañar tu café.',
    image: null,
  },
];
