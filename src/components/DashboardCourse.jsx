import { NavLink } from "react-router-dom"
import classes from '../assets/5-components/DashboardCourse.module.scss'
import { useRef } from "react"
import { motion } from "framer-motion"

const DashboardCourse = (props) => {
    const modelId = decodeURI(window.location.pathname).split('/')[2];
    const link = decodeURI(window.location.pathname);
    const myRef = useRef();

    const select = () => {
        if (props.index === 1) {
            // myRef.current.click();
            if (decodeURI(link).split('/').length === 3) {
                myRef.current.click();
            }
        }
    }
 
    return (
        <motion.div className={classes['course']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
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
                <NavLink ref={myRef} to={`/models/${modelId}/${props.pubId}/`} onClick={select} className={classes['nav-link']}>{`Learn more`}</NavLink>
            </div>
        </motion.div>
    );
}

export default DashboardCourse