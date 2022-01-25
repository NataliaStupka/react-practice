import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '', //что сдесь запишем то и будет в инпуте на странице
    tag: '',
  };

  // 4.2) метод который обновит состояние инпут
  // handleNameChange = event => {
  // console.log(event);
  // console.log(event.currentTarget.value);
  //обновляем state
  // this.setState({name: event.currentTarget.value})

  // }
  // handleTagChange = event => {
  //   this.setState({tag: event.currentTarget.value})
  // }
  // 4.4)сделаем все одним обработчиком, что бы не дублировать (метод который обновит состояние инпут), используем уникальный атрибут name
  handleChange = event => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    //деструктуризируем
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value, //видео формы запись 12минута !!!еще раз
    });
  };

  handleSubmit = event => {
    event.preventDefault(); //что бы не перезагрузилась страница по умолчанию
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя{' '}
          <input
            type="text"
            name="name" //4.4) использум уникальный атрибут, для обработчика
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Фамилия{' '}
          <input
            type="text"
            name="tag" //4.4) использум уникальный атрибут,
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
