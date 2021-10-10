// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import Header from "./Header";
const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
        </div>
    );
}

export default Layout;