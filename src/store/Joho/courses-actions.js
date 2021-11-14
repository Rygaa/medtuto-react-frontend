import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../User/user-slice"
import { socket } from '../../App'
import { useHistory } from "react-router"
import { modelsActions } from "./joho-slice"
import { url } from "../../_globalVar/_ip"

export const requestCourses = ({ idToken }) => {
    return async (dispatch) => {
        const link = decodeURI(window.location.pathname).split('/');
        const modelPubId = link[2];
        console.log('requestCourses');
        const response = await axios.post(url + `/courses`, {
            idToken,
            modelPubId,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log('1:', data);

        dispatch(modelsActions.setCourses(data.courses))
    }
}

export const requestCourses2 = ({ idToken, modelPubId }) => {
    return async (dispatch) => {

        const response = await axios.post(url + `/courses`, {
            idToken,
            modelPubId,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log('2:', data);
        dispatch(modelsActions.setCourses(data.courses))
    }
}
