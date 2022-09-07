interface Config extends RequestInit {
  data?: string,
  token?: string
}

export const Http = (endpoint: string, { data, token, ...customConfig }: Config) => {
  const conf = {
    method: "GET",
    headers: {
      Authorization: token ? "Bearer " + token : "",
      "Content-Type": "application/json"
    },
    ...customConfig
  };

  return fetch(endpoint);

};
