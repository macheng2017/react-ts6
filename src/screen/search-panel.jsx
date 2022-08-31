export const SearchPanel = ({ param, setParam, users }) => {
  return (
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value
          })
        }
      >
        <option value="">负责人</option>
        // value中的数组(对象不行)会自动拼接成中间带逗号的字符串,取出的时候分隔一下就行
        {users.map(v =>
          <option key={v.id} value={v.personId}>{v.name}</option>
        )}
      </select>
    </div>
  );
};
