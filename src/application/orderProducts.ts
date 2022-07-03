import { Cart } from "../domain/cart"
import { createOrder } from "../domain/order"
import { User } from "../domain/user"
import { useNotifier } from "../services/notificationService"
import { usePayment } from "../services/paymentService"
import { useCartStorage, useOrdersStorage } from "../services/storageService"

export function useOrderProducts() {
  const notifier = useNotifier()
  const payment = usePayment()
  const orderStorage = useOrdersStorage()
  const cartStorage = useCartStorage()

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart)

    const result = await payment.tryPay(order.total)
    if (!result) return notifier.notify("payment failed")

    const { orders } = orderStorage
    orderStorage.updateOrders([...orders, order])
    cartStorage.emptyCart()
  }

  return { orderProducts }
}
