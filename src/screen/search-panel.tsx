export interface User {
  id: string,
  name: string,
  title: string,
  token: string,
  organization: string
}

interface SearchPanelProps {
  users: User[],
  param: { id: string, name: string }
  // 引用自身的定义
  setParam: (param: SearchPanelProps["param"]) => void
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.id}
        onChange={(evt) =>
          setParam({
            ...param,
            id: evt.target.value
          })
        }
      >
        <option value="">负责人</option>

        {// value中的数组(对象不行)会自动拼接成中间带逗号的字符串,取出的时候分隔一下就行
          users.map(v => <option key={v.id} value={v.id}>{v.name}</option>)
        }
      </select>
    </div>
  );
};
