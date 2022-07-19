import { fakeApi } from "./api"
import { AlarmAPIService } from "../application/ports"
import { Alarm } from "../domain/alarm"

export function useAlarmAPIService(): AlarmAPIService {
  return {
    tryAlarmSetting: (alarm: Alarm) => fakeApi(true),
    tryAlarmDelete: (alarm: Alarm) => fakeApi(true),
  }
}
