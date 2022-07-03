import { useAuth } from "../services/authService"
import { useUserStorage } from "../services/storageService"

export function useAuthenticate() {
  const auth = useAuth()
  const userStorage = useUserStorage()

  async function authenticate(name: string, email: string) {
    const user = await auth.auth(name, email)
    userStorage.updateUser(user)
  }
  return { user: userStorage.user, authenticate }
}
