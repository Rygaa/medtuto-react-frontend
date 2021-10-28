// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import NavLinkButton from "../../components/NavLinkButton";
import ppIMG from "../../img/pp.png"
import classes from "./ChooseYourTeacher.module.scss"
import { requestTeachers } from '../../store/models-actions'
import Teacher from "../../components/Teacher";

const ChooseYourTeacher = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
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
    // { value: course.name, label: course.name, pubId: course.pubId }
    const path = window.location.pathname;
    const teachersList = teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    ));



    return (
        <section className={classes['choose-your-teacher']}>
            <div className={classes['teachers-container']}>{teachersList}</div>
            <div className={classes['teacher-info-container']}>
                <NavLink to={`${path}${selectedTeacher}`}>{selectedTeacher}e</NavLink>
            </div>
            
        </section>
    );
}

export default ChooseYourTeacher;