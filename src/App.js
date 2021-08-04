import GlobalStyles from './globalStyles';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Login from './pages/Contacto/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <GlobalStyles/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Login" exact component={Login}/>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
