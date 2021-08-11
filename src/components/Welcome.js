import React from "react";
import './styles/Welcome.css'

// {name} en vez de props, eso se llama destructuracion, ni idea que hace
const Welcome = ({name}) => (
    <React.Fragment className='container'>
        <div className='Fitness-User-Infoa'>
            <h1>Hello {name}</h1>
            <p>Vamos a ve qloq!</p>
        </div>
    </React.Fragment>
)

export default Welcome
