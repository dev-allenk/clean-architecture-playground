import { fakeApi } from "../../services/api"
import { AlarmAPIService } from "../application/ports"

export function useAlarmAPIService(): AlarmAPIService {
  return { tryAlarmSetting: (value: boolean) => fakeApi(true) }
}
