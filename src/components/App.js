import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exercises from "../pages/Exercises";
import ExercisesNew from "../pages/ExercisesNew";
import NoFound from "../pages/NoFound";

const App = () => (
        <BrowserRouter>
            {/*Si no encuentra el path pues vete al por defecto error 404*/}
            <Switch>
                <Route exact path="/exersice" component={Exercises} />
                <Route exact path='/exersice/new' component={ExercisesNew} />
                <Route component={NoFound} />
            </Switch>
        </BrowserRouter>
)

export default App
