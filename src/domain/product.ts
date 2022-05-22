export interface Product {
  id: string;
  title: string;
  price: number;
  toppings: Ingredient[];
}

export function calcTotalPrice(products: Product[]) {
  return products.reduce((acc, cur) => acc + cur.price, 0);
}
