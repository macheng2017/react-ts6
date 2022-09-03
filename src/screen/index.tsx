import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { List } from "./list";
import { cleanObj, useDebounce, useMount } from "../utils";
import qs from "qs";

const baseUrl = process.env.REACT_APP_API_URL;


export const ProjectListScreen = () => {
  let [param, setParam] = useState({
    name: "",
    id: ""
  });
  const [users, setUsers] = useState([]);

  const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param,200);
  useEffect(() => {
    console.log(cleanObj(param));
    fetch(`${baseUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`).then(async (resp) => {
      if (resp.ok) {
        setList(await resp.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${baseUrl}/users`).then(async resp => {
      if (resp.ok) {
        setUsers(await resp.json());
      }
    });
  });

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list} users={users}></List>
  </div>;
};
