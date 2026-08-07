export const site = {
  name: 'Los de Siempre',
  shortName: 'LDS',
  tagline: 'Calidad + Precio + Mucho sabor',
  description:
    'Cafetería, desayunos, comidas rápidas y delivery en el barrio de Liniers.',
  address: {
    street: 'Lisandro de la Torre 46',
    neighborhood: 'Liniers',
    city: 'Buenos Aires',
    country: 'Argentina',
    // TODO: sumar coordenadas exactas (lat/lng) cuando estén disponibles, para el mapa embebido.
    mapsQuery: 'Lisandro de la Torre 46, Liniers, Buenos Aires',
  },
  phone: {
    e164: '+541140924372',
    display: '+54 11 4092-4372',
  },
  whatsapp: {
    number: '541140924372',
    getLink: (message = 'Hola! Quiero hacer un pedido 🙂') =>
      `https://wa.me/541140924372?text=${encodeURIComponent(message)}`,
  },
  hours: [
    { days: 'Lunes a viernes', range: '8:30 a 17:00' },
    { days: 'Sábados', range: '9:00 a 15:00' },
    { days: 'Domingos', range: 'Cerrado' },
  ],
  social: {
    instagram: 'https://instagram.com/Losdesiempre.ya',
    // TODO: sumar Facebook cuando el usuario lo confirme.
    facebook: null as string | null,
  },
  delivery: {
    ownRadius: 'Delivery propio hasta 4 cuadras.',
    outsideRadius: 'Fuera de ese radio, a través de PedidosYa.',
  },
} as const;
