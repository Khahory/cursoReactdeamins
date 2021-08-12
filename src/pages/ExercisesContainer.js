// Vamos a probar los hooks
import React, { useState } from "react";
import Loading from "../components/Loading";
import FatalError from '../pages/500'
import Exercises from "./Exercises";

const ExercisesContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    if (loading)
        return <Loading/>

    if (error)
        return <FatalError/>

    return <Exercises
        data={data}/>
}

export default ExercisesContainer

// class ExercisesContainer extends React.Component{
//
//     //Gracias a Babel no requerimos inicializar los STATES dentro del constructor
//     //Ya lo hara por nosotros si solo ponemos de objeto padra la variable llamada STATE
//     state = {
//         data: [],
//         loading: true,
//         error: null
//     }
//
//     //Llamada api get
//     async componentDidMount() {
//         await this.fetchExercises()
//     }
//
//     fetchExercises = async () => {
//         try {
//             let res = await fetch('http://localhost:8000/api/exercises/')
//             let data = await res.json()
//
//             this.setState({
//                 data,
//                 loading: false
//             })
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 //Sepasara automaticamente como si fuera error: error(este es del parametro)
//                 error
//             })
//         }
//     }
//
//     render() {
//         if (this.state.loading)
//             return <Loading/>
//
//         if (this.state.error)
//             return <FatalError/>
//
//         return <Exercises
//             data={this.state.data}/>
//     }
// }
//
// export default ExercisesContainer
