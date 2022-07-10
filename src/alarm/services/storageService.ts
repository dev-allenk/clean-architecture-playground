import { AlarmStorageService } from "../application/ports"
import { useStore } from "./store"

export function useAlarmStorage(): AlarmStorageService {
  return useStore()
}
