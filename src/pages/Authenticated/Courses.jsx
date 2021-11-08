// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useLocation } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import carta from "../../img/carta.png"
import carta1 from "../../img/carta1.png"
import classes from "../../assets/6-pages/Courses.module.scss"


import { requestCourses, requestTeachers } from '../../store/models-actions'
import ChooseYourTeacher from "./ChooseYourTeacher";
import Teacher from "../../components/Teacher";

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const location = useLocation();
    const modelPubId = location.pathname.split('/')[2];
    const image = `http://192.168.1.4:3005/models/big/${modelPubId}`;
    const [showReviews, setShowReviews] = useState(false);


    const teachers = useSelector((state) => state.models.teachers);
    const [selectedTeacher, setSelectedTeacher] = useState('');
    useEffect(() => {
        dispatch(requestTeachers({ idToken }))
    }, [])
    const selectedTeacherOnChange = (teacher) => {
        console.log('teacher:', teacher);
        setSelectedTeacher(teacher)
    }

    useEffect(() => {

    }, [selectedTeacher])

    useEffect(() => {
        console.log('location changed');
        dispatch(requestTeachers({ idToken }))
        console.log(location);
    }, [location])

    // { value: course.name, label: course.name, pubId: course.pubId }
    const path = window.location.pathname;
    const teachersList = teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    ));

    teachersList.push(teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    )));
    teachersList.push(teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    )));




    useEffect(() => {
        dispatch(requestCourses({ idToken }))
    }, [])

    // { value: course.name, label: course.name, pubId: course.pubId }
    
    const coursesList = courses.map((course) => (
        <Course key={Math.random()} name={course.name} pubId={course.pubId}></Course>
    ));

    const showReviewsOnClick = (e) => {
        setShowReviews(!showReviews);
    }

    console.log(location);

    return (
        <section className={classes['section']}>
            <div className={classes['courses-section']}>
                <p>Select one of this courses</p>
                <div className={classes['courses-container']}>{coursesList}</div>
            </div>
            <div className={classes['teachers-section']}>
                <div className={classes['titles']}>
                    <p>Make your choices</p>
                    <p>We deliver multiple choice of teachers</p>
                </div>
                <div className={classes['teachers-picture']}>{teachersList}</div>
                <div className={classes['teacher-info']}>
                    <p>First name: Frih</p>
                    <p>Last name: Mokhtar</p>
                    <p>Rating: 10%</p>
                    <p>Number of videos: 10</p>
                </div>
                <p onClick={showReviewsOnClick}>Reviews:</p>
                <div className={classes['reviews-container']}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                </div>
                <button className={classes['button-choose-teacher']}>Choose</button>
            </div>


        </section>
    );
}

export default Courses;