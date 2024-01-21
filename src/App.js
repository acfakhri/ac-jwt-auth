import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route  path='/register'>
          <Register />
        </Route>
        <Route  path='/dashboard'>
          <Navbar />
          <Dashboard />
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
