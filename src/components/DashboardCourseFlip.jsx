import { NavLink } from "react-router-dom"
import classes from '../assets/5-components/DashboardCourseFlip.module.scss'
import { useRef } from "react"
import { useState } from "react"
import ReactCardFlip from 'react-card-flip';
import 'keen-slider/keen-slider.min.css'


const DashboardCourseFlip = (props) => {
    const modelId = decodeURI(window.location.pathname).split('/')[2];
    const link = decodeURI(window.location.pathname);
    const myRef = useRef();
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }
    
    const select = () => {
        if (props.index === 1) {
            if (decodeURI(link).split('/').length === 3) {
                myRef.current.click();
            }
        }
    }
        
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName={classes["ReactCardFlip"]} >
            <div className={classes['course-flip-front']}>
                <div>
                    <p>{props.name}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re
                        ugue ac enim pulv quis </p>
                </div>
                <button className={classes["flip-button"]} onClick={handleClick}>Click to flip</button>

            </div>

            <div className={classes['course-flip-back']}>
                <div>
                    <p>{props.faculty}</p>
                    <p>{props.year}</p>
                    <p>{props.model}</p>
                    <p>{"Mokhtar Frih"}</p>
                </div>
                <button className={classes["flip-button"]} onClick={handleClick}>Click to flip</button>
            </div>
        </ReactCardFlip>
    );
}


// <NavLink ref={myRef} to={`/models/${modelId}/${props.pubId}/`} className={classes['nav-link']}>{`Learn more`}</NavLink>

export default DashboardCourseFlip