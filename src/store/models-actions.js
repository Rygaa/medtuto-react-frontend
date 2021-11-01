import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../App'
import { useHistory } from "react-router"
import { modelsActions } from "./models-slice"
import { url } from "../_globalVar/_ip"
 

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

export const removeCourse = ({ idToken, modelPubId, coursePubId }) => {
    return async (dispatch) => {
        console.log('removeCourse');
        const response = await axios.post(url + `/remove-course`, {
            modelPubId,
            coursePubId
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(requestCourses2({idToken, modelPubId}))
    }
}

export const removeModel = ({ idToken, yearPubId, modelPubId }) => {
    return async (dispatch) => {
        console.log('removeModel');
        const response = await axios.post(url + `/remove-model`, {
            modelPubId,
            yearPubId
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(requestModels({ idToken, yearPubId }))
    }
}

export const removeYear = ({ idToken, yearPubId, facultyPubId }) => {
    return async (dispatch) => {
        console.log('removeYear');
        const response = await axios.post(url + `/remove-year`, {
            facultyPubId,
            yearPubId
        })

        const data = response.data
        if (data.error) {
            console.error(data.error)
            return;
        }
        dispatch(requestYears({ idToken, facultyPubId}))
    }
}

export const removeFaculty = ({ idToken, facultyPubId }) => {
    return async (dispatch) => {
        console.log('removeFaculty');

        const response = await axios.post(url + `/remove-faculty`, {
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
        const response = await axios.post(url + `/add-faculty`, {
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
        const response = await axios.post(url + `/add-year`, {
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

export const createNewModel = ({ idToken, yearPubId, modelName, description, picture1, picture2 }) => {
    return async (dispatch) => {
        const formData = new FormData();
        formData.append("yearPubId", yearPubId);
        formData.append("modelName", modelName);
        formData.append("description", description);
        formData.append("files", picture1);
        formData.append("files", picture2);
        const response = await axios.post(url + `/add-years-model`, formData)

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
        const response = await axios.post(url + `/add-course`, {
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

export const requestCourses = ({ idToken }) => {
    return async (dispatch) => {
        const link = decodeURI(window.location.pathname).split('/');
        const modelPubId = link[2];

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


