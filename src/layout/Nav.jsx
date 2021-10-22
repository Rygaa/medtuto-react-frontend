// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from './Nav.module.scss'
import signupIMG from '../img/sign up.png'
import aboutusIMG from '../img/about us.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <NavLinkButton
                path={'/aboutus'}
                img={aboutusIMG}
                text={'About us'}
            >About us</NavLinkButton>
            <NavLinkButton
                path={'/sign-up'}
                img={signupIMG}
                text={'Signup'}
            >Sign up</NavLinkButton>
            <NavLinkButton
                path={'/login'}
                img={loginIMG}
                text={'Login'}
            >Login</NavLinkButton>
        
        </nav>
    );
}

export default Nav;