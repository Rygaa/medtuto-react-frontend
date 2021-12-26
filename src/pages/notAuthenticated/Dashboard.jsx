import DashboardCourse from "components/DashboardCourse";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rqLastelyAddedCourses } from "store/proxy";
import classes from '../../assets/6-pages/Dashboard.module.scss'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'assets/1-helpers/swiper-scrollbars.css'
import SwiperCore, { Scrollbar, Pagination, FreeMode, Autoplay, Navigation  } from "swiper";
import DashboardCourseFlip from "components/DashboardCourseFlip";
import NavLinkMotion from "components/NavLinkMotion";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

SwiperCore.use([Pagination, Scrollbar, FreeMode, Autoplay, Navigation]);



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
        return (
            useFlip ? 
            <SwiperSlide className={classes['swiper-slide-dashboard-course']}
            >
                <DashboardCourseFlip {...propsToPass} />
            </SwiperSlide>
            :
            <SwiperSlide className={classes['swiper-slide-dashboard-course']}
                >
                <DashboardCourse {...propsToPass} />
            </SwiperSlide>
        )

    });


    return (
        <section className={classes['page-container']}>
            <div className={classes['left-side']}>
                <div>
                    <p>Welcome to</p>
                    <p>TUTORATDZ</p>
                    <p>A website aiming to help students <br /> with their medical learning <br /> journey </p>
                    <NavLinkMotion path={'/models'} className={classes['nav-link']}>Start Learning</NavLinkMotion>
                </div>
            </div>
            <div ref={myRef} className={classes['right-side']}>
                <p>RECENTLY ADDED COURSES</p>
                {!isMobile && 
                    <Swiper
                        className={classes['courses-container']}
                        slidesPerView={'auto'}
                        simulateTouch={false}
                        navigation={true}
                        spaceBetween={30}
                    >
                        {coursesList}
                        <div class="swiper-dashboard-courses-scrollbar"></div>
                    </Swiper>
                }
                {isMobile &&
                    <div className={classes['courses-container-mobile']}>
                        {coursesList}
                    </div>
                }
  
            </div>
        </section>
    );
}

export default Dashboard;

// 
