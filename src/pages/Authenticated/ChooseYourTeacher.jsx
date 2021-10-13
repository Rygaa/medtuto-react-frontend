// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import NavLinkButton from "../../components/NavLinkButton";

import { requestTeachers } from '../../store/models-actions'

const ChooseYourTeacher = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const teachers = useSelector((state) => state.models.teachers);

    useEffect(() => {
        dispatch(requestTeachers({ idToken }))
    }, [])

    // { value: course.name, label: course.name, pubId: course.pubId }
    const path = window.location.pathname;
    const coursesList = teachers.map((teacher) => (
        
        <NavLinkButton key={Math.random()} path={`${path}${teacher.name}`}>{teacher.name}</NavLinkButton>


    ));


    return (
        <section>
            <div>{coursesList}</div>
        </section>
    );
}

export default ChooseYourTeacher;