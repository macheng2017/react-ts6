import { FormEvent } from "react";
import { Login } from "../../auth/auth-provider";


export interface User {
  username: string;
  password: string;
  token?: string;
}

export const LoginScreen = () => {

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    Login({ username, password });
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
      <button type={"submit"}>确定</button>
    </form>
  </div>;
};
