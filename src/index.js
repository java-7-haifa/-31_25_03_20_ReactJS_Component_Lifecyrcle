import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MyWrapper from "./lifecycle/MyWrapper";

const app = (<Router><App /></Router>);
const myComponent = <MyWrapper/>

ReactDOM.render(myComponent,document.getElementById("root")
);
