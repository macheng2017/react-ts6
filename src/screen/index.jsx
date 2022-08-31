import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { List } from "./list";

const baseUrl = process.env.REACT_APP_API_URL;


export const ProjectListScreen = () => {
  let [param, setParam] = useState({
    name: "",
    personId: ""
  });
  const [users, setUsers] = useState([]);

  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/projects`).then(async (resp) => {
      if (resp.ok) {
        setList(await resp.json());
      }
    });
  }, [param]);

  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async resp => {
      if (resp.ok) {
        setUsers(await resp.json());
      }
    });
  },[]);

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list}></List>
  </div>;
};
