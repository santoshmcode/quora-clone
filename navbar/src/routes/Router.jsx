import React from 'react'
import { Route, Switch } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";
export const Router = () => {
    return (
      
            <Switch>
                <Route path="/homepage" >
                    <Navbar/>
            </Route>
             </Switch>
        
    )
}
