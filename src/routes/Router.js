import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { Login } from "../components";
import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";
import { PostPage } from "../components/post-page/PostPage";
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
            <Route path="/" exact>
                {user ? (
                    <>
                        <h1>Home page</h1>
                        <p>Hello {user.email}</p>
                        <button onClick={() => auth.signOut()}>Logout</button>
                    </>
                ) : (
                    <Login />
                )}
            </Route>
            <Route exact path="/postPage">
                <PostPage />
            </Route>
            <Route exact path="/dbTest">
                <PostData />
            </Route>
        </Switch>
    );
};

export default Router;
