import { Alarm } from "../domain/alarm"

export interface AlarmStorageService {
  alarms: Alarm[]
  update(updatedAlarms: Alarm[]): void
}

export interface NotificationService {
  notify(message: string): void
}

export interface AlarmAPIService {
  tryAlarmSetting(alarm: Alarm): Promise<boolean>
  tryAlarmDelete(alarm: Alarm): Promise<boolean>
}
