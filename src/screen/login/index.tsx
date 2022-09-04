import { FormEvent, useState } from "react";

const apiUrl = process.env["REACT_APP_API_URL"];

interface User {
  username: string,
  password: string
}

export const LoginScreen = () => {
  const handleLogin = (param: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(param)
    }).then(r => r.json());
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;

    handleLogin({ username, password });
  };

  const [user, setUser] = useState<User>({ password: "", username: "" });

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
