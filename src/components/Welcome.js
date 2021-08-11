import React from "react";
import './styles/Welcome.css'

// {name} en vez de props, eso se llama destructuracion, ni idea que hace
const Welcome = ({name}) => (
    <div className='container'>
        <div className='Fitness-User-Infoa'>
            <h1>Hello {name}</h1>
            <p>Vamos a ve qloq!</p>
        </div>
    </div>
)

export default Welcome
