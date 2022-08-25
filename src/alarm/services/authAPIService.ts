import { AuthAPIService } from "../application/ports"
import { User } from "../domain/user"
import { fakeApi } from "./api"

export default function authAPIService(): AuthAPIService {
  return {
    login: (email: string, password: string) => fakeApi(getRandomUser()),
    logout: () => fakeApi(true),
  }
}

function getRandomUser() {
  const rest = Math.floor(Math.random() * 10) % 3
  if (rest === 0) {
    return USER_A
  }
  if (rest === 1) {
    return USER_B
  }
  return USER_C
}

//fake DB
const USER_A: User = {
  id: "1",
  alarms: [{ id: "11111111", isOn: true }],
  hasPurchased: false,
}
const USER_B: User = {
  id: "2",
  alarms: [
    { id: "22222222", isOn: true },
    { id: "33333333", isOn: true },
  ],
  hasPurchased: false,
}
const USER_C: User = {
  id: "3",
  alarms: [
    { id: "123123", isOn: true },
    { id: "234234", isOn: true },
  ],
  hasPurchased: false,
}
