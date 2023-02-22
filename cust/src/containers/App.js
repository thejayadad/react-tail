import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store"
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar.js";
import Main from "./Main";
const store = configureStore();


const App = () => {
  return (
   <Provider store={store}>
    <Router>
      <div className="box">
        <header>
        <Navbar />
        </header>
        <Main />
    </div>
    </Router>
   </Provider>
  )
}

export default App