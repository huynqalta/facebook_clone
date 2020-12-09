import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import LoginHeader from './LoginHeader'
import Register from './Register'
import RegisterHeader from './RegisterHeader'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
