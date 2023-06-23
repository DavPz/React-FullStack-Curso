import { useState } from "react";

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);


    const counterIncrement = () => {
        setCounter(counter + 1);
    };

    const counterDicrement = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h2>El valor del Contador es {counter}</h2>
            <button onClick={() => {
                counterIncrement()
            }} >Incrementar Contador +1</button>

            <button onClick={() => {
                counterDicrement()
            }} >Incrementar Contador  - 1</button>
        </>
    );
}