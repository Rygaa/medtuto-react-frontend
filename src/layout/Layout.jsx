// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import Header from "./Header";
import classes from './Layout.module.scss'
const Layout = (props) => {
    return (
        <div className={classes.layout}>
            <Header></Header>
            <main className={classes.main}>{props.children}</main>
        
        </div>
    );
}

export default Layout;