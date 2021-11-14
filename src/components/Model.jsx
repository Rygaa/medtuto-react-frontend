// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import classes from '../assets/5-components/Model.module.scss'

const Model = (props) => {
    const image = `http://192.168.1.4:3005/models/small/${props.pubId}`;
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