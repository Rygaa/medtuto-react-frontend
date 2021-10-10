// import classes from './Header.module.scss'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";

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
        <section>
            <form onSubmit={formOnSubmit}>
                <input placeholder='username' value={username} onChange={usernameOnChange} />
                <input placeholder='password' value={password} type="password" onChange={passwordOnChange} />
                <button>Connect</button>
            </form>
        </section>
    );
}

export default Login;