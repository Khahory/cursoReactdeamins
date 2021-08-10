import React from "react";
import Card from "./Card";

// {exercises} en vez de props, eso se llama destructuracion, ni idea que hace
const ExercisesList = ({exercises}) => (
    <div>
        {
            exercises.map(exercise => {
                return (
                    <Card
                        id={exercise.id}
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })
        }
    </div>
)

export default ExercisesList


