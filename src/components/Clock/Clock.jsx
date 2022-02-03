import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  //в state хранится время, потому что от него зависит интерфейс, в зависимомти от него он обновляется
  state = {
    time: new Date().toLocaleTimeString(), //начинается с новой даты и с помощью метода toLocaleTimeString приводится в норм вид
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }
  //чистим при размонтировании, что бы не выскакивала ошибка если, например, скрывается в модальном окне
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clock__face">Ukraine: {this.state.time}</div>;
  }
}
