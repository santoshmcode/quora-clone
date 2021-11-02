import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components";
import { QandA } from "../components/QuestionAnswer/QandA";

const Router = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                 <QandA/>
            </Route>
        </Switch>
    );
};

export default Router;
