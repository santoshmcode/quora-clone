import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
