import {FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from 'react-icons/fa'; //иконки  с библиотеки React-icons
import { formatEventStart, formatEventDuration } from '../../helpers';
import { Card, EventName, Info, Chip } from './Event.styled';

//                     глубока деструктуризация 
export const Event = ({ event:  {name, location, speaker, time, type}}) => {
    //const {name, location, speaker} = event;     деструктуризация
    return <Card >
        <EventName >{name}</EventName>
        <Info >
            <FaMapMarkerAlt color='rgb(40, 26, 100)' />
            {location}
        </Info>
        <Info >
            <FaUserAlt  />
            {speaker}
        </Info>
        <Info >
            <FaCalendarAlt  />
            {formatEventStart(time.start)}
        </Info>
        <Info >
            <FaClock  />
            {formatEventDuration(time.start, time.end)}
        </Info>
        <Chip eventType={type} >{type}</Chip>
    </Card>;
};

// Доп СТИЛИЗАЦИЯ (доп класс)
//для Chipa на прямую передаем пропы type, что выбрать доп стилизацию, в зависимости от типа мероприятия
// доступ к этому тайпу получаем: в Event.styled.js в стилях чипа обьвляем функцию(через шаблонную строку)б которая принимает проп
// ${props => {}} , а доступ  - props.type, props.img и т.д