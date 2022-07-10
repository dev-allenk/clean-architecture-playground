import React, { useState } from "react"
import { useContext } from "react"
import { Alarm } from "../domain/alarm"

const StoreContext = React.createContext<any>({})
export const useStore = () => useContext(StoreContext)

export function Provider({ children }: { children: React.ReactNode }) {
  const [alarm, setAlarm] = useState<Alarm>({ isOn: false })

  const value = {
    alarm,
    updateAlarm: (value: boolean) => setAlarm({ isOn: value }),
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
