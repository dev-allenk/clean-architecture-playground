import { Alarm } from "../domain/alarm"
import { User } from "../domain/user"

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

export interface UserStorageService {
  user: User | null
  update(user: User | null): void
}

export interface AuthAPIService {
  login(email: string, password: string): Promise<User>
  logout(): Promise<boolean>
}
