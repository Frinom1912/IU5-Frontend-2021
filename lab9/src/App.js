import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Home from "./Home"
import About from "./About"

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/lab9/build/index.html">
          <Home tryFind={(user) => setUsername(user)}/>
        </Route>
        <Route path="/lab9/build/index.html">
          <About user={username}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
