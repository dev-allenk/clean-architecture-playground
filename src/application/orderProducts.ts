import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";
import {
  CartStorageService,
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from "./ports";

const payment: PaymentService = {};
const notifier: NotificationService = {};
const orderStorage: OrdersStorageService = {};
const cartStorage: CartStorageService = {};

async function orderProducts(user: User, cart: Cart) {
  const order = createOrder(user, cart);

  const result = await payment.tryPay(order.total);
  if (!result) return notifier.notify("payment failed");

  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);
  cartStorage.emptyCart();
}
