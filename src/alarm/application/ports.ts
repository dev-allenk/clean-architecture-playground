import { Alarm } from "../domain/alarm"

export interface AlarmStorageService {
  alarm: Alarm
  updateAlarm(value: boolean): void
}

export interface NotificationService {
  notify(message: string): void
}

export interface AlarmAPIService {
  tryAlarmSetting(value: boolean): Promise<boolean>
}
