import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Navigation from "./components/Navigation";
import Router from "./Router";
import store from "./redux/store";
import "./App.css";
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router></Router>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
