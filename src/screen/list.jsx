export const List = ({ list }) => {

  return <table>
    <thead>
    <tr>
      <th>名称</th>
      <th>负责</th>
    </tr>
    </thead>
    <tbody>
    {
      list.map(v => <tr>
          <td> {v.name}</td>
          <td> {v.id}</td>
        </tr>)
    }
    </tbody>
  </table>;

};
