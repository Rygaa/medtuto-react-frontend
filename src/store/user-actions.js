import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../App'
import { useHistory } from "react-router"
import { url } from "../_globalVar/_ip"

export const signUp = ({ username, password, email, history }) => {
    return async (dispatch) => {
        const response = await axios.post(url + `/signUp`, {
            username,
            password,
            email
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log(data);
        history.push('/')
    }
}

export const login = ({ username, password, email, history }) => {
    return async (dispatch) => {
        const response = await axios.post(url + `/login`, {
            username,
            password,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log(data);
        dispatch(userActions.setUsername(data.username));
        dispatch(userActions.setIsConnected(true));
        dispatch(userActions.setIdToken(data.idToken));
        localStorage.setItem('idToken', data.idToken);
        history.push('/')
    }
}


export const checkIdToken = ({ idToken }) => {
    return async (dispatch) => {
        console.log('checkidtoken');
        const response = await axios.post(url + `/checkIdToken`, {
            idToken,
        })

        const data = response.data
        if (data.error) {
            console.log(data.error);
            dispatch(userActions.setIsConnected(false));
            return;
        }
        console.log(data);
        const username = data.username
        dispatch(userActions.setUsername(username));
        dispatch(userActions.setIsConnected(true));


    }
}

export const becameTeacher = ({ idToken }) => {
    return async (dispatch) => {
        // console.log('checkidtoken');
        // const response = await axios.post('http://38.133.52.102:3005/checkIdToken', {
        //     idToken,
        // })

        // const data = response.data
        // if (data.error) {
        //     console.log(data.error);
        //     dispatch(userActions.setIsConnected(false));
        //     return;
        // }
        // console.log(data);
        // const username = data.username
        // dispatch(userActions.setUsername(username));
        // dispatch(userActions.setIsConnected(true));


    }
}

