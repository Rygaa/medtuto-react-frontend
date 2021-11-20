import axios from "axios"
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