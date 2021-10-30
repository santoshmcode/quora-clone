import React from "react";
import { Route, Switch } from "react-router";

const Router = () => {
    return (
        <Switch>
            <Route path="/login">
                <h1>Login Page</h1>
            </Route>
        </Switch>
    );
};

export default Router;
