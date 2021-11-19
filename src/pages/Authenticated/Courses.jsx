// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useLocation } from "react-router-dom"
import Course from "../../components/Course"
import classes from "../../assets/6-pages/Courses.module.scss"

import { requestCourses } from "../../store/proxy"

import { requestTeachers } from '../../store/Joho/models-actions'
import ChooseYourTeacher from "./ChooseYourTeacher";
import Teacher from "../../components/Teacher";
import { useRef } from "react";

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const location = useLocation();
    const modelPubId = location.pathname.split('/')[2];
    const image = `http://192.168.1.4:3005/models/big/${modelPubId}`;
    const [showReviews, setShowReviews] = useState(false);
    const myRef = useRef();

    const teachers = useSelector((state) => state.models.teachers);
    const [selectedTeacher, setSelectedTeacher] = useState('');
    useEffect(() => {
        dispatch(requestCourses({ idToken }))
    }, [])
    const selectedTeacherOnChange = (teacher) => {
        console.log('teacher:', teacher);
        setSelectedTeacher(teacher)
    }

    useEffect(() => {
        const course = myRef.current.children[0]
        console.log(course);
    }, [courses])


    // { value: course.name, label: course.name, pubId: course.pubId }
    const path = window.location.pathname;
    const teachersList = teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    ));



    // { value: course.name, label: course.name, pubId: course.pubId }
    
    const coursesList = courses.map((course) => (
        <Course key={Math.random()} name={course.name} pubId={course.pubId} index={course.index}></Course>
    ));

    const showReviewsOnClick = (e) => {
        setShowReviews(!showReviews);
    }


    return (
        <section className={classes['courses-section']}>
            <p>Select one of this courses</p>
            <div className={classes['courses-container']} ref={myRef}>{coursesList}</div>
        </section>
    );
}

export default Courses;