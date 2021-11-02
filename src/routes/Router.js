import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components";
import { CreateSpace } from "../components/QuestionAnswer/CreateSpace";
import { HomeMain } from "../components/QuestionAnswer/HomeMain";
import { QandA } from "../components/QuestionAnswer/QandA";
import { SpacesTofollow } from "../components/QuestionAnswer/SpacesTofollow";

const Router = () => {
    return (
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/homemaincontainer">
          <HomeMain/>
        </Route>
      
      </Switch>
    );
};

export default Router;
