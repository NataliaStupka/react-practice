
import { useState, useEffect } from 'react';

// изменения со state
export default function Form() {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [experience, setExperience] = useState('junior');
    const [licence, setLicence] = useState(false);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        
    };
    const handleNameChange = event => {
        setName(event.currentTarget.value)
    };
    const handleTagChange = event => {
       setTag(event.currentTarget.value)
    }
    
    //--
    const handleLicenceChange = event => {
        setLicence(event.currentTarget.checked)
    }

//сохраним в LocalStorage значение name
    useEffect(() => {
        window.localStorage.setItem('name', JSON.stringify(name));
    }, [name]); //вызываем этот useEffect только когда поле name

    return (
    <form onSubmit={handleSubmitForm}>
        <label>
          Имя{' '}
          <input
            type="text"
            name="name" //4.4) использум уникальный атрибут, для обработчика
            value={name}
            onChange={handleNameChange}
            checked={experience === 'junior'} //ты чекнут, если === 'junior'
          />
        </label>
        <label>
          Фамилия{' '}
          <input
            type="text"
            name="tag" //4.4) использум уникальный атрибут,
            value={tag}
            onChange={handleTagChange}
          />
        </label>

            {/* 5) Радиокнопки */}
            
            {/* <p>Ваш уровень:</p> */}
            
        {/* <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            // onChange={this.handleChange}
            checked={experience === 'junior'} //при выборе кнопки
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            // onChange={this.handleChange}
            checked={experience === 'middle'} //при выборе кнопки
          />{' '}
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            // onChange={this.handleChange}
            checked={experience === 'senior'} //при выборе кнопки
          />{' '}
          Senior
        </label> */}
            
        <br />

        {/* 6) Чекбокс */}
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence} //он чекнут тогда, когда this.state.licence
            onChange={handleLicenceChange}
          />{' '}
          Согласен с условием
            </label>
            
            <br />
            
        {/* disabled - если не выбран, кнопка не активна */}
        <button type="submit" disabled={!licence}>
          Отправить
        </button>
      </form>

)


}