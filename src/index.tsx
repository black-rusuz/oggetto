import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "@core/store";
import {App} from "./app";
import reportWebVitals from "./reportWebVitals";
import "@styles/index.scss"
import {theme} from "@core/theme/mui";
import {ThemeProvider} from "@mui/material";

const appElement = document.getElementById("app");

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <StoreProvider>
                    <App/>
                </StoreProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    appElement
);

reportWebVitals();
