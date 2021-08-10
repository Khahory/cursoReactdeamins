import React from "react";

class ExercisesNew extends React.Component{
    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Dale</button>
            </div>
        )
    }
}

export default ExercisesNew
