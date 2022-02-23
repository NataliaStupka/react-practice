//модалка это div на бекдроп и div на контент, а все наполнение передается из вне как {this.props.children}
//так модалку можно преизпользовать
import React, { Component } from 'react';
import { createPortal } from 'react-dom'; //метод из react дома, для модального окна
import './Modal.css';

//для модального окна
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    //вешаем слушателя событий, для закрытия модал,окна при нажатие на Esc
    window.addEventListener('keydown', this.handleKeyDown);
  }

  //метод очистки за собой (почистить слушатели, таймауты, http запросы и т.д). Нужно для лучшей производительности
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    //   console.log('Нажали клавишу ', event.code);
    if (event.code === 'Escape') {
      console.log('Нажали Esc, нужно закрыть модалку');
      this.props.onClose(); //вызываем метод переданый по пропсу (закрытие модального окна toggleModal в App)
    }
  };

  //метод для закрытия модалки при кликанье на сером бекдроппе
  handleBackdropClick = event => {
    // console.log('кликнули в бекдроп');
    // console.log('currentTarget - где словили', event.currentTarget);
    // console.log('target - на чем клацнули: ', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  // возвращаем не разметку, а результат вызова createPortal, куда передаю Первым аргументом разметку которую хочу зарендерить
  // а вторым ссылку на root модалки
  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
