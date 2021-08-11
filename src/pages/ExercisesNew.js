import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import FatalError from "./500";

class ExercisesNew extends React.Component{

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

        return (
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>


        )
    }
}

export default ExercisesNew
