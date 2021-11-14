import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../User/user-slice"
import { socket } from '../../App'
import { useHistory } from "react-router"
import { modelsActions } from "./joho-slice"
import { url } from "../../_globalVar/_ip"

export const addLink = ({ idToken, username, coursePubId, links, videos, files }) => {
    return async (dispatch) => {
        console.log('addLink');
        const response = await axios.post(url + `/add-link`, {
            username,
            coursePubId,
            links,
            files,
            videos
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }

    }
}

export const teachForCourse = ({ idToken, username, coursePubId }) => {
    return async (dispatch) => {
        console.log('teachForCourse');
        const response = await axios.post(url + `/add-teacher-to-course`, {
            username,
            coursePubId
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        
    }
}







export const requestModels = ({ idToken, yearPubId }) => {
    return async (dispatch) => {
        const response = await axios.post(url + `/models`, {
            idToken,
            yearPubId
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log('models:', data);
        dispatch(modelsActions.setModels(data.models))
    }
}



export const requestTeachers = ({ idToken }) => {
    return async (dispatch) => {
        const link = decodeURI(window.location.pathname).split('/');
        const course = link[2];

        const response = await axios.post(url + `/teachers`, {
            idToken,
            course,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(modelsActions.setTeachers(data.teachers))
    }
}


export const requestLearning = ({ idToken }) => {
    return async (dispatch) => {
        console.log('requestLearning');

        const link = decodeURI(window.location.pathname).split('/');
        const course = link[2];
        const teacher = link[3];
        console.log(link);

        const response = await axios.post(url + `/learning`, {
            idToken,
            course,
            teacher
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log(data);
        dispatch(modelsActions.setVideos(data.videos))
        dispatch(modelsActions.setLinks(data.links))
        dispatch(modelsActions.setFiles(data.files))
    }
}


