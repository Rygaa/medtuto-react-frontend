// import classes from './Header.module.scss'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from '../../store/User/user-actions'
import classes from '../../assets/6-pages/Login.module.scss'
import img from "../../img/email.png"

import { styled } from '@stitches/react';
import { CheckIcon } from '@radix-ui/react-icons';
import { blackA } from '@radix-ui/colors';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
const Login = (props) => {
    const dispatch = useDispatch();

    // const [rememberMe, setRememberMe] = useState();
    const rememberMe = localStorage.getItem('remember-me') === 'true' ? true : false
    const savedUsername = localStorage.getItem('username')
    const savedPassword = localStorage.getItem('password')
    const [username, setUsername] = useState(savedUsername);
    const [password, setPassword] = useState(savedPassword);

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



    const StyledCheckbox = styled(CheckboxPrimitive.Root, {
        all: 'unset',
        backgroundColor: '#214C4E',
        width: 20,
        height: 20,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: "#12262B" },
    });

    const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
        color: '#00DBB6',
    });

    // Exports
    const Checkbox = StyledCheckbox;
    const CheckboxIndicator = StyledIndicator;


    const testtt = (e) => {
        console.log(rememberMe);
        localStorage.setItem('remember-me', e)
        localStorage.removeItem('username')
        localStorage.removeItem('password')
    }

    return (
        <section className={classes['login']}>
            <form onSubmit={formOnSubmit}>
                <p>Login</p>
                <div className={classes['div-input-container']}>
                    <img src={img} alt={'username'}/>
                    <input placeholder='username' value={username} onChange={usernameOnChange} type="text" spellcheck="false"/>
                </div>
                <div className={classes['div-input-container']}>
                    <img src={img} alt={'password'}/>
                    <input placeholder='password' value={password} type="password" onChange={passwordOnChange} />
                </div>
            
                <div className={classes['div-checkbox-container']}>
                    <Checkbox id="c1" defaultChecked={rememberMe} onCheckedChange={testtt}>
                        <CheckboxIndicator>
                            <CheckIcon />
                        </CheckboxIndicator>
                    </Checkbox>
                    <label for="remeber_me">Remember me</label>
                </div>
                <button>Connect</button>
            </form>
        </section>
    );
}

export default Login;