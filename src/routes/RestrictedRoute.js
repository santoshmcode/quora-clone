import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectUser } from "../features/userSlice";

const RestrictedRoute = ({
  component: Component,
  restricted = false,
  ...rest
}) => {
  const user = useSelector(selectUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && restricted ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default RestrictedRoute;
