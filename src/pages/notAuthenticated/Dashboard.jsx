import DashboardCourse from "components/DashboardCourse";
import Container from "layout/Container"
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rqLastelyAddedCourses } from "store/proxy";
import classes from '../../assets/6-pages/Dashboard.module.scss'
import React from 'react'
import { motion } from "framer-motion";
import DashboardCourseFlip from "components/DashboardCourseFlip";
import NavLinkMotion from "components/NavLinkMotion";
import { isMobile } from 'react-device-detect';
import animations from "assets/1-helpers/animation";


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
                    variants={animations.dashboard.animationLeftSideContainer}
                    initial="hidden"
                    animate="visible"
                    exit='exit'
                >
                    <motion.p variants={animations.dashboard.childVariants}>Welcome to</motion.p>
                    <motion.p variants={animations.dashboard.childVariants}>TUTORATDZ</motion.p>
                    <motion.p variants={animations.dashboard.childVariants}>A website aiming to help students <br /> with their medical learning <br /> journey </motion.p>
                    <NavLinkMotion variants={animations.dashboard.childVariants} path={'/models'} className={classes['nav-link']}>Start Learning</NavLinkMotion>
                </motion.div>
            </div>
            <motion.div ref={myRef} className={classes['right-side']} variants={animations.dashboard.animationRightSide} initial="hidden" animate="visible" exit="exit" >
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
