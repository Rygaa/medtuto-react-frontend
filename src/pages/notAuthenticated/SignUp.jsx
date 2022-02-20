import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {signUp} from '../../store/User/user-actions'
import classes from '../../assets/6-pages/SignUp.module.scss'
import emailIMG from "../../img/email.png"
import passwordIMG from "../../img/password.png"
import usernameIMG from "../../img/username.png"
import { motion } from "framer-motion";
import animations from "assets/1-helpers/animation";


const SignUp = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const formOnSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({username, email, password, history}));
    }

    return (
        <motion.section 
            variants={animations.signUp}
            initial='hidden'
            animate='visible'
            exit='exit'  
            className={classes['sign-up']}
        >
            <form onSubmit={formOnSubmit}>
                <p>Sign up</p>
                <div className={classes['div-input-container']}>
                    <img src={usernameIMG} alt={'username'}/>
                    <div className={classes['separator']}></div>
                    <input placeholder='username' value={username} onChange={(e) => {setUsername(e.target.value); }} type="text" spellcheck="false" />
                </div>
                <div className={classes['div-input-container']}>
                    <img src={emailIMG} alt={'email'}/>
                    <div className={classes['separator']}></div>
                    <input placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value); }} type="text" spellcheck="false" />
                </div>
                <div className={classes['div-input-container']}>
                    <img src={passwordIMG} alt={'password'} />
                    <div className={classes['separator']}></div>
                    <input placeholder='password' value={password} type="password" onChange={(e) => { setPassword(e.target.value); }}/>
                </div>
                <button>Submit</button>
            </form>
        </motion.section>
    );
}

export default SignUp;