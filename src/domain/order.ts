import { Cart } from "./cart";
import { calcTotalPrice } from "./product";
import { User } from "./user";

export type OrderStatus = "new" | "delivery" | "completed";

export interface Order {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
  total: number;
}

export function createOrder(user: User, cart: Cart) {
  return {
    user: user.id,
    cart,
    created: new Date().toISOString(),
    status: "new",
    total: calcTotalPrice(cart.products),
  };
}
