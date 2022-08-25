import { useAlarmAPIService } from "../services/alarmAPIService"
import { useNotifier } from "../services/notificationService"
import { useAlarmStorage, useUserStorage } from "../services/storageService"
import * as domain from "../domain/alarm"

export function useAlarm() {
  const notifier = useNotifier()
  const api = useAlarmAPIService()
  const storage = useAlarmStorage()
  const userStorage = useUserStorage()

  async function addAlarm() {
    if (!userStorage.user?.hasPurchased)
      return notifier.notify("구매자만 이용가능합니다.")

    const alarm = domain.createAlarm()
    const result = await api.tryAlarmSetting(alarm)

    if (!result) return notifier.notify("alarm setting failed")

    const { alarms } = storage
    const updatedAlarms = domain.addAlarm(alarms, alarm)
    storage.update(updatedAlarms)
  }

  async function deleteAlarm(alarm: domain.Alarm) {
    if (!userStorage.user?.hasPurchased)
      return notifier.notify("구매자만 이용가능합니다.")

    const result = await api.tryAlarmDelete(alarm)

    if (!result) return notifier.notify("alarm setting failed")

    const { alarms } = storage
    const updatedAlarms = domain.deleteAlarm(alarms, alarm)
    storage.update(updatedAlarms)
  }
  return { addAlarm, deleteAlarm }
}
