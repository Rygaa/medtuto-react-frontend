// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from './Teacher.module.scss'
import ppIMG from "../img/pp.png"
import { useEffect, useState } from "react"

const Teacher = (props) => {
    const selectedTeacherOnChange = (e) => {
        props.selectedTeacherOnChange(props.name)
    }

    return (
        <div className={classes['teacher-profile-container']} onClick={selectedTeacherOnChange}>
            <img src={ppIMG} />
            <p>{props.name}</p>
        </div>
    );
}

export default Teacher