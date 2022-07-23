import React, { useState } from "react"
import { useContext } from "react"
import { AlarmStorageService } from "../application/ports"
import { Alarm } from "../domain/alarm"

type ContextType = AlarmStorageService

const StoreContext = React.createContext({} as ContextType)
export const useStore = () => useContext(StoreContext)

export function Provider({ children }: { children: React.ReactNode }) {
  const [alarms, setAlarms] = useState<Alarm[]>([])

  const value = {
    alarms,
    update: (newAlarms: Alarm[]) => setAlarms(newAlarms),
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
