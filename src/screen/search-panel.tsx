import {useState} from "react";

export const SearchPanel = () => {
    let [param, setParam] = useState({
        name: '',
        personId: ''
    });
    let [users, setUsers] = useState([
        {
            name: '小明',
            personId: '1'
        },
        {
            name: '小花',
            personId: '2'
        },
    ]);
    return <div>
        <input type="text" value={param.name} onChange={(evt) => setParam({...param, name: evt.target.value})}/>
        <select value={param.personId}
                onChange={(evt) => setParam(
                    {
                        ...param,
                        name: evt.target.value.split(',')[0],
                        personId: evt.target.value.split(',')[1]
                    })
                }>
            <option value=''>负责人</option>
            {users.map(v => <option value={[v.name, v.personId]}>{v.name}</option>)}
        </select>
    </div>
}
