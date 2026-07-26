export interface Testimonial {
  name: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

/**
 * Pendiente: todavía no hay testimonios reales de clientes para publicar.
 * No completar con opiniones inventadas.
 */
export const testimonials: Testimonial[] = [];
