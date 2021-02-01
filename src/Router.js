import React from "react";
import Home from "./components/Home";
import Home from "./containers/Home";
import { Switch, Route } from "react-router";
// Write component imports here //
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";

// Start Router function here //
export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/car/:id" component={Car}></Route>
    </Switch>
  );
}
