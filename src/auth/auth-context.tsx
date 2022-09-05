import { createContext, useState } from "react";
import { User } from "../screen/login";

const AuthContext = createContext(undefined);
AuthContext.displayName = "authContext";

export const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const login = (user: User) => login(user).then(v => setUser);
  const register = (user: User) => register(user).then(v => setUser);
  const logout = () => logout().then(v => setUser(null));
  return <AuthProvider.Provider value={{ user, login, register, logout }} />;
};
