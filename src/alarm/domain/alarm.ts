export interface Alarm {
  id: string
  isOn: boolean
}

export function createAlarm(): Alarm {
  return {
    id: Date.now().toString(),
    isOn: true,
  }
}

export function addAlarm(alarms: Alarm[], newAlarm: Alarm) {
  return [...alarms, newAlarm]
}

export function updateAlarm(alarms: Alarm[], newAlarm: Alarm) {
  return alarms.map((alarm) => (alarm.id === newAlarm.id ? newAlarm : alarm))
}
