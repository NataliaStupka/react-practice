//переписываем весь ColorPicker через хуки, (старый на классах и стейте)

import { useState } from 'react';  //используем hook useState
import '../../components/ColorPicker/ColorPicker.css'; // css со старого ColorPicker
import classNames from 'classnames';

export default function ColorPicker({ options }) {
    // 1) теперь вместо state:
    // в первом хранится переменная значение state (имя), во втором метод для изменения (setИмя)
    const [activeOptionIdx, setActiveOptionsIdx] = useState(0);   //изначально равно нулю
           
 //4) ? не поняла/не помню
    const makeOptionClassName = index => {
        return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptionIdx, //если это будет true класс добавится
    });
    }

//3) выбираем активный/выбранный индекс
    const { label } = options[activeOptionIdx];   
    
    // 2) //так как функция setActiveIdx просто оборачивает setActiveOptionsIdx, то можем сразу прописать где нужно setActiveOptionsIdx
    // const setActiveIdx = index => {
    //     setActiveOptionsIdx(index);   //функция получает index и вызывает метод
    // }

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбираем цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              // 3) onClick это регистрация функции, туда передаем инлайн функцию, ссылку на функцию, которая вызовется во время онклика
              onClick={() => setActiveOptionsIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
}
