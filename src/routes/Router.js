import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components";

const Router = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    );
};

export default Router;
