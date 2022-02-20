import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from '../../store/User/user-actions'
import classes from '../../assets/6-pages/Login.module.scss'
import img from "../../img/email.png"
import { motion } from "framer-motion";
import Checkbox from "components/Checkbox";
import animations from "assets/1-helpers/animation";

const Login = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const rememberMe = localStorage.getItem('remember-me') === 'true' ? true : false
    const savedUsername = localStorage.getItem('username')
    const savedPassword = localStorage.getItem('password')
    const [username, setUsername] = React.useState(savedUsername);
    const [password, setPassword] = React.useState(savedPassword);

    const formOnSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password, history }));
    }

    const rememberMeOnChange = (e) => {
        localStorage.setItem('remember-me', e)
        localStorage.removeItem('username')
        localStorage.removeItem('password')
    }

    return (
        <motion.section 
            variants={animations.login} 
            initial='hidden' 
            animate='visible' 
            exit='exit' 
            className={classes['login']}
        >
            <form onSubmit={formOnSubmit}>
                <p>Login</p>
                <div className={classes['div-input-container']}>
                    <img src={img} alt={'username'}/>
                    <div className={classes['separator']}></div>
                    <input placeholder='username' value={username} onChange={(e) => { setUsername(e.target.value); }} type="text" spellcheck="false"/>
                </div>
                <div className={classes['div-input-container']}>
                    <img src={img} alt={'password'}/>
                    <div className={classes['separator']}></div>
                    <input placeholder='password' value={password} type="password" onChange={(e) => { setPassword(e.target.value); }} />
                </div>
            
                <div className={classes['div-checkbox-container']}>
                    <Checkbox id="c1" defaultChecked={rememberMe} onCheckedChange={rememberMeOnChange} />
                    <label for="remeber_me">Remember me</label>
                </div>
                <button>Connect</button>
            </form>

        </motion.section>
    );
}

export default Login;