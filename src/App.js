import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Layout from './layout/Layout';
import Dashboard from './pages/notAuthenticated/Dashboard';
import { Route, Router, Switch } from 'react-router';
import SignUp from './pages/notAuthenticated/SignUp';
import Login from './pages/notAuthenticated/Login';
import Models from './pages/Authenticated/Models';
import Courses from './pages/Authenticated/Courses';
import ChooseYourTeacher from './pages/Authenticated/ChooseYourTeacher';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
          <Models></Models>
        </Route>
        <Route path="/sign-up" exact>
          <SignUp></SignUp>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>

        <Route path="/models/:modelName" exact>
          <Courses></Courses>
        </Route>

        <Route path="/courses/:courseName" exact>
          <ChooseYourTeacher></ChooseYourTeacher>
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
