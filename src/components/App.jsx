
import { GlobalStyle } from "./GlobalStyle";
import { Filter } from "./Filter/Filter";

export const App = () => { 
    return (
        <>
            
            <GlobalStyle />
            <Filter isOpen options={[
                { value: 'xs', label: 'Очень маленький' },
                { value: 'sm', label: 'Маленький' },
                { value: 'md', label: 'Средний' },
                { value: 'lg', label: 'Большой' },
                { value: 'xl', label: 'Очень большой' },
            ]} />
            
    </>);
};

