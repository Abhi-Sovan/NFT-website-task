import React from "react";
import  ReactDom from "react-dom/client";
import App from "./App"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.css';

let Root=ReactDom.createRoot(document.querySelector("#root"))

Root.render(
    <React.StrictMode>
        <App/>        
    </React.StrictMode>
)




