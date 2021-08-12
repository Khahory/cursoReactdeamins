import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExercisesContainer from "../pages/ExercisesContainer";
import ExercisesNewContainer from "../pages/ExercisesNewContainer";
import NoFound from "../pages/NoFound";

const App = () => (
        <BrowserRouter>
            {/*Si no encuentra el path pues vete al por defecto error 404*/}
            <Switch>
                <Route exact path="/exersice" component={ExercisesContainer} />
                <Route exact path='/exersice/new' component={ExercisesNewContainer} />
                <Route component={NoFound} />
            </Switch>
        </BrowserRouter>
)

export default App
