import { Alarm } from "../domain/alarm"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

// Define the initial state using that type
const initialState: Alarm[] = []

export const alarmSlice = createSlice({
  name: "alarms",
  initialState,
  reducers: {
    update: (_: Alarm[], action: PayloadAction<Alarm[]>) => action.payload,
  },
})

export const store = configureStore({
  reducer: {
    alarms: alarmSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
