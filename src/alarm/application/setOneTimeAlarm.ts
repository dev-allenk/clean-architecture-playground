import { useAlarmAPIService } from "../services/alarmAPIService"
import { useNotifier } from "../services/notificationService"
import { useAlarmStorage } from "../services/storageService"

export function useSetOneTimeAlarm() {
  const notifier = useNotifier()
  const api = useAlarmAPIService()
  const storage = useAlarmStorage()

  async function setOneTimeAlarm(value: boolean) {
    const result = await api.tryAlarmSetting(value)

    if (!result) return notifier.notify("alarm setting failed")

    storage.updateAlarm(value)
  }
  return { setOneTimeAlarm }
}
