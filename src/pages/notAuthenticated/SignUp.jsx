// import classes from './Header.module.scss'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {signUp} from '../../store/User/user-actions'
import classes from '../../assets/6-pages/SignUp.module.scss'
import emailIMG from "../../img/email.png"
import passwordIMG from "../../img/password.png"
import usernameIMG from "../../img/username.png"
import { motion } from "framer-motion";

const animation = {
    hidden: {
        y: '100vh',
    },
    visible: {
        y: 0,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            ease: 'easeInOut',
            duration: .35,
        }
    }
}

const SignUp = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const usernameOnChange = (e) => {
        setUsername(e.target.value);
    }

    const emailOnChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    }
    const history = useHistory();

    const formOnSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({username, email, password, history}));
    }
    const animObj = {
        variants: animation,
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
    }
    return (
        <motion.section {...animObj} className={classes['sign-up']}>
            <form onSubmit={formOnSubmit}>
                <p>Sign up</p>
                <div className={classes['div-input-container']}>
                    <img src={usernameIMG} alt={'username'}/>
                    <div className={classes['separator']}></div>
                    <input placeholder='username' value={username} onChange={usernameOnChange} type="text" spellcheck="false" />
                </div>
                <div className={classes['div-input-container']}>
                    <img src={emailIMG} alt={'email'}/>
                    <div className={classes['separator']}></div>
                    <input placeholder='email' value={email} onChange={emailOnChange} type="text" spellcheck="false" />
                </div>
                <div className={classes['div-input-container']}>
                    <img src={passwordIMG} alt={'password'} />
                    <div className={classes['separator']}></div>
                    <input placeholder='password' value={password} type="password" onChange={passwordOnChange}/>
                </div>
                <button>Submit</button>
            </form>
        </motion.section>
    );
}

export default SignUp;