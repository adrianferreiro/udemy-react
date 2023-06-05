import { useState } from 'react'
import PropTypes from 'prop-types'

//rafc    snippet para crear function component


export const CounterApp = ({value}) => {
    const [ counter, setCounter ] = useState(value);
    const handleAdd = () => {
        //console.log(event);
        //opcion 1
        setCounter(counter + 1);
        //opcion 2
        //setCounter((c) => c+1)
    }

    const restar = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }

    const resetear = () => {
        setCounter(  value);
    }
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        {/* <button onClick={(event) => handleAdd(event)}> */}
        <button onClick={handleAdd}>+1</button>
        <button onClick={restar} >-1</button>
        <button onClick={resetear} >Reset</button>
    </>


    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 'No se envió el número.',
}