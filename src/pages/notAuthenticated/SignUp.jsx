// import classes from './Header.module.scss'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {signUp} from '../../store/user-actions'
import { userActions } from "../../store/user-slice";
import classes from '../../assets/6-pages/SignUp.module.scss'
import img from "../../img/email.png"

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

    return (
        <section className={classes['sign-up']}>
            <form onSubmit={formOnSubmit}>
                <p>Sign up</p>
                <div className={classes['div-input-container']}>
                    <img src={img}/>
                    <input placeholder='username' value={username} onChange={usernameOnChange}/>
                </div>
                <div className={classes['div-input-container']}>
                    <img src={img} />
                    <input placeholder='email' value={email} onChange={emailOnChange}/>
                </div>
                <div className={classes['div-input-container']}>
                    <img src={img} />
                    <input placeholder='password' value={password} type="password" onChange={passwordOnChange}/>
                </div>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default SignUp;