// import classes from './Header.module.scss'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from '../../store/User/user-actions'
import { userActions } from "../../store/User/user-slice";
import Select from 'react-select'
import { createNewYear, teachForCourse, addLink, createNewModel, removeCourse, requestModels, createNewCourse } from '../../store/Joho/models-actions'
import {requestCourses2 } from "../../store/proxy"

import { modelsActions } from "../../store/Joho/joho-slice";
import { requestFaculties, requestYears } from '../../store/proxy'
import classes from "assets/6-pages/TutorPanel.module.scss"

const TeacherDashboard = (props) => {
    
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const username = useSelector((state) => state.user.username);
    useEffect(() => {
        dispatch(requestFaculties({idToken}))
    }, [])
    const subscribeOnClick = (e) => {
        dispatch(teachForCourse({ idToken, username, coursePubId: selectedCourse }))
    }

    const faculties = useSelector((state) => state.models.faculties);
    const years = useSelector((state) => state.models.years);
    const models = useSelector((state) => state.models.models);
    const courses = useSelector((state) => state.models.courses);

    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedCourse, setSelectedCourse] = useState('')

    const [link, setLink] = useState('')
    const [video, setVideo] = useState('')
    const [file, setFile] = useState('')

    
    const facultiesList = [<option selected disabled>Select</option>]
    facultiesList.push(
        faculties.map((faculty) => (
            <option value={faculty.pubId} label={faculty.name}>{faculty.name}</option>
        ))
    )
    const yearsList = [<option selected disabled>Select</option>]
    yearsList.push(
        years.map((year) => (
            <option value={year.pubId} label={year.name}>{year.name}</option>
        ))
    )
    const modelsList = [<option selected disabled>Select</option>]
    modelsList.push(
        models.map((model) => (
            <option value={model.pubId} label={model.name}>{model.name}</option>
        ))
    )
    const coursesList = [<option selected disabled>Select</option>]
    coursesList.push(
        courses.map((course) => (
            <option value={course.pubId} label={course.name}>{course.name}</option>
        ))
    )

    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.target.value)
        dispatch(requestYears({ idToken, facultyPubId: e.target.value}))
    }
    const yearsSelectOnChange = (e) => {
        setSelectedYear(e.target.value)
        dispatch(requestModels({ idToken, yearPubId: e.target.value}));
    }
    const modelsSelectOnChange = (e) => {
        setSelectedModel(e.target.value)
        dispatch(requestCourses2({ idToken, modelPubId: e.target.value}))
    }
    const coursesSelectOnChange = (e) => {
        setSelectedCourse(e.target.value)
    }

    const linkOnChange = (e) => {
        setLink(e.target.value)
    }

    const videoOnChange = (e) => {
        const link = e.target.value.split('v=')
        const videoId = link[1]
        setVideo(videoId)
    }
 
    const fileOnChange = (e) => {
        setFile(e.target.value)
    }

    const addLinkOnClick = (e) => {
        dispatch(addLink({ idToken, username, coursePubId: selectedCourse, links: link, videos: video, files: file}))
    }
    const addFileOnClick = (e) => {

    }
    const addVideoOnClick = (e) => {

    }
 

    return (
        <section className={classes['tutor-panel']}>
            <div className={classes['selects-container']}>
                <select placeholder='Choose your faculty' onChange={facultiesSelectOnChange}>{facultiesList}</select>
                <select placeholder='Choose your year' onChange={yearsSelectOnChange}>{yearsList}</select>
                <select placeholder='Choose your model' onChange={modelsSelectOnChange}>{modelsList}</select>
                <select placeholder='Choose your course' onChange={coursesSelectOnChange}>{coursesList}</select>
            </div>
            <button onClick={subscribeOnClick}>Subscribe</button>
            <div>
                <br />
                <input value={link} onChange={linkOnChange} />
                <button onClick={addLinkOnClick}>Add Link</button>
                <br />
                <input value={file} onChange={fileOnChange} />
                <button onClick={addFileOnClick}>Add File</button>
                <br />
                <input value={video} onChange={videoOnChange} />
                <button onClick={addVideoOnClick}>Add Video</button>
                <br />
            </div>

        </section>


    );
}

export default TeacherDashboard;