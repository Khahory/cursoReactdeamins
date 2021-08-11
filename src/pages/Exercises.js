import React from "react";
import ExercisesList from '../components/ExercisesList'
import Welcome from "../components/Welcome";
import AddButtom from '../components/AddButton'

class Exercises extends React.Component{

    //Gracias a Babel no requerimos inicializar los STATES dentro del constructor
    //Ya lo hara por nosotros si solo ponemos de objeto padra la variable llamada STATE
    state = {
        data: []
    }

    //Llamada api get
    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        let res = await fetch('http://localhost:8000/api/exercises/')
        let data = await res.json()

        this.setState({
            data
        })
    }

    render() {
        return (
            <div>
                <Welcome name='Khahory'/>
                <ExercisesList exercises={this.state.data}/>
                <AddButtom />
            </div>
        )
    }
}

export default Exercises
