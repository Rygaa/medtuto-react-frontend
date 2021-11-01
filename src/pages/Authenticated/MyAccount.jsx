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

import { requestCourses } from '../../store/user-actions'

const MyAccount = (props) => {
 
    return (
        <section>
            <input type="checkbox"/>
            <label>Became teacher</label>
        </section>
    );
}

export default MyAccount;