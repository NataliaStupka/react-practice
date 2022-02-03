import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ completed, text, onToggleCompleted, onDeleteTodo }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted} //передаем проп, в котором лежит метод App
    />
    <p className="TodoList__text">{text}</p>
    {/* <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
      Удалить
    </button> */}
    {/* Заменим на (преизпользуем): */}
    <IconButton>
      <DeleteIcon width="30" height="30" fill="#fff" onClick={onDeleteTodo} />
    </IconButton>
  </>
);

export default Todo;
