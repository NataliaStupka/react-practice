import React from 'react';

//принимает два пропа, по стандарту называем их on что-то
const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;

//добавить файл своих стилей
