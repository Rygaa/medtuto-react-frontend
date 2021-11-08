// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from '../assets/5-components/Teacher.module.scss'
import ppIMG from "../img/teacher.png"
import { useEffect, useState } from "react"

const Teacher = (props) => {
    const selectedTeacherOnChange = (e) => {
        props.selectedTeacherOnChange(props.name)
    }
    // <p>{props.name}</p>

    return (
        <div className={classes['teacher-profile-container']} onClick={selectedTeacherOnChange}>
            <img src={ppIMG} />
        </div>
    );
}

export default Teacher