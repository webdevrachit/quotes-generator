import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/index.scss";
import { QuotesProvider } from "./context/QuotesContext";

ReactDOM.render(
    <React.StrictMode>
        <QuotesProvider>
            <App />
        </QuotesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
