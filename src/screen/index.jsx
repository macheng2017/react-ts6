import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { List } from "./list";

const baseUrl = process.env.REACT_APP_API_URL;


export const ProjectListScreen = () => {
  let [param, setParam] = useState({
    name: "",
    personId: ""
  });
  let [users, setUsers] = useState([
    {
      name: "小明",
      personId: "1"
    },
    {
      name: "小花",
      personId: "2"
    }
  ]);

  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/projects`).then(async (resp) => {
      if (resp.ok) {
        setList(await resp.json());
      }
    });
  }, [param]);
  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list}></List>
  </div>;
};
