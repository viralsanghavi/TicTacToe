import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartGame from './Components/StartGame';
import SelectSide from './SelectSide';
import Play from './Components/Play';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/select">
            <SelectSide />
          </Route>
          <Route exact path="/Start">
            <Play />
          </Route>
          <Route exact path="/">
            <StartGame />
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
