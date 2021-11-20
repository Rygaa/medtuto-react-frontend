import axios from "axios"
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
