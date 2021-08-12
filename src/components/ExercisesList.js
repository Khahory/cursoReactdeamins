import React from "react";
import Card from "./Card";

// {exercises} en vez de props, eso se llama destructuracion, ni idea que hace
const ExercisesList = ({exercises}) => (
    <div>
        {
            exercises.map(exercise => {
                return (
                    <Card
                        key={exercise.id}
                        {...exercise}
                    />
                )
            })
        }
    </div>
)

export default ExercisesList


