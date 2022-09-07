import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { useState } from "react";

export const UnauthenticationApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return <div>
    {isLogin ? <LoginScreen /> : <RegisterScreen />}
    <button onClick={() => {
      setIsLogin(!isLogin);
    }}>
      切换登录/注册
    </button>
  </div>;
};
