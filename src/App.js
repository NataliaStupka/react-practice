//реэкспорт работает только с дефолтным экспортом
import Counter from './components/Counter'; //сделали реэкспорт, вебпак зайдет в папку Counter, найдет index.js и возьмет default
import Dropdown from './components/Dropdown/Dropdown.jsx';
import ColorPicker from './components/ColorPicker/ColorPicker.jsx';
import TodoList from './components/TodoList';
import React, { Component } from 'react';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// 2) Стало
//делаем общий класс необходимый для компонентов App
class App extends Component {
  state = {
    todos: initialTodos,
  };

  // 3) так как стейт находится в Арр, то МЕТОД ПО УДАЛЕНИЮ одной li прописываем тут же
  //ожидаем id того todo которого нужно удалить
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    //высчитываем сколько выполненных
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.comleted ? total + 1 : total),
      0,
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Выполненно: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// 1) Было
// function App() {
//   return (
//     <>
//       <h1>Состояние компонента</h1>
//       <Counter initialValue={10} />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//       <TodoList />
//     </>
//   );
// }

export default App;
