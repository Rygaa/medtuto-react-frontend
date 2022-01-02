import './App.css';
import Layout from './layout/Layout';
import Dashboard from './pages/notAuthenticated/Dashboard';
import { Route, Switch } from 'react-router';
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
import ToNameSection from 'pages/Authenticated/ToNameSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

function App() {
  const isConnected = useSelector((state) => state.user.isConnected)
  const idToken = localStorage.getItem('idToken');
  const dispatch = useDispatch();
  const location = useLocation();
  const [mykey, setMykey] = useState(null);
  const [oldLocation, setOldLocation] = useState(null);
  useEffect(() => {
    if (idToken && idToken !== 'null') {
      dispatch(userActions.setIdToken(idToken));
      dispatch(checkIdToken({ idToken }))
    } else {
      dispatch(userActions.setIsConnected(false));
    }
  }, [dispatch, idToken])
  console.log(location.pathname);

  useEffect(() => {
    setOldLocation(location.pathname); 
  }, [])

  // useEffect(() => {
  //   getTest();
  // }, [location])

  // const getTest = () => {
  //   if (location.pathname.split('/').length) {
  //     setOldLocation(Math.random());
  //   } else {
  //     setOldLocation(Math.random());
  //   }

  // }

  return (
    <Layout>
    <AnimatePresence exitBeforeEnter >
        <Switch location={location} 
        key={(location.pathname.split('/').length != 2 ? location.pathname.split('/').length : location.pathname.split('/')[1])}>
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
          <ToNameSection>
            <Courses></Courses>
            <ChooseYourTeacher></ChooseYourTeacher>
          </ToNameSection>
        </Route>
        <Route path="/models/:modelName/:courseName/:teacherName" exact>
          <Learning></Learning>
        </Route>
        <Route path="/models/:modelName/:courseName" exact>
          <ToNameSection>
            <Courses></Courses>
            <ChooseYourTeacher></ChooseYourTeacher>
          </ToNameSection>
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
      </AnimatePresence>
    </Layout>
  );
}

export default App;
