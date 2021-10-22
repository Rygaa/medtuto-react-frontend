// import classes from './Header.module.scss'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";
import Select from 'react-select'
import { createNewYear, teachForCourse, addLink, requestFaculties, createNewModel, removeCourse, requestModels, requestYears, requestCourses, createNewCourse, requestCourses2 } from '../../store/models-actions'
import { modelsActions } from "../../store/models-slice";

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

    const facultiesList = faculties.map((faculty) => (
        { key: Math.random(), value: faculty.name, label: faculty.name, pubId: faculty.pubId }
    ));
    const yearsList = years.map((year) => (
        { key: Math.random(), value: year.name, label: year.name, pubId: year.pubId }
    ));
    const modelsList = models.map((model) => (
        { key: Math.random(), value: model.name, label: model.name, pubId: model.pubId }
    ));
    const coursesList = courses.map((course) => (
        { key: Math.random(), value: course.name, label: course.name, pubId: course.pubId }
    ));

    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.pubId)
        dispatch(requestYears({ idToken, facultyPubId: e.pubId}))
    }
    const yearsSelectOnChange = (e) => {
        setSelectedYear(e.pubId)
        dispatch(requestModels({ idToken, yearPubId: e.pubId}));
    }
    const modelsSelectOnChange = (e) => {
        setSelectedModel(e.pubId)
        dispatch(requestCourses2({idToken, modelPubId: e.pubId}))
    }
    const coursesSelectOnChange = (e) => {
        setSelectedCourse(e.pubId)
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
        <section >
            <Select options={facultiesList} placeholder='Choose your faculty' onChange={facultiesSelectOnChange}></Select>
            <Select options={yearsList} placeholder='Choose your year' onChange={yearsSelectOnChange}></Select>
            <Select options={modelsList} placeholder='Choose your model' onChange={modelsSelectOnChange}></Select>
            <Select options={coursesList} placeholder='Choose your course' onChange={coursesSelectOnChange}></Select>
            <button onClick={subscribeOnClick}>Subscribe</button>
            <br/>
            <input value={link} onChange={linkOnChange}/>
            <button onClick={addLinkOnClick}>Add Link</button>
            <br />
            <input value={file} onChange={fileOnChange}/>
            <button onClick={addFileOnClick}>Add File</button>
            <br />
            <input value={video} onChange={videoOnChange}/>
            <button onClick={addVideoOnClick}>Add Video</button>
            <br />
        </section>


    );
}

export default TeacherDashboard;