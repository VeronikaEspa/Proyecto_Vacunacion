import GlobalStyles from './globalStyles';
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/Login/configLogin';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Home/>
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
