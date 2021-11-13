import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Login } from "../components";
import { selectUser } from "../features/userSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  // console.log("user:", user);

  return user ? (
    <Route {...rest}>
      <Component />
    </Route>
  ) : (
    <Redirect to="/home" />
  );
};

export default PrivateRoute;
