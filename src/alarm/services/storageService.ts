import { AlarmStorageService } from "../application/ports"
import { alarmSlice, useAppDispatch, useAppSelector } from "./store"
import * as domain from "../domain/alarm"

export function useAlarmStorage(): AlarmStorageService {
  const alarms = useAppSelector((state) => state.alarms)
  const dispatch = useAppDispatch()

  const update = (newAlarms: domain.Alarm[]) => {
    dispatch(alarmSlice.actions.update(newAlarms))
  }

  return { alarms, update }
}
