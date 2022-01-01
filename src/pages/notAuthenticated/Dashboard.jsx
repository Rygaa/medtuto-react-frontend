import DashboardCourse from "components/DashboardCourse";
import Container from "layout/Container"
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rqLastelyAddedCourses } from "store/proxy";
import classes from '../../assets/6-pages/Dashboard.module.scss'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import DashboardCourseFlip from "components/DashboardCourseFlip";
import NavLinkMotion from "components/NavLinkMotion";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const animationRightSide = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            ease: 'easeInOut',
            duration: .35,
        }
    }
   
}

const animationLeftSideContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            staggerChildren: .5,
            when: "beforeChildren",
            duration: 1.25,
        },
    },
    exit: {
        y: '100vh',
        transition: {
            ease: 'easeInOut',
            duration: .35,
        }
    }


}

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
        }
    },

}


const Dashboard = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const [useFlip, setUseFlip] = useState(false);
    const myRef = useRef();

    useEffect(() => {
        dispatch(rqLastelyAddedCourses({ idToken }))
    }, [dispatch, idToken])


    useEffect(() => {
        window.addEventListener('resize', () => { window.innerWidth < 950 ? setUseFlip(true) : setUseFlip(false); })
        window.innerWidth < 950 ? setUseFlip(true) : setUseFlip(false);
    }, [])


    const coursesList = courses.map((course) => {
        const propsToPass = {
            key: 1,
            name: course.name,
            pubId: course.pubId,
            index: course.index,
            faculty: course.faculty,
            year: course.year,
            model: course.model,
        }
        return (useFlip ? <DashboardCourseFlip {...propsToPass} /> : <DashboardCourse {...propsToPass} />)

    });


    return (
        <section className={classes['page-container']}>
            <div className={classes['left-side']}>
                <motion.div
                    key={Math.random()}
                    variants={animationLeftSideContainer}
                    initial="hidden"
                    animate="visible"
                    exit='exit'
                >
                    <motion.p variants={childVariants}>Welcome to</motion.p>
                    <motion.p variants={childVariants}>TUTORATDZ</motion.p>
                    <motion.p variants={childVariants}>A website aiming to help students <br /> with their medical learning <br /> journey </motion.p>
                    <NavLinkMotion variants={childVariants} path={'/models'} className={classes['nav-link']}>Start Learning</NavLinkMotion>
                </motion.div>
            </div>
            <motion.div ref={myRef} className={classes['right-side']} variants={animationRightSide} initial="hidden" animate="visible" exit="exit" >
                <p>RECENTLY ADDED COURSES</p>
                <Container
                    spaceBetween={0}
                    motion={true}
                    containerClassName={(isMobile ? classes['courses-container-mobile'] : classes['courses-container'])}>
                    {coursesList}
                </Container>
            </motion.div>
        </section>
    );
}

export default Dashboard;
