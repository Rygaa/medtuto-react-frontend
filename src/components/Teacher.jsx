import classes from '../assets/5-components/Teacher.module.scss'
import unfound from "../img/teacher.png"
import { useEffect } from "react"
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
    const image = props.pubId ? `${url}/account/${props.pubId}` : unfound;


    return (
        <div className={classes['teacher-profile-container']} onClick={selectedTeacherOnChange}>
            <img src={image} alt={'teacher'} />
        </div>
    );
}

export default Teacher