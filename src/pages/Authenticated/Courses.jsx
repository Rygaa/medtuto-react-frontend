// import classes from './Header.module.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../../components/Course"
import classes from "../../assets/6-pages/Courses.module.scss"

import { requestCourses } from "../../store/proxy"

import { useRef } from "react";

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const myRef = useRef();

    useEffect(() => {
        dispatch(requestCourses({ idToken }))
    }, [dispatch, idToken])


    const coursesList = courses.map((course) => (
        <Course key={Math.random()} name={course.name} pubId={course.pubId} index={course.index}></Course>
    ));


    return (
        <section className={classes['courses-section']}>
            <p>Select one of this courses</p>
            <div className={classes['courses-container']} ref={myRef}>{coursesList}</div>
        </section>
    );
}

export default Courses;