import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../User/user-slice"
import { socket } from '../../App'
import { useHistory } from "react-router"
import { modelsActions } from "./joho-slice"
import { url } from "../../_globalVar/_ip"



export const requestYears = ({ idToken, facultyPubId }) => {
    return async (dispatch) => {
        const response = await axios.post(url + `/years`, {
            idToken,
            facultyPubId,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(modelsActions.setYears(data.years))
    }
}
