import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
          <Route exact path={'*'} >
            <h1 className="text-center">Page Not found</h1>
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
