import React from 'react';

//передаем пропы value и метод onChange
const Filter = ({ value, onChange }) => (
  <label>
    Фильтр по содержимому
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
