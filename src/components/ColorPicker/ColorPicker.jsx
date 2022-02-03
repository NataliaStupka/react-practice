//устанавливаем npm i classnames
import classNames from 'classnames';

import React, { Component } from 'react';
import './ColorPicker.css';

//переводим в класс
class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };

  //пишем метод для изменения, по клику на кажд из кнопок вызвать setActiveIdx, и засетить его в state
  // 3) метод получает индекс опции на которую нажимаем, и кидает его в state
  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  // 2) выделяем выбранную кнопку
  makeOptionClassName = index => {
    // const optionClasses = ['ColorPicker__option'];     //базовый класс

    //   // если индекс равняется активному индексу, то добавляется класс
    //      if (index === this.state.activeOptionsIdx) {
    //         optionClasses.push('ColorPicker__option--active')
    // }
    // return optionClasses.join(' ')

    //используя classNames(npm i classnames) можем заменить все это выражение на следующее (в начале передаем базовые класы (через запятую), потом {динамические классы(те которые зависят от условия)})
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionsIdx, //если это будет true класс добавится
    });
  };

  //1,2)
  render() {
    // деструктуризируе пропсы и стейты
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;

    //4) Вычесляемое свойство, это то которое вычесляется на базе пропов и стейтов
    // беру масив который лежит в опциях
    // const activeOptionLabel(деструктуризируем в label) = this.props.options[this.state.activeOptionsIdx]
    const { label } = options[activeOptionsIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбираем цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              // 3) onClick это регистрация функции, туда передаем инлайн функцию, ссылку на функцию, которая вызовется во время онклика
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// 1) простой метод выделения активного по индексу
// class ColorPicker extends Component {
//     state = {
//         activeOptionsIdx: 0,
// }

//     render() {
//         return (
//         <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//             {this.props.options.map(({ label, color }, index) => (
//                 <button
//                     key={label}
//                     className='ColorPicker__option'
//                     style={{
//                         backgroundColor: color,
//                         // если index равен, то
//                         border:
//                             index === this.state.activeOptionsIdx
//                                 ? '3px solid black'
//                                 : 'none',
//                     }}
//                 ></button>
//             ))}
//         </div>
//     </div>
//     )
// }

// }
