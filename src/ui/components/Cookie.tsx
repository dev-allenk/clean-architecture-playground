import React from "react"
import { useAddToCart } from "../../application/addToCart"
import { Product } from "../../domain/product"
import { useUserStorage } from "../../services/storageService"

interface Props {
  cookie: Product
}

export default function Cookie({ cookie }: Props) {
  const { user } = useUserStorage()
  const { addToCart } = useAddToCart()

  return (
    <div>
      Cookie
      {!!user && (
        <button type="button" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} $
        </button>
      )}
    </div>
  )
}
