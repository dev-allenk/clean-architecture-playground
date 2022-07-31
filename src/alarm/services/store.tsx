import React, { useState } from "react"
import { useContext } from "react"
import { AlarmStorageService, UserStorageService } from "../application/ports"
import { Alarm } from "../domain/alarm"
import { User } from "../domain/user"

interface ContextType {
  alarm: AlarmStorageService
  user: UserStorageService
}

const StoreContext = React.createContext({} as ContextType)
export const useStore = () => useContext(StoreContext)

export function Provider({ children }: { children: React.ReactNode }) {
  const [alarms, setAlarms] = useState<Alarm[]>([])
  const [user, setUser] = useState<User | null>(null)

  const value = {
    alarm: {
      alarms,
      update: (newAlarms: Alarm[]) => setAlarms(newAlarms),
    },
    user: {
      user,
      update: (newUser: User | null) => setUser(newUser),
    },
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
