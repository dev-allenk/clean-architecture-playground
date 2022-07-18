import { fakeApi } from "../../services/api"
import { AlarmAPIService } from "../application/ports"
import { Alarm } from "../domain/alarm"

export function useAlarmAPIService(): AlarmAPIService {
  return { tryAlarmSetting: (alarm: Alarm) => fakeApi(true) }
}
