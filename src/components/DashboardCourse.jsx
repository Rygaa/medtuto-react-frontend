import { NavLink } from "react-router-dom"
import classes from '../assets/5-components/DashboardCourse.module.scss'
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import ReactCardFlip from 'react-card-flip';
import 'keen-slider/keen-slider.min.css'
import classNames from "classnames"
import { motion } from "framer-motion"

const DashboardCourse = (props) => {
    const modelId = decodeURI(window.location.pathname).split('/')[2];
    const link = decodeURI(window.location.pathname);
    const myRef = useRef();
    const [useFlip, setUseFlip] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    useEffect(() => {
        select();
        window.addEventListener('resize', () => { window.innerWidth < 950 ? setUseFlip(true) : setUseFlip(false); })
        window.innerWidth < 950 ? setUseFlip(true) : setUseFlip(false);
    }, []) // to check

    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }
    const select = () => {
        if (props.index === 1) {
            // myRef.current.click();
            if (decodeURI(link).split('/').length === 3) {
                myRef.current.click();
            }
        }
    }
        //     <motion.section
    //         style={{ height: "250px", width: '250px', backgroundColor: "red" }}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //     >
    //     </motion.section>
    const courseWithoutFlip = 
        <motion.div className={classes['course']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: .8}}
        >
    
        <div>
            <p>{props.faculty}</p>
            <p>{props.year}</p>
            <p>{props.model}</p>
            <p>{"Mokhtar Frih"}</p>
        </div>
        <div className={classes['line']}></div>
        <div>
            <p>{props.name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re
                ugue ac enim pulv quis </p>
            <NavLink ref={myRef} to={`/models/${modelId}/${props.pubId}/`} className={classes['nav-link']}>{`Learn more`}</NavLink>
        </div>
    </motion.div>
    const courseWithFlip = <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName={classes["ReactCardFlip"]} >
        <div className={classes['course-flip-front']}>
            <div>
                <p>{props.name}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  augue ac enim pulv quis re
                    ugue ac enim pulv quis </p>
                <NavLink ref={myRef} to={`/models/${modelId}/${props.pubId}/`} className={classes['nav-link']}>{`Learn more`}</NavLink>
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
            <button className={classes["flip-button"]}  onClick={handleClick}>Click to flip</button>
        </div>
    </ReactCardFlip>
    return (useFlip ? courseWithFlip : courseWithoutFlip
        
    );
}

export default DashboardCourse