// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"

import { requestCourses } from '../../store/models-actions'

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);


    useEffect(() => {
        dispatch(requestCourses({ idToken }))
    }, [])

    // { value: course.name, label: course.name, pubId: course.pubId }

    const coursesList = courses.map((course) => (
        <Course key={Math.random()} name={course.name} pubId={course.pubId}></Course>
    ));


    return (
        <section>
            <div>{coursesList}</div>
        </section>
    );
}

export default Courses;