import {useState} from "react";

export const SearchPanel = () => {
    let [param, setParam] = useState({
        name: '',
        personId: ''
    });
    return <div>
        <input type="text" value={param.name} onChange={(evt) => setParam({...param, name: evt.target.value})}/>
        <select onChange={(evt) => setParam({...param, personId: evt.target.value})}>
            <option value=''>负责人</option>
            <option value={param.personId}>{param.name}</option>
        </select>
    </div>
}
