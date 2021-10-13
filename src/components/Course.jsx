// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'

const Course = (props) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <p>{props.name}</p>
            <NavLinkButton path={`/courses/${props.pubId}/`}>ACCESS</NavLinkButton>
        </div>
    );
}

export default Course