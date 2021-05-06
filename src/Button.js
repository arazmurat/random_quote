import React, {useContext} from 'react';
import { ColorContext } from './ColorContext';


const Button = () => {
    const {handleChange} = useContext(ColorContext)  //takes handleChange method context from ColorContext
    return (
        <button onClick={handleChange}>Toggle color!</button>
    )
}

export default Button
