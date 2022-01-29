import React from "react";


//передаем пропы value и метод onChange
const Filter = ({value, onChange}) => (

    <label>Фильтр todo
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
);

export default Filter;

