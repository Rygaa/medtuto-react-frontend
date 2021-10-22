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
import AddFaculty from './pages/root/AddFaculty';
import AddYear from './pages/root/AddYear';
import AddModel from './pages/root/AddModel';
import AddCourse from './pages/root/AddCourse';
import TeacherDashboard from './pages/Authenticated/TeacherDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from './store/user-slice';
import { checkIdToken } from './store/user-actions';

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
  }, [])


  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
          <Models></Models>
        </Route>
        <Route path="/teacher" exact>
          <Dashboard></Dashboard>
          <TeacherDashboard></TeacherDashboard>
        </Route>
        <Route path="/sign-up" exact>
          <SignUp></SignUp>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/root" exact>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
            <AddFaculty></AddFaculty>
            <AddYear></AddYear>
            <AddModel></AddModel>
            <AddCourse></AddCourse>
          </div>

       
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

      </Switch>
    </Layout>
  );
}

export default App;
