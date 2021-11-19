// import classes from './NavLinkButton.module.scss'
import { NavLink, useLocation } from "react-router-dom"
import classes from '../assets/5-components/Model.module.scss'
import {url} from "_globalVar/_ip"

const Model = (props) => {
    const image = `${url}/models/${props.pubId}`;
    const link = useLocation();
    return (
        <div className={classes['model']}>
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <p>{props.name}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            officiis doloribus quod, eligendi repudiandae fugiat dolore. {props.description} </p>
            <NavLink className={classes['nav-link']} to={`/models/${props.pubId}`}>Access</NavLink>
        </div>
    )

}

export default Model