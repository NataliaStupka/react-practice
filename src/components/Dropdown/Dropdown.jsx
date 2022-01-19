//Выпадающее меню - практика

import React, {Component} from 'react';
import './Dropdown.css';


class Dropdown extends Component {
    render() {
        return (
            <div className='Dropdown'>
                <button type='button' className='Dropdown__togle'>
                    Показать
                </button>

                <div className='Dropdown__menu'>Выпадающее меню</div>
            </div>
        );
    }
};

export default Dropdown;