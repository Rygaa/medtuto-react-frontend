import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../../App'
import { useHistory } from "react-router"
import { url } from "../../_globalVar/_ip"
import { ToastContainer, toast } from 'react-toastify';

export const signUp = ({ username, password, email, history }) => {
    return async (dispatch) => {
        const response = await axios.post(url + `/signUp`, {
            username,
            password,
            email
        })

        const data = response.data
        if (data.error) {
            toast.error(data.error)
            return;
        }
        toast.success(data.message)
        dispatch(login({username, password, history}))
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
            toast.error(data.error)
            return;
        }
        toast.success(data.message)

        dispatch(userActions.setUsername(data.username));
        dispatch(userActions.setPubId(data.pubId));
        dispatch(userActions.setIsConnected(true));
        dispatch(userActions.setIdToken(data.idToken));
        dispatch(userActions.setEmail(data.email));
        dispatch(userActions.setIsTeacher(data.isTeacher));
        const rememberMe = localStorage.getItem('remember-me') == 'true' ? true : false
        if (rememberMe) {
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
        }
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
        dispatch(userActions.setPubId(data.pubId));
        dispatch(userActions.setIsConnected(true));
        dispatch(userActions.setEmail(data.email));
        dispatch(userActions.setIsTeacher(data.isTeacher));


    }
}

export const requestMyAccount = ({ idToken }) => {
    return async (dispatch) => {
        console.log('checkidtoken');
        const response = await axios.post('http://38.133.52.102:3005/my-account', {
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
  


    }
}



export const updateMyAccountProfile = ({ idToken, newProfilePicture }) => {
    return async (dispatch) => {
        const formData = new FormData();
        formData.append("idToken", idToken);
        formData.append("files", newProfilePicture);
        const response = await axios.post(url + `/update-my-account-picture`, formData)

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log(data);
    }

}


