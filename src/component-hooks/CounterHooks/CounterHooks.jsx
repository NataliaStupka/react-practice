//Counter через хуки

import {useState, useEffect} from 'react';
import '../../components/Counter/Counter.css';

export default function Counter() {
//state через useState (значение, метод)
  const [value1, setValue1] = useState(0);

  const handleIncrement = () => {
    setValue1(prevState => prevState + 1)
  }
  const handleDecrement = () => {
    setValue1(prevState => prevState - 1)
  }

  //при изменение чего, сделать что-то
  //useEffect это функция которая 'регестиррует' эфект, который будет выполнятся каждый раз когда обновляется prop или state компонента
  //вместо проверок (if === !== и т.д)
  useEffect(() => {
    console.log('запускается useEffect')
  }, [])
  // если вообще нет [], то при каждом изменение
  //[] зависимостей нет, значит запустится только при первом рендере
  //[value1] эффект запустится тогда, когда изменится только value1
//[имя1, имя2] если что-то из этого изменилось - запускай

  // useEffect(() => {
  //   console.log('если изменится х, запусти fetch');
  //   fetch();
  // }, [x]);
  
  return (
  
    <div className='Counter'>
      <span className="Counter__value">{value1}</span>
      <div className="Counter__controls">
        
        <button type="button" onClick={handleIncrement}>
          Увеличить на 1
        </button>
        <button type="button" onClick={handleDecrement}>
          Уменьшить на 1
        </button>
      </div>
    </div>
    

   
  );
    
}