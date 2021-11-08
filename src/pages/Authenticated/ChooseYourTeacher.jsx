// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import NavLinkButton from "../../components/NavLinkButton";
import ppIMG from "../../img/pp.png"
import classes from "../../assets/6-pages/ChooseYourTeacher.module.scss"
import { requestTeachers } from '../../store/models-actions'
import Teacher from "../../components/Teacher";
import { NavLink, useParams, useLocation } from "react-router-dom"

const ChooseYourTeacher = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const teachers = useSelector((state) => state.models.teachers);
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const location = useLocation();
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

    // <div className={classes['teachers-container']}>{teachersList}</div>
    // <div className={classes['teacher-info-container']}>
    //     <NavLink to={`${path}${selectedTeacher}`}>{selectedTeacher}e</NavLink>
    // </div>

    return (
        <section className={classes['choose-your-teacher']}>
            <div className={classes['teachers-container']}>
                <p>Make your choices</p>
                <p>We deliver multiple choice of teachers</p>
                <div className={classes['teacher-container']}>{teachersList}</div>
                
                <p>First name: Frih</p>
                <p>Last name: Mokhtar</p>
                <p>Rating: 10%</p>
                <p>Number of videos: 10</p>
                <p>Reviews: </p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis reorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re</p>
            </div>
            
        </section>
    );
}

export default ChooseYourTeacher;