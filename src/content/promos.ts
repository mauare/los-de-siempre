export interface Promo {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
}

/**
 * Pendiente: el negocio todavía tiene que confirmar nombres, precios e
 * ingredientes reales de las promociones. No completar con datos inventados.
 */
export const promos: Promo[] = [];
