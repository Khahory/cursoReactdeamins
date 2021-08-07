import React from "react";
import exeImg from '../images/exercise.png'
import './styles/Card.css'
import circuleImg from '../images/circles.png'

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imagenState: 'https://i.ytimg.com/vi/oMesfTZFaeM/hqdefault.jpg'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                imagenState: this.props.img
            })
        }, 3000)
    }

    render() {
        // Ejemplo para que puedas mejorar el codigo sin poner this
        const { title, img } = this.props

        return (
            <div className='card mx-auto Fitness-Card'
            style={{
                backgroundImage: `url(${circuleImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}
            >
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={this.state.imagenState} alt="" className='float-right'/>
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>{title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
