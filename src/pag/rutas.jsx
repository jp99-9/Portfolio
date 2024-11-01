import React from "react";
import {Route, BrowserRoute } from "react-router-dom";

import { Header } from "../componentes/Header";
import { Contact } from "./contact";



const Routes = () => {

    return(
        <BrowserRoute>
            <Route component={Header} path="/" exact />
            <Route component={Contact} path="/contact" exact />
        </BrowserRoute>
    );
}


export default Routes;