import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../User/user-slice"
import { socket } from '../../App'
import { useHistory } from "react-router"
import { modelsActions } from "./joho-slice"
import { url } from "../../_globalVar/_ip"

export const requestFaculties = ({ idToken }) => {
    return async (dispatch) => {
        const response = await axios.post(url + `/faculties`, {
            idToken,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(modelsActions.setFaculties(data.faculties))
    }
}