import Login from './Components/LoginPage/Login';
import SignUp from './Components/SignUpPage/SignUp';
import { Route } from 'react-router-dom';
import Calculator from './Components/CalculatorPage/Calculator';
import { Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact >
          <Login />
        </Route>
        <Route path='/SignUP'>
          <SignUp />
        </Route>
        <Route path="/Calculator" exact >
          <Calculator />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
