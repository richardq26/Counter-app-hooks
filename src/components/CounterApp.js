import React, { useState } from 'react'
import PropTypes from 'prop-types'
const CounterApp = ({value})=>{
    const [counter, setCounter]= useState(0);

    const inicio = 0;
    const handleAdd = ()=>{
        setCounter(counter +1);
    }
    const handleSubstract = ()=>{
        setCounter(counter -1);
    }
    const handleReset = ()=>{
        setCounter( inicio);
    }
    return (
        <>
            <h1>Counter APP</h1>
            <h2> { value } </h2> 
            <h3>Contador: { counter }</h3>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset </button>
            <button onClick={handleAdd}>+1</button>
        </>
    )
}

CounterApp.propTypes ={
    value: PropTypes.string.isRequired
}
export default CounterApp;