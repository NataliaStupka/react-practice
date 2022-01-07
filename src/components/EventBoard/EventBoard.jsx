import { Event } from '../Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
   
    return <Board>
        {events.map(event => (
            <Event key={event.name} event={ event}/>))}
    </Board>
};