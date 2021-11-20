import axios from "axios"
import { modelsActions } from "./joho-slice"
import { url } from "../../_globalVar/_ip"

export const addReview = ({ idToken, review }) => {
    return async (dispatch) => {
        const link = decodeURI(window.location.pathname).split('/');
        const teacherPubId = link[4];
        const response = await axios.post(url + `/add-review`, {
            idToken,
            teacherPubId,
            review,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }

    }
}

export const addLink = ({ idToken, teacher, username, coursePubId, links, videos, files }) => {
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
        requestLearning2({idToken, teacher, course: coursePubId})
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
        const course = link[3];

        const response = await axios.post(url + `/teachers`, {
            idToken,
            course,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log(data);
        dispatch(modelsActions.setTeachers(data.teachers))
    }
}


export const requestLearning = ({ idToken }) => {
    return async (dispatch) => {
        console.log('requestLearning');

        const link = decodeURI(window.location.pathname).split('/');
        const course = link[3];
        const teacher = link[4];
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

export const requestLearning2 = ({ idToken, course, teacher }) => {
    return async (dispatch) => {

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


