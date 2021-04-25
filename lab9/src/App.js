import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory, useRouteMatch} from 'react-router-dom';

function Home({tryFind}) {
  const [state, setstate] = useState("");
  const h = useHistory();
  const Find = () => {
    tryFind(state);
    setstate("");
    h.push(`/about`);
  };
  return (
    <div className="container">
        <span>Поиск пользователя GitHub</span>
        <input 
          className="search-box" 
          value={state}
          onChange = {(event) => setstate(event.target.value)}
          onKeyPress = {(event)=> {
            if(event.key === "Enter")
              Find();
          }}
          id="bar" 
          placeholder="Поиск...">
        </input>
        <button 
          className="search-button"
          onClick={Find}>
        Поиск
        </button>
    </div>
  );
}

function About({}) {

}


function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
    <Switch>
      <Route path="/">
        <Home tryFind={(user) => setUsername(user)}/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
