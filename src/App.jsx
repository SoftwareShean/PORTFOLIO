import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/nav/Navbar";
import { Route } from "react-router-dom";
import Photographer from "./components/Cards/HeaderCards/Photographer";
import Developer from "./components/Cards/HeaderCards/Developer";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/photographer" component={Photographer} />
      <Route exact path="/developer" component={Developer} />
        <Navbar />
    </div>
  );
}

export default App;
