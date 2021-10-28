// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from './Nav.module.scss'
import signupIMG from '../img/sign up.png'
import aboutusIMG from '../img/about us.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'
import { useSelector } from "react-redux";

const Nav = (props) => {
    const isConnected = useSelector((state) => state.user.isConnected)
    return (!isConnected ? 
        <nav className={classes.nav}>
            <NavLinkButton
                path={'/'}
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
        </nav> :
        <nav className={classes.nav}>
            <NavLinkButton
                path={'/'}
                img={aboutusIMG}
                text={'About us'}
            >About us</NavLinkButton>

            <NavLinkButton
                path={'/myaccount'}
                img={loginIMG}
                text={'My account'}
            >My account</NavLinkButton>
        </nav>
    );
}

export default Nav;