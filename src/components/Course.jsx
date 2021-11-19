// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from '../assets/5-components/Course.module.scss'
import img from '../img/image 2.png'
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

const Course = (props) => {
    const [oldLink, setOldLink] = useState(decodeURI(window.location.pathname))
    const modelId = decodeURI(window.location.pathname).split('/')[2];
    const link = decodeURI(window.location.pathname);
    const myRef = useRef();

    useEffect(() => {
        select();
    }, [])
    // <p>{props.name}</p> 
    const select = () => {
        if (props.index == 1) {
            // myRef.current.click();
            if (decodeURI(link).split('/').length == 3) {
                myRef.current.click();
            }
        }
    }

    return (
        <div className={classes['course']}>
        
            <div>
                <p>{props.name}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re
                    ugue ac enim pulv quis </p>
                <NavLink ref={myRef} to={`/models/${modelId}/${props.pubId}/`} className={classes['nav-link']}>{`Learn more`}</NavLink>
            </div>

        </div>
    );
}

export default Course