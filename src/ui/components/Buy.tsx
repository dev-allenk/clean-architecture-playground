import React from "react"
import { useOrderProducts } from "../../application/orderProducts"
import { useCartStorage, useUserStorage } from "../../services/storageService"

export default function Buy() {
  const { orderProducts } = useOrderProducts()
  const { user } = useUserStorage()
  const { cart } = useCartStorage()

  async function handleSubmit(e: React.FormEvent) {
    // setLoading(true)
    e.preventDefault()

    // Call the use case function:
    await orderProducts(user!, cart)
    // setLoading(false)
  }
  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </section>
  )
}
