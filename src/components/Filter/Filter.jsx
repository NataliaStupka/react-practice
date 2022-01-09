
import { Container, TriggerButton, Popover, Options, Option } from './Filter.styled';
import { FaChevronDown } from "react-icons/fa";


// 1) добавляем прог isOpen (открыто или не открыто изначально)
// принимает props (isOpen) и по умолчанию false; {isOpen && <div>Popover</div>}  - если isOpen (в App, в Filter пропишем isOpen), то <div>Popover</div> показывается
export const Filter = ({isOpen = false, options}) => { 
    return (<Container>
        <TriggerButton type="button">
            Выбрано: 0 <FaChevronDown />
        </TriggerButton>
        {isOpen && (
            <Popover>
                <Options>
                    {options.map(({value, label}) => (
                        <Option key={value}>
                        <input type="checkbox" name="option" value={value} />
                        {label}
                    </Option>))}
                </Options>
            </Popover>
        )}
    </Container>);
};


 