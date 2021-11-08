// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from '../assets/5-components/Model.module.scss'
import carta from '../img/img.png'
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import ReactCardFlip from 'react-card-flip';

const Model = (props) => {
    const image = `http://192.168.1.4:3005/models/small/${props.pubId}`;
    // <div style={{ backgroundImage: `url(${image})` }}></div>
    return (
        <div className={classes['model']}>
            <div style={{backgroundImage: `url(${carta})`}}></div>
            <p>Chimie</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            officiis doloribus quod, eligendi repudiandae fugiat dolore. </p>
            <NavLink className={classes['nav-link']} to={`/models/${props.pubId}`}>Access</NavLink>
        </div>
    )

}

export default Model