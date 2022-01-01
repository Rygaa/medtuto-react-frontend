import { NavLink } from "react-router-dom"
import classes from '../assets/5-components/Model.module.scss'
import {url} from "_globalVar/_ip"
import { motion } from "framer-motion"



const Model = (props) => {
    const image = `${url}/models/${props.pubId}`;
    return (
        <div className={classes['model']}>
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <p>{props.name}</p>
            <p>{props.description} </p>
            <NavLink className={classes['nav-link']} to={`/models/${props.pubId}/null`}>Access</NavLink>
        </div>
    )

}

export default Model