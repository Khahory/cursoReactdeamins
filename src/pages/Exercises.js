import React from "react";
import Welcome from "../components/Welcome";
import ExercisesList from "../components/ExercisesList";
import AddButtom from "../components/AddButton";

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome name='Khahory'/>
        <ExercisesList exercises={data}/>
        <AddButtom />
    </React.Fragment>
)

export default Exercises
