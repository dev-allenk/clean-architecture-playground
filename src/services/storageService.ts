import {
  CartStorageService,
  OrdersStorageService,
  UserStorageService,
} from "../application/ports"
import { useStore } from "./store"

export function useOrdersStorage(): OrdersStorageService {
  return useStore()
}

export function useCartStorage(): CartStorageService {
  return useStore()
}

export function useUserStorage(): UserStorageService {
  return useStore()
}
