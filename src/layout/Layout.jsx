// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import Header from "./Header";
import classes from '../assets/4-layout/Layout.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    return (
        <div className={classes.layout}>
            <ToastContainer limit={1} autoClose={1500} position={'top-center'}
                className={classes['toast-container']}
                toastClassName={classes['toast-wrapper']}
                bodyClassName={classes['toast-body']}
                progressClassName={classes['toast-progress']}
            />
            <Header></Header>
            <main className={classes.main}>
                {props.children}
            </main>
            
        
        </div>
    );
}

export default Layout;