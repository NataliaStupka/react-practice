import PropTypes from 'prop-types'; 
import defaultImage from './default.jpg' //постер если не подгрузится картинка


//   4.2.    Painting(props) принимает всегда один параметр props (это как атрибуты)
export default function Painting(props) {
  const { imageUrl=defaultImage, title, profileUrl, author='не известно', price, quantity } = props; //деструктерузируем для удобства записи
 
  return <div>
    <img src={imageUrl} alt={title} width='480' />
  <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{author}</a>
    </p>
  <p>Цена:{price} кредитов</p>
    <p>Доступность: {quantity < 10 ? 'заканчивается':'есть в наличии'} </p>  
  <button type='button'>Добавить в корзину</button>

</div>
}

//добавляем на компонент свойство .propTypes (задаем пропсу ожидаемый тип), прописывается для каждого; также добавляем что он обязательный isRequired
Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}


// ------------------ КОМПОНЕНТ/РАЗМЕТКА
