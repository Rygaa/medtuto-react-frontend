// import classes from './Header.module.scss'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";
import classes from '../../assets/6-pages/Login.module.scss'
import img from "../../img/email.png"

const Login = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameOnChange = (e) => {
        setUsername(e.target.value);
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    }
    const history = useHistory();

    const formOnSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password, history }));
    }

    return (
        <section className={classes['login']}>
            <form onSubmit={formOnSubmit}>
                <p>Login</p>
                <div className={classes['div-input-container']}>
                    <img src={img}/>
                    <input placeholder='username' value={username} onChange={usernameOnChange} />
                </div>
                <div className={classes['div-input-container']}>
                    <img src={img}/>
                    <input placeholder='password' value={password} type="password" onChange={passwordOnChange} />
                </div>
                <div className={classes['div-checkbok-container']}>
                    <input type="checkbox" name="remeber_me" value="remember_me" />
                    <label for="remeber_me">Remember me</label>
                </div>
                <button className={classes['connect-button']}>Connect</button>
            </form>
        </section>
    );
}

export default Login;