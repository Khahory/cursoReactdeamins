import React from "react";
import ExercisesList from '../components/ExercisesList'
import Welcome from "../components/Welcome";
import AddButtom from '../components/AddButton'
import Loading from "../components/Loading";
import FatalError from '../pages/500'

class Exercises extends React.Component{

    //Gracias a Babel no requerimos inicializar los STATES dentro del constructor
    //Ya lo hara por nosotros si solo ponemos de objeto padra la variable llamada STATE
    state = {
        data: [],
        loading: true,
        error: null
    }

    //Llamada api get
    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises/')
            let data = await res.json()

            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                //Sepasara automaticamente como si fuera error: error(este es del parametro)
                error
            })
        }
    }

    render() {
        if (this.state.loading)
            return <Loading/>

        if (this.state.error)
            return <FatalError/>
        
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
