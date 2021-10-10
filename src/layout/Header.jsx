// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';

const Header = (props) => {
    return(
        <header>
            <NavLinkButton path={'/'}>Dashboard</NavLinkButton>
            <NavLinkButton path={'/sign-up'}>Sign up</NavLinkButton>
            <NavLinkButton path={'/login'}>Login</NavLinkButton>
        </header>
    );
}

export default Header;