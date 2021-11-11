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

            {/* User need to loggedIn to access this routes */}
            {/* <PrivateRoute component={PostPage} path="/postPage" exact /> */}

            <Route exact path="/question/:question_id">
                <PostPage />
            </Route>
            <Route path="/homemaincontainer">
                <HomeMain />
            </Route>

            <Route path="/notifications">
                <Notification />
            </Route>
            <Route path="/chat" exact>
                <Chat />
            </Route>
            <Route>
                <PostData />
            </Route>
        </Switch>
    );
};

export default Router;
