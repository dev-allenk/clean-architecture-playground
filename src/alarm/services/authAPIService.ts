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
  const rest = Math.floor(Math.random() * 10) % 2
  if (rest === 0) {
    return USER_A
  }
  return USER_B
}

//fake DB
const USER_A: User = {
  id: "1",
  alarms: [],
}
const USER_B: User = {
  id: "2",
  alarms: [{ id: "11111111", isOn: true }],
}
