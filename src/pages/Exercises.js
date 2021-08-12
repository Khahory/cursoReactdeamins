import React from "react";
import Welcome from "../components/Welcome";
import ExercisesList from "../components/ExercisesList";
import AddButtom from "../components/AddButton";

const Exercises = ({exercises}) => (
    <React.Fragment>
        <Welcome name='Khahory'/>
        <ExercisesList exercises={exercises}/>
        <AddButtom />
    </React.Fragment>
)

export default Exercises
