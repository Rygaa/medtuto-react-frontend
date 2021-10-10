import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../App'
import { useHistory } from "react-router"

export const signUp = ({ username, password, email, history }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/signUp', {
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
        const response = await axios.post('http://38.133.52.102:3005/login', {
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
        history.push('/')
    }
}

