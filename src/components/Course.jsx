// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from '../assets/5-components/Course.module.scss'
import img from '../img/image 2.png'

const Course = (props) => {
    const modelId = decodeURI(window.location.pathname).split('/')[2];
    // <p>{props.name}</p>

    return (
        <div className={classes['course']}>
            <div>
                <img src={img}/>
            </div>
            <div>
                <p>{props.name}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re
                    ugue ac enim pulv quis </p>
                <NavLink to={`/courses/${props.pubId}/`} className={classes['nav-link']}>{`Learn more`}</NavLink>
            </div>

        </div>
    );
}

export default Course