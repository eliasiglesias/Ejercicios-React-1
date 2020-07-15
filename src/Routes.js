import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Ejercicio1, Ejercicio2, Ejercicio3, Ejercicio4, Ejercicio5, Ejercicio6, Ejercicio7 } from "./ejercicios/";
import Ejercicio from "./ejercicios/Ejercicio"
import Home from './components/Home';
import exData from "./ejercicios/constantes";

const Routes = () => {

    const exercises = [
        Ejercicio1,
        Ejercicio2,
        Ejercicio3,
        Ejercicio4,
        Ejercicio5,
        Ejercicio6,
        Ejercicio7
    ]

    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            {
                exercises.map((Component, i) =>
                    <Route exact key={"route-dynamic-" + i} path={`/${exData[i].url}`}>
                        <Ejercicio index={i}>
                            <Component />
                        </Ejercicio>
                    </Route>
                )
            }
        </Switch >
    );
};

export default Routes;