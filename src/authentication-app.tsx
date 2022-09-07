import { useAuth } from "./context/auth-context";
import { IsAuthentication } from "./unauthentication-app";
import { ProjectListScreen } from "./screen";

export const AuthenticationApp = () => {
  const { user } = useAuth();
  return user ? <ProjectListScreen /> : <IsAuthentication />;
};
