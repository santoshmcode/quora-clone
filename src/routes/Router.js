import { useEffect, useState } from "react";
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
import { Error } from "../components/error/Error.jsx";
import Unanswered from "../components/unanswered/Unanswered";

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
            <Route path="/" exact>
                {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
            </Route>

            <Route path="/home" exact>
                {user ? (
                    <>
                        <Navbar />
                        <Home />
                    </>
                ) : (
                    <>
                        <Redirect to="/login" />
                    </>
                )}
            </Route>

            <Route exact path="/question/:question_id">
                {user ? (
                    <>
                        <Navbar />
                        <PostPage />
                    </>
                ) : (
                    <Redirect to="/login" />
                )}
            </Route>

            <Route path="/notifications" exact>
                {user ? (
                    <>
                        <Navbar />
                        <Notification />
                    </>
                ) : (
                    <Redirect to="/login" />
                )}
            </Route>

            <Route path="/chat" exact>
                {user ? (
                    <>
                        <Navbar />
                        <Chat />
                    </>
                ) : (
                    <Redirect to="/login" />
                )}
            </Route>
            <Route path="/answers" exact>
                {user ? (
                    <>
                        <Navbar />
                        <Unanswered />
                    </>
                ) : (
                    <Redirect to="/login" />
                )}
            </Route>
            <Route path="*">
                {/* <Navbar /> */}
                <Error />
            </Route>
        </Switch>
    );
};

export default Router;
