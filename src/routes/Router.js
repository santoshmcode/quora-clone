import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { Home, Login } from "../components";

import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";
import { PostPage } from "../components/post-page/PostPage";
import { HomeMain } from "../components/HomeContents/HomeMain";
import { Notification } from "../components/Notifications/Notification";
import { Navbar } from "../components/Navbar/Navbar";
import Chat from "../components/sendMessage/Chat";

import PrivateRoute from "./PrivateRoute";
import { Link } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import { PostData } from "../components/dbTest/PostData";
import { TextEditor } from "../components/post-page/Editor";

const Router = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Switch>
      {/* Restricted Route will not allow LoggedIn User to access login page */}
      <RestrictedRoute
        restricted={true}
        path="/login"
        component={Login}
        exact
      />

      <Route path="/home" exact>
        {user ? (
          <>
            <Home />
            <button onClick={() => auth.signOut()}>Logout</button>
          </>
        ) : (
          <>
            <Redirect to="/login" />
          </>
        )}
      </Route>

      <Route exact path="/question/:question_id">
        <Navbar />
        <PostPage />
      </Route>

      <Route path="/notifications">
        <Navbar />
        <Notification />
      </Route>
      <Route path="/chat" exact>
        <Navbar />
        <Chat />
      </Route>
      <Route path="/answers" exact>
        <Navbar />
        <h1>Answers</h1>
      </Route>
      <Route>
        <Navbar />
        <p>Page Not found</p>
      </Route>
    </Switch>
  );
};

export default Router;
