import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../App'
import { useHistory } from "react-router"
import { modelsActions } from "./models-slice"



export const requestFaculties = ({ idToken }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/faculties', {
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

export const requestYears = ({ idToken, faculty }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/years', {
            idToken,
            faculty,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(modelsActions.setYears(data.years))
    }
}


export const requestModels = ({ idToken, faculty, year }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/models', {
            idToken,
            faculty,
            year,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(modelsActions.setModels(data.models))
    }
}

export const requestCourses = ({ idToken }) => {
    return async (dispatch) => {
        const link = decodeURI(window.location.pathname).split('/');
        const model = link[2];

        const response = await axios.post('http://38.133.52.102:3005/courses', {
            idToken,
            model,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(modelsActions.setCourses(data.courses))
    }
}







