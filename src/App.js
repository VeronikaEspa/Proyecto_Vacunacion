import GlobalStyles from './globalStyles';
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import Home from './pages/Home/Home';
// import Links from './component/Links';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/Login/configLogin';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Login/>
      {/* <Links/> */}
      <GlobalStyles/>
      <ToastContainer/>
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
