import GlobalStyles from './globalStyles';
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import Index from './pages/Home/Index'

function App() {
  return (
    <div className="App">
      {/*<Home/>*/}
      <Index/>
      <GlobalStyles/>
      {/* <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      </Router> */}
   </div>
  );
}

export default App;
