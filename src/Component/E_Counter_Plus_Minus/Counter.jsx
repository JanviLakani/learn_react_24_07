


import React, { useState } from 'react';

const Counter = () => {

    const [counter ,setCounter] = useState(0)

    const handleMinus = () => {
        setCounter(counter - 1)
    }

    const handleplus = () => {
         setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={ () => handleMinus()}  disabled= {counter === 0}>-</button>
            <span>{counter}</span>
            <button onClick={ () => handleplus()} disabled= {counter === 10}>+</button>
        </div>
    );
};

export default Counter;