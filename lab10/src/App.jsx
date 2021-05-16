import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Search/Home"
import About from "./components/About/About"

function App() {
  return (
   <Router basename="/lab10/build">
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about/:user" component={About}/>
     </Switch>
   </Router>
  );
}

export default App;