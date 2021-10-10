// import classes from './Header.module.scss'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {signUp} from '../../store/user-actions'
import { userActions } from "../../store/user-slice";

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
        <section>
            <form onSubmit={formOnSubmit}>
                <input placeholder='username' value={username} onChange={usernameOnChange}/>
                <input placeholder='email' value={email} onChange={emailOnChange}/>
                <input placeholder='password' value={password} type="password" onChange={passwordOnChange}/>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default SignUp;