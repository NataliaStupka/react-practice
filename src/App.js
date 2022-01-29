import React, { Component } from 'react';
import shortid from 'shortid';

//реэкспорт работает только с дефолтным экспортом
import Counter from './components/Counter'; //сделали реэкспорт, вебпак зайдет в папку Counter, найдет index.js и возьмет default
import Dropdown from './components/Dropdown/Dropdown.jsx';
import ColorPicker from './components/ColorPicker/ColorPicker.jsx';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import initialTodos from './todos.json';
import Form from './components/Form';
import Filter from './components/Filter/Filter';

// initialTodos
//  [
//   { "id": "id-1", "text": "Выучить основы React", "completed": true },
//   { "id": "id-2", "text": "Разобраться с React Router", "completed": false },
//   { "id": "id-3", "text": "Пережить Redux", "completed": false }
// ]

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
// 4.1) добавляем для form (input) name, tag  - ПЕРЕНЕСЛИ в отдел.файл
class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    // name:'',            //что сдесь запишем то и будет в инпуте на странице
    // tag: '',
  };

  //получаем данные из TodoEditor при сабмите ее формы, для этого
  //предадим как проп для формы(в App) и TodoEditor (в handleSubmit) сделаем вызов this.props.onSubmit(this.state.message )-кидаем в него
  addTodo = text => {
    console.log('text:', text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    //обновляем состояние от предыдущего(делаем новый, распыляем старый, в начало/конец добавляем элемент)
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  // 3) так как стейт находится в Арр, то МЕТОД ПО УДАЛЕНИЮ одной li прописываем тут же
  //ожидаем id того todo которого нужно удалить
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  //обновление(будет тоблить свойства в масиве обьекта)
  //получаем идентификатор который хотим найти
  toggleCompleted = todoId => {
    console.log('todoId', todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //         //если todoId равен todoId которое пришло, то в новом масиве нужно поставить новый обьект
    //     if (todo.id === todoId) {
    //       console.log('нашли тот todo который нужно!');
    //       return {
    //         //распыляем старую тудушку, что бы сохранить все свойства которые там есть
    //         ...todo,
    //         //а поверх, свойство completed (обновленный)
    //         completed: !todo.completed,
    //       };
    //     }
    //     //если условие не выполняется, возвращается старый туду
    //     return todo;
    //   }),
    // }));

    //ПРЕПИШЕМ ЧЕРЕЗ ТЕРНАРНИК
    //из prevState, возьмем только todos
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  // 4.6) получаем доступ в App к form на момент сабмита(через пропсы, значение state, перекинем name и tag)
  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    //для ФИЛЬТРАЦИИ приведем текст к одному toLowerCase()
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    //высчитываем сколько выполненных
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.comleted ? total + 1 : total),
      0,
    );

    //фильтрация, составляем новую колекцию и ресуем только ее
    const visibleTodos = this.getVisibleTodos();

    // 4.3) событие для инпут onChange (в реакте комбинирует в себе и onInput, onFocus, onBlur), onFocus, onBlur
    return (
      <>
        {/* 4.5) на кнопке сабмит и сабмитем его в форм! - проп который отвечает за все события сабмит */}
        {/* БЫЛО - ПЕРЕНСЛИ в отдельный файл */}
        {/* <form onSubmit={this.handleSubmit}>    
          <label >
            Имя <input
              type="text"
              name='name'       //4.4) использум уникальный атрибут, для обработчика
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <label>
            Фамилия <input
              type="text"
              name='tag'        //4.4) использум уникальный атрибут,
              value={this.state.tag}
              onChange={this.handleChange} />
          </label>
          <button type='submit'>Отправить</button>
        </form> */}

        {/* 4/6) сдесь onSubmit это название пропса */}
        <Form onSubmit={this.formSubmitHandler} />

        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <h2>------------------ Todo --------------------------------</h2>

        <TodoEditor onSubmit={this.addTodo} />
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Выполненно: {completedTodosCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
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
