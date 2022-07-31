import authAPIService from "../services/authAPIService"
import { useNotifier } from "../services/notificationService"
import { useUserStorage } from "../services/storageService"

export default function useAuth() {
  const storage = useUserStorage()
  const api = authAPIService()
  const notifier = useNotifier()

  const login = async (email: string, password: string) => {
    try {
      const user = await api.login(email, password)
      notifier.notify("login success")

      storage.update(user)
    } catch (error) {
      notifier.notify("login failed. check your email and password")
    }
  }
  const logout = async () => {
    try {
      await api.logout()
      notifier.notify("logout success")

      storage.update(null)
    } catch (error) {
      notifier.notify("logout failed. try again")
    }
  }

  return { login, logout }
}
