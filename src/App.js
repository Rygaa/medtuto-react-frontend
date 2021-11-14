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
import Learning from './pages/Authenticated/Learning';
import TeacherDashboard from './pages/Authenticated/TeacherDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkIdToken } from './store/User/user-actions'
import { userActions } from './store/User/user-slice'
import MyAccount from './pages/Authenticated/MyAccount';


function App() {
  const isConnected = useSelector((state) => state.user.isConnected)
  const idToken = localStorage.getItem('idToken');
  const dispatch = useDispatch();
  useEffect(() => {
    if (idToken && idToken != 'null') {
      dispatch(userActions.setIdToken(idToken));
      dispatch(checkIdToken({ idToken }))
    } else {
      dispatch(userActions.setIsConnected(false));
    }
    console.log(process.cwd());
  }, [])
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact>
          
          {isConnected && 
            <Dashboard></Dashboard>
          }
          {!isConnected &&
            <Dashboard></Dashboard>
          }

        </Route>
        <Route path="/sign-up" exact>
          {!isConnected &&
            <SignUp></SignUp>
          }
        </Route>
        <Route path="/login" exact>
          {!isConnected &&
            <Login></Login>
          }
        </Route>
        <Route path="/models" exact>
          <Models></Models>
        </Route>
        <Route path="/models/:modelName" exact>
          <Courses></Courses>
        </Route>
        <Route path="/courses/:courseName/:teacherName" exact>
          <Learning></Learning>
        </Route>
        <Route path="/courses/:courseName" exact>
          <ChooseYourTeacher></ChooseYourTeacher>
        </Route>
        <Route path="/tutor-panel" exact>
          <TeacherDashboard></TeacherDashboard>
        </Route>
        <Route path="/my-account" exact>
          {isConnected &&
            <MyAccount></MyAccount>
          }
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
