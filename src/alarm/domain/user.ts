import { Alarm } from "./alarm"

export interface User {
  id: string
  alarms: Alarm[]
  hasPurchased: boolean
}
