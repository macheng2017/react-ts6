import { User } from "../screen/search-panel";


const apiUrl = process.env["REACT_APP_API_URL"];
const token = "___token___";

const handleLogin = (user: User) => {
  window.localStorage.setItem(token, user.token);
};

export const Login = (param: { username: string, password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(param)
  }).then(async r => handleLogin(await r.json()));
};


export const Register = (param: { username: string, password: string }) => {
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(param)
  }).then(async r => handleLogin(await r.json()));
};

export const Logout = () => {
  window.localStorage.removeItem(token);
};
