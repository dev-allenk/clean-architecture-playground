import { AuthenticationService } from "../application/ports"
import { fakeApi } from "./api"

export function useAuth(): AuthenticationService {
  return {
    auth(name: string, email: string) {
      return fakeApi({
        name,
        email,
        id: "sample-user-id",
        allergies: ["cocoa", "cherry"],
        preferences: ["marshmallow", "peanuts"],
      })
    },
  }
}
