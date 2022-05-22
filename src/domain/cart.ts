import { Product } from "./product";

export interface Cart {
  products: Product[];
}

export function addProduct(cart: Cart, product: Product) {
  return { ...cart, products: [...cart.products, product] };
}

export function contains(cart: Cart, product: Product) {
  return cart.products.some(({ id }) => id === product.id);
}
