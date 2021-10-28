// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from './Course.module.scss'

const Course = (props) => {
    return (
        <div className={classes['course']}>
            <p>{props.name}</p>
            <div></div>
            <NavLink to={`/courses/${props.pubId}/`} className={classes['navLink']}>Access</NavLink>
        </div>
    );
}

export default Course