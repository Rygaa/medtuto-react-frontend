// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useLocation } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import carta from "../../img/carta.png"
import carta1 from "../../img/carta1.png"
// import classes from "./Courses.module.scss"
import classes from "assets/6-pages/MyAccount.module.scss"
import { requestCourses } from '../../store/User/user-actions'
import Input from "components/Input"
const MyAccount = (props) => {
    // <Input txt={'02/02/2000'} />
    // <Input txt={'Mohamed Aissa'} />
    const username = useSelector((state) => state.user.username)
    const email = useSelector((state) => state.user.email)
    const isTeacher = useSelector((state) => state.user.isTeacher)

    return (
        <section className={classes['my-account']}>
            <div className={classes['public-container']}>
                <p>Public</p>
                <Input txt={username} />
                <Input txt={isTeacher == "true" ? "Teacher" : "Student"} />
            </div>
            <div className={classes['private-container']}>
                <p>Private</p>
                <Input txt={email} />
            </div>
            <button className={classes['update-button']}>Update</button>
        </section>
    );
}

export default MyAccount;