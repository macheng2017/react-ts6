import { User } from "./search-panel";

interface Project {
  id: string,
  name: string,
  personId: string,
  pin: string,
  organization: string
}

interface ListProps {
  list: Project[],
  users: User[]
}

export const List = ({ list, users }: ListProps) => {


  return <table>
    <thead>
    <tr>
      <th>名称</th>
      <th>负责</th>
    </tr>
    </thead>
    <tbody>
    {
      list.map(v =>
        <tr key={v.id}>
          <td> {v.name}</td>
          <td> {users.find(u => v.personId === u.id)?.name || "未知"}</td>
        </tr>)
    }
    </tbody>
  </table>;

};
