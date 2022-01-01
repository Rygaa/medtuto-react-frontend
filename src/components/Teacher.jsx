import classes from '../assets/5-components/Teacher.module.scss'
import unfound from "../img/teacher.png"
import { useEffect } from "react"
import { url } from "_globalVar/_ip"
import { useState } from 'react'

const Teacher = (props) => {
    const selectedTeacherOnChange = () => {
        if (props.name == null) { return } 
        else if (props.selected) { return }
        else {
            props.selectedTeacherOnChange(props)
        }
    }
    useEffect(() => {
        if (props.selected) {
            selectedTeacherOnChange();
        }
 
    }, [])



    const image = props.pubId ? `${url}/account/${props.pubId}` : unfound;

    const empty = classes['teacher-empty-profile-container']
    const notEmpty = classes['teacher-profile-container']
    const selected = classes['teacher-profile-container-selected']

    return (
        <div className = {(props.name ? (props.selected ? (selected) : (notEmpty)) : (empty))}
         onClick={selectedTeacherOnChange}>
            <img src={image} alt={'teacher'} />
        </div>
    );
}

export default Teacher