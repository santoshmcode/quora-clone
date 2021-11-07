import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { Login } from "../components";

import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";
import { PostPage } from "../components/post-page/PostPage";
import { HomeMain } from "../components/HomeContents/HomeMain";
import { Notification } from "../components/Notifications/Notification";
import { Navbar } from "../components/Navbar/Navbar";
import Chat from "../components/sendMessage/Chat";

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
            <Navbar />
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
      <Route path="/homemaincontainer">
        <HomeMain />
      </Route>

      <Route path="/notifications">
        <Notification />
      </Route>
      <Route path="/chat" exact>
        <Chat />
      </Route>
    </Switch>
  );
};

export default Router;
