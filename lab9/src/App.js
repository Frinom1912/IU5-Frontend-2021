import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Home from "./Home"
import About from "./About"

function App() {
  const [username, setUsername] = useState("");
  let lpath="";
  let flag = false;
  if (process.env.REACT_APP_ENV === "dev") {
    lpath = "/"
    flag = true;
  }
  else
    lpath = "/lab9/build/index.html"
  return (
    <Router>
      <Switch>
        <Route exact path={lpath}>
          <Home tryFind={(user) => setUsername(user)}/>
        </Route>
        <Route path={ flag ? lpath: lpath+"/about"}>
          <About user={username}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
