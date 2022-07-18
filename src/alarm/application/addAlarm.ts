import { useAlarmAPIService } from "../services/alarmAPIService"
import { useNotifier } from "../services/notificationService"
import { useAlarmStorage } from "../services/storageService"
import * as domain from "../domain/alarm"

export function useAlarm() {
  const notifier = useNotifier()
  const api = useAlarmAPIService()
  const storage = useAlarmStorage()

  async function addAlarm() {
    const alarm = domain.createAlarm()
    const result = await api.tryAlarmSetting(alarm)

    if (!result) return notifier.notify("alarm setting failed")

    const { alarms } = storage
    const updatedAlarms = domain.addAlarm(alarms, alarm)
    storage.updateAlarms(updatedAlarms)
  }
  return { addAlarm }
}
