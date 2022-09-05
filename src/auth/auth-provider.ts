import { User } from "../screen/search-panel";


const apiUrl = process.env["REACT_APP_API_URL"];
const localStorageKey = "___token___";

const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token);
  return user;
};

export const login = (param: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(param)
  }).then(async r => {
    if (r.ok) {
      return handleUserResponse(await r.json());
    }
    return Promise.reject(param);
  });
};


export const register = async (param: { username: string, password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(param)
  }).then(async r => {
    if (r.ok) {
      return handleUserResponse(await r.json());
    }
    return Promise.reject(param);
  });
};

export const logout = async () => {
  await window.localStorage.removeItem(localStorageKey);
};
