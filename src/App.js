import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Layout from './layout/Layout';
import Dashboard from './pages/notAuthenticated/Dashboard';
import { Route, Router, Switch } from 'react-router';
import SignUp from './pages/notAuthenticated/SignUp';
import Login from './pages/notAuthenticated/Login';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path="/sign-up" exact>
          <SignUp></SignUp>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
