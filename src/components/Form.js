import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '', //что сдесь запишем то и будет в инпуте на странице
    tag: '',
    experience: 'junior', //для радиокнопок, будет указано при загрузке первый раз
    licence: false,
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
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    //деструктуризируем
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value, //видео формы запись 12минута !!!еще раз
    });
  };

  handleSubmit = event => {
    event.preventDefault(); //что бы не перезагрузилась страница по умолчанию
    // console.log(this.state);

    //вызываем пропс, тот что в App в Form
    //передадим в него state
    this.props.onSubmit(this.state);

    this.reset();
  };

  //6) метод для чекбокса
  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked }); //переключает true-false
  };

  //метод для очистки формы, сбросим state в ноль
  reset = () => {
    this.setState({ name: '', tag: '' });
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
            checked={this.state.experience === 'junior'} //ты чекнут, если === 'junior'
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

        {/* 5) Радиокнопки */}
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'} //при выборе кнопки
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'} //при выборе кнопки
          />{' '}
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'} //при выборе кнопки
          />{' '}
          Senior
        </label>
        <br />

        {/* 6) Чекбокс */}
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence} //он чекнут тогда, когда this.state.licence
            onChange={this.handleLicenceChange}
          />{' '}
          Согласен с условием
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
