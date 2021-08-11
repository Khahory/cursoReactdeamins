import React from "react";
import FatalError from "./500";
import ExerciseNew from "./ExerciseNew";

class ExercisesNewContainer extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })

        e.preventDefault()
        try {
            // conguracion para hacer el post
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()
            console.log(json)

            this.setState({
                loading: false
            })

            //ir a otra pagina
            this.props.history.push('/exersice')
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    render() {
        if (this.state.error)
            return <FatalError/>

        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />
    }
}

export default ExercisesNewContainer
