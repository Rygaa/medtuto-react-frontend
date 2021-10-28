// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useLocation } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import carta from "../../img/carta.png"
import carta1 from "../../img/carta1.png"
import classes from "./Courses.module.scss"

import { requestCourses } from '../../store/models-actions'

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const location = useLocation();
    const modelPubId = location.pathname.split('/')[2];
    const image = `http://localhost:3005/models/big/${modelPubId}`;

    useEffect(() => {
        dispatch(requestCourses({ idToken }))
    }, [])

    // { value: course.name, label: course.name, pubId: course.pubId }

    const coursesList = courses.map((course) => (
        <Course key={Math.random()} name={course.name} pubId={course.pubId}></Course>
    ));

    console.log(location);

    return (
        <section className={classes['choose-your-learning']}>
            <p>Choose your learning</p>
            <div>
                <div>{coursesList}</div>
            </div>
            <div>
                <img src={image}/>
            </div>
        </section>
    );
}

export default Courses;