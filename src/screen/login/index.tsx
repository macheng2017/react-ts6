import { FormEvent } from "react";
import { useAuth } from "../../auth/auth-context";


export interface User {
  username: string;
  password: string;
  token?: string;
}

export const LoginScreen = () => {

  const { user, login } = useAuth();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password }).then(r => r);
  };

  return <div>
    <form onSubmit={handleSubmit}>
      {user ? user.name + "登录成功" : "未登录"}
      <div>
        <label htmlFor={"username"}>username</label>
        <input type={"username"} />
      </div>
      <div>
        <label htmlFor={"password"}>password</label>
        <input type={"password"} />
      </div>
      <button type={"submit"}>确定</button>
    </form>
  </div>;
};
