import { AuthenticationService, UserStorageService } from "./ports";

const auth: AuthenticationService = {};
const userStorage: UserStorageService = {};

async function authenticate(name: string, email: string) {
  const user = await auth.auth(name, email);
  userStorage.updateUser(user);
}
