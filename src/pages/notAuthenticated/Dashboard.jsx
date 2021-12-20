import DashboardCourse from "components/DashboardCourse";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { rqLastelyAddedCourses } from "store/proxy";
import classes from '../../assets/6-pages/Dashboard.module.scss'
import '../../assets/6-pages/Dashboard.css'
import { motion } from "framer-motion"
// import { Swiper, SwiperSlide } from "swiper/react/swiper";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.css"

// // import "./styles.css";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'

import SwiperCore, { Scrollbar, Pagination, FreeMode, Autoplay  } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Scrollbar, FreeMode, Autoplay]);

const containerVariants = {
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
        }
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .75,
        }
    },
}

const x = {
    hidden: {
        scaleX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: .25,
        }
    },
}


const Dashboard = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const myRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth / 700)

    useEffect(() => {
        dispatch(rqLastelyAddedCourses({ idToken }))
    }, [dispatch, idToken])

    const coursesList = courses.map((course) => (
        <SwiperSlide>
            <DashboardCourse
                key={1}
                name={course.name}
                pubId={course.pubId}
                index={course.index}
                faculty={course.faculty}
                year={course.year}
                model={course.model}
            ></DashboardCourse>
        </SwiperSlide>
    ));

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 950) {
                setWindowWidth(window.innerWidth / 700)
            } else if (window.innerWidth <= 950) {
                setWindowWidth(window.innerWidth / 300)
            } else if ( window.innerWidth > 1400) {
                setWindowWidth(window.innerWidth / 1000)
            }
        })
        if (window.innerWidth > 950) {
            setWindowWidth(window.innerWidth / 700)
        } else if (window.innerWidth <= 950) {
            setWindowWidth(window.innerWidth / 300)
        } else if (window.innerWidth > 1400) {
            setWindowWidth(window.innerWidth / 1000)
        }
    }, [])


    useEffect(() => {
        console.log(windowWidth);
    }, [windowWidth])


    return (
        <section className={classes['page-container']}>
            <div className={classes['left-side']}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{duration: .8}}
                    
                        
                    >Welcome to</motion.p>
                    <motion.p variants={childVariants} >TUTORATDZ</motion.p>
                    <motion.p variants={childVariants}>A website aiming to help students <br />
                        with their medical learning <br />
                        journey
                    </motion.p>

                    <motion.div
                        variants={x}

                    className={classes['nav-link']}><NavLink  to={'/models'}>Start Learning</NavLink></motion.div>

                </motion.div>
            </div>
            <motion.div ref={myRef} className={classes['right-side']}
            
                initial={{ x: 550, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <motion.p
     
                >RECENTLY ADDED COURSES</motion.p>
                <Swiper
                    className={classes['courses-container']}
                    slidesPerView={windowWidth} freeMode={false}
                    scrollbar={{
                        "draggable": true,
                    }}
                    observer= {true}
                    observeParents= {true}
                    // autoplay={{
                    //     "delay": 500,
                    //     "disableOnInteraction": false
                    // }}
           
                >
                    {coursesList}
                </Swiper>
            </motion.div>
        </section>
    );
    // const [isVisible, setIsVisibile] = useState(true);
    // // useEffect(() => {
    // //     setTimeout(() => {
    // //         setIsVisibile(true)
    // //     }, 500);
    // // }, [])
    // return (
    //     <motion.section 
    //         style={{ height: "250px", width: '250px', backgroundColor: "red" }}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //     >
    //     </motion.section>
    // )

}
// {
//     courses.length > 0 &&
//         <div className={classes['courses-container']}>
//             <div ref={sliderRef} className={classes['test'], classNames("keen-slider")}>
//                 {coursesList}
//             </div>
//         </div>
// }


// <section className={classes.dashboard}>
//     <div>
//         <p>Welcome to</p>
//         <p>TUTORATDZ</p>
//         <p>A website aiming to help students <br />
//             with their medical learning <br />
//             journey
//         </p>
//     </div>
//     <NavLink className={classes.navLink} to={'/models'}>Start Learning</NavLink>
//     <aside>
//         <p>RECENTLY ADDED COURSES</p>
//         <div className={classes['courses-container']}>
//             {coursesList}
//         </div>

//     </aside>
// </section>
export default Dashboard;



// return (
//     <section className={classes.dashboard}>
//         <div>
//             <p>Welcome to</p>
//             <p>TUTORATDZ</p>
//             <p>A website aiming to help students <br />
//                 with their medical learning <br />
//                 journey
//             </p>
//         </div>
//         <NavLink className={classes.navLink} to={'/models'}>Start Learning</NavLink>
//         <aside>
//             <p>RECENTLY ADDED COURSES</p>
//             <div className={classes['courses-container']}>
//                 <Swiper
//                     className="mySwiper"
//                 >
//                     <SwiperSlide><div className={classes['element']}><p>Hello</p></div></SwiperSlide>
//                     <SwiperSlide><div className={classes['element']}><p>Hello</p></div></SwiperSlide>
//                     <SwiperSlide><div className={classes['element']}><p>Hello</p></div></SwiperSlide>
//                     <SwiperSlide><div className={classes['element']}><p>Hello</p></div></SwiperSlide>
//                     <SwiperSlide><div className={classes['element']}><p>Hello</p></div></SwiperSlide>
//                 </Swiper>
//             </div>


//         </aside>
//     </section>



// );