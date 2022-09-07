import { useAuth } from "./context/auth-context";
import { UnauthenticationApp } from "./unauthentication-app";
import { ProjectListScreen } from "./screen";

export const AuthenticationApp = () => {
  const { user } = useAuth();
  return user ? <ProjectListScreen /> : <UnauthenticationApp />;
};
