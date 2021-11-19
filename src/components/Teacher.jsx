// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from '../assets/5-components/Teacher.module.scss'
import unfound from "../img/teacher.png"
import { useEffect, useState } from "react"
import { url } from "_globalVar/_ip"

const Teacher = (props) => {
    const selectedTeacherOnChange = () => {
        props.selectedTeacherOnChange(props)
    }
    useEffect(() => {
        if (props.selected) {
            selectedTeacherOnChange();
        }
    }, [])
    // <p>{props.name}</p>
    const image = props.pubId ? `${url}/account/${props.pubId}` : unfound;


    return (
        <div className={classes['teacher-profile-container']} onClick={selectedTeacherOnChange}>
            <img src={image} />
        </div>
    );
}

export default Teacher