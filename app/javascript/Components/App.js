import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../redux/store";
import Greeting from "./Greeting";

const App = () => {
  return (
    <Provider store={store}>
       <Greeting/>
    </Provider>
  );
};

export default App;