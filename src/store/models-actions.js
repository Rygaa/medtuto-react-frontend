import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../App'
import { useHistory } from "react-router"
import { modelsActions } from "./models-slice"


export const removeFaculty = ({ idToken, facultyPubId }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/remove-faculty', {
            facultyPubId
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(requestFaculties({ idToken }));
    }
}

export const createNewFaculty = ({ idToken, facultyName }) => {
    return async (dispatch) => {
        console.log('createNewFaculty:', facultyName);
        const response = await axios.post('http://38.133.52.102:3005/add-faculty', {
            facultyName
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(requestFaculties({idToken}));
    }
}

export const createNewYear = ({ idToken, facultyPubId, yearName }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/add-year', {
            yearName,
            facultyPubId,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log('facultyPubId:', facultyPubId);
        dispatch(requestYears({ idToken, facultyPubId }));
    }
}

export const createNewModel = ({ idToken, yearPubId, modelName, description }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/add-years-model', {
            yearPubId,
            modelName,
            description,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        console.log(data);
        dispatch(requestModels({ idToken, yearPubId }));
    }
}

export const createNewCourse = ({ idToken, model, course }) => {
    return async (dispatch) => {
        console.log(model);
        console.log(course);
        const response = await axios.post('http://38.133.52.102:3005/add-course', {
            modelPubId: model,
            courseName: course,
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(requestCourses2({ idToken, modelPubId: model}));
    }
}


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

export const requestYears = ({ idToken, facultyPubId }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/years', {
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


export const requestModels = ({ idToken, yearPubId }) => {
    return async (dispatch) => {
        const response = await axios.post('http://38.133.52.102:3005/models', {
            idToken,
            yearPubId
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
        const modelPubId = link[2];

        const response = await axios.post('http://38.133.52.102:3005/courses', {
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

        const response = await axios.post('http://38.133.52.102:3005/courses', {
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


export const requestTeachers = ({ idToken }) => {
    return async (dispatch) => {
        const link = decodeURI(window.location.pathname).split('/');
        const course = link[2];

        const response = await axios.post('http://38.133.52.102:3005/teachers', {
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

        const response = await axios.post('http://38.133.52.102:3005/learning', {
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


