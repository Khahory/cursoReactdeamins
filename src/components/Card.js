import React from "react";
import exeImg from '../images/exercise.png'
import './styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className='card mx-auto Fitness-Card'>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={exeImg} alt="" className='float-right'/>
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>Titulo</h1>
                            <p>Esto es una prueba vacana</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
