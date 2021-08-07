import React from "react";
import './styles/Welcome.css'

function Welcome(props) {
    return (
        <div className='container'>
            <div className='Fitness-User-Infoa'>
                <h1>Hello {props.name}</h1>
                <p>Vamos a ve qloq!</p>
            </div>
        </div>
    )
}

export default Welcome
