import React from 'react';
import './Counter.css';
import Controls from './Controls.js';
import Value from './Value.js';


// const Counter = () => (
//     <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//             <button type="button">Увеличить на 1</button>
//             <button type="button">Уменьшить на 1</button>
//         </div>
//     </div>
// );
//------ 1) Обычную функцию превратим в класс

    //класс должен наследовать/расширять базовый компонетнт React.Component
    //тоесть пишем extends React.Component
    //у класса есть обязательный метод render - должен возвращать разметку, и ничего больше 
class Counter extends React.Component {
    //---- 4) пишем публичное свойство state (всегда обьект), используем его шаблон (например this.state.value) в разметке
    static defaultProps = {   //обьявляем дефолтное значение если не передастся пропс, также и для PropTypes
        value: 0,               //описываются до state
    }
    state = {
        value: this.props.initialValue,    //передаем пропсом
        }
        //------------------------------------------
        //это бабелом будет превращенно в старый вариант: делает модель)
            // constructor() {
            //     super();              //super обьявляется для вызова родителя(тоесть React.Component)
            //     this.state = {       //свойство должно обязательно называться state и в нем обязательно должен лежать обьект, React будет его отслеживать
            //         value: 0,
            //     }  
            // }
        //-------------------------------------------
        
    //------ 3) чтобы ДОСТУЧАТЬСЯ к this обьявляем не обычный метод класса handleIncrement() {}, а публичное свойство handleIncrement = () => {};
    //-----5) пишем метод, для обновления (просто перезаписать используем обьект, посчитать - функцию)
    handleIncrement = () => {
            // this.state.value = 6;    !!!!!!!!!!! ТАК ДЕЛАТЬ НЕЛЬЗЯ НИКОГДА
            // для обновления состояния используется метод setState
                    //==! это когда просто записать новое значение==
            // this.setState({      //в этот метод передаю обьект который хочу обновить, 
            //     value: 10
            // }, () => { });    //редко исполуемый второй параметр, можно передать функцию которая выполнится только тогда, когда state обновится
            
            //==! если обновить от предыдущего - функцию которая должна вернуть наш апдейт
        this.setState(prevState => {      //prevState - сюда реакт передаст актуальное состояние на момент обновления
                return {
                value: prevState.value + 1,
                }
            })
            console.log('yes');
        }

    // ----3)
    handleDecrement = (event) => {
            this.setState(prevState => {
                return {
            value: prevState.value -1,
                    }
            })
        
         //-----------теория---------
            console.log('no');
            console.log(event.type);    //через event получаем доступ к элементу, НО в siteTimeout выдаст предупреждение и null
                                    //что бы достучаться в сеттаймауте предварительно сохраним в const
            const target = event.target;
            //const {target} = event;
            setTimeout(() => { console.log(target); }, 1000);   
        }

    render() {
        return (
            <div className='Counter'>
                {/* перенесем спасн в отдельный файл Value */}
                {/* <span className='Counter__value'>{ this.state.value}</span> */}  
                <Value value={this.state.value }/>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement} />
                {/* выносим этот див в отдельный файл Controls */}
            {/* <div className='Counter__controls'> */}
                        
                        {/*----- 2) СОЗДАЕМ СОБЫТИЕ(как проп) onСобытие (onClick, onSubmit, onMouseMove, onChange, onBlur, onFocus, т.д) и в него передаем callback */}
                    {/* <button type="button" onClick={this.handleIncrement}>Увеличить на 1</button>  
                    <button type="button" onClick={this.handleDecrement}>Уменьшить на 1</button>
                 </div> */}
            </div>);
        }
}

export default Counter;