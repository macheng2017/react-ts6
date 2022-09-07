import { AuthProvider } from "./auth-context";
import { ReactNode } from "react";

export const AuthProviders = ({children}:{children: ReactNode}) => {
  return <AuthProvider>
    {children}
  </AuthProvider>;
};
