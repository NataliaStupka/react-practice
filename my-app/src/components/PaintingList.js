import Painting from './Painting'
import PropTypes from 'prop-types';

//                    принимает props (масив даных), сразу деструктуризируем в items
function PaintingList({ items }) { 
     return   <ul>
    { items.map (item => (
            <li key={item.id}>
                <Painting
                    imageUrl={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profileUrl={item.author.url}
                    price={item.price}
                    quantity={item.quantity}
                />
        </li>))} 
            </ul>;
};

export default PaintingList

// прописываем правильно ПРОПтайп для МАСИВА
// прописываем только для id, все остальное есть уже в painting, не дублируем 
PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
   
}


// ------------------ НАЧИНКА" КОМПОНЕНТА колекции тут рендерим коллекцию, список моих данных