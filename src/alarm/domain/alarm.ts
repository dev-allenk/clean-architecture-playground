export interface Alarm {
  isOn: boolean
}

export function updateAlarm(alarm: Alarm, value: boolean) {
  return (alarm.isOn = value)
}
