import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./greetings";
import { useDispatch } from "react-redux";
import { fetchMessage } from "../redux/reducer";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMessage()), []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;