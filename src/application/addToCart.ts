import { addProduct } from "../domain/cart"
import { Product } from "../domain/product"
import { hasAllergy, User } from "../domain/user"
import { useNotifier } from "../services/notificationService"
import { useCartStorage } from "../services/storageService"

export function useAddToCart() {
  const cartStorage = useCartStorage()
  const notifier = useNotifier()

  function addToCart(user: User, product: Product) {
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item))
    if (isDangerous) return notifier.notify("This item has allergy")

    const { cart } = cartStorage
    const updatedCart = addProduct(cart, product)
    cartStorage.updateCart(updatedCart)
  }

  return { addToCart }
}
