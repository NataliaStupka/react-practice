//Выпадающее меню - практика. Как правильно скрывать или показывать разметку

import React, {Component} from 'react';
import './Dropdown.css';

// 1) в зависимости от компонента мы или рендерим разметку или нет
//изначально компонент скрыт
//деструктеризировали что бы не писать React.Component
class Dropdown extends Component {  
    state = {
       visible: false,
    } 

  // 2) нужно два метода которые будут изменять visible на true или false, передаем их в кнопки
//     show = () => {
//         this.setState({ visible: true });      //обьект в котором будет свойство visible будет true
// }
//     hide = () => {
//         this.setState({ visible: false });
//     }

    // 3) оптимизируем  show и hide, можно сделать не две, а ОДНУ кнопку
    toogle = () => {
        this.setState(prevState => ({
        visible: !prevState.visible     //не false - значит true, не true занчит false
    }))

}

    render() {
        //дестректуризируем
        const { visible } = this.state;
        
        return (
            <div className='Dropdown'>
                <button
                    type='button'
                    className='Dropdown__togle'
                    onClick={this.toogle}
                >
                    {/* текст на кнопке в тернарный оператор, если тру- то скрыть, если фолс- показать */}
                    {visible ? 'Скрыть' : 'Показать'}   
                </button>

                {/* 2) вариант две кнопки если два метода show и hide */}
                {/* <button type='button' className='Dropdown__togle' onClick={this.show}>
                    Показать
                </button>
                <button type='button' className='Dropdown__togle' onClick={this.hide}>
                    Скрыть
                </button> */}

                {/* если в this.state.visible тру - рендерим эту разметку */}
                {visible && (<div className='Dropdown__menu'>Выпадающее меню</div>)}
                
            </div>
        );
    }


};

export default Dropdown;