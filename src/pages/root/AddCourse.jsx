// import classes from './Header.module.scss'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";
import Select from 'react-select'
import { createNewYear, requestFaculties, createNewModel, removeCourse,requestModels, requestYears, requestCourses, createNewCourse, requestCourses2 } from '../../store/models-actions'

const AddCourse = (props) => {
    const idToken = useSelector((state) => state.user.idToken);
    const dispatch = useDispatch();
    const faculties = useSelector((state) => state.models.faculties);
    const years = useSelector((state) => state.models.years);
    const models = useSelector((state) => state.models.models);
    const courses = useSelector((state) => state.models.courses);

    const [newCourse, setNewCourse] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [selectedModel, setSelectedModel] = useState('')


    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.pubId)
        dispatch(requestYears({ idToken, facultyPubId: e.pubId }))
    }

    const yearsSelectOnChange = (e) => {
        setSelectedYear(e.pubId)
        dispatch(requestModels({ idToken, yearPubId: e.pubId }))
    }
    const modelsSelectOnChange = (e) => {
        console.log(e);
        setSelectedModel(e.pubId)
        console.log('selected:', selectedModel);
        dispatch(requestCourses2({ idToken, modelPubId: e.pubId}))
    }

    const newCourseOnChange = (e) => {
        setNewCourse(e.target.value);
    }
    const newCourseOnClick = (e) => {
        dispatch(createNewCourse({ model: selectedModel, course: newCourse}));
    }



    const facultiesList = faculties.map((faculty) => (
        { key: Math.random(), value: faculty.name, label: faculty.name, pubId: faculty.pubId }
    ));
    const yearsList = years.map((year) => (
        { key: Math.random(), value: year.name, label: year.name, pubId: year.pubId }
    ));
    const modelsList = models.map((model) => (
        { key: Math.random(), value: model.name, label: model.name, pubId: model.pubId }
    ));

    const removeOnClick = (e) => {
        console.log(e.target.attributes[0].nodeValue)
        const coursePubId = e.target.attributes[0].nodeValue
        dispatch(removeCourse({ idToken, modelPubId: selectedModel, coursePubId }))
    }
    const coursesList = courses.map((course) => (
        <div style={{ display: "flex" }}>
            <p key={Math.random()}>{course.name} {course.pubId}</p>
            <button onClick={removeOnClick} data-pubid={course.pubId}>Remove</button>
        </div>
    ));

    return (
        <div style={{ backgroundColor: "gray", gridColumn: "3 / 4", gridRow: "2 / 3", border:"5px solid black" }}>
            <Select options={facultiesList} placeholder='Choose your faculty' onChange={facultiesSelectOnChange}></Select>
            <Select options={yearsList} placeholder='Choose your year' onChange={yearsSelectOnChange}></Select>
            <Select options={modelsList} placeholder='Choose your model' onChange={modelsSelectOnChange}></Select>
            <div style={{ height: "200px", overflowY: "scroll" }}>
                {coursesList}
            </div>
            <input value={newCourse} onChange={newCourseOnChange} />
            <button onClick={newCourseOnClick}>ADD</button>
        </div>


    );
}

export default AddCourse;