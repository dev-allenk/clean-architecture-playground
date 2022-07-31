import { AlarmStorageService, UserStorageService } from "../application/ports"
import { useStore } from "./store"

export function useAlarmStorage(): AlarmStorageService {
  return useStore().alarm
}

export function useUserStorage(): UserStorageService {
  return useStore().user
}
