import { FormEvent } from "react";
import { useAuth } from "../context/auth-context";


export interface User {
  username: string;
  password: string;
  token?: string;
}

export const RegisterScreen = () => {
  const { register } = useAuth();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password }).then(r => r);
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"username"}>username</label>
        <input type={"username"} />
      </div>
      <div>
        <label htmlFor={"password"}>password</label>
        <input type={"password"} />
      </div>
      <button type={"submit"}>注册</button>
    </form>
  </div>;
};
