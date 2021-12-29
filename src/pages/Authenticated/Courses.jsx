// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../../components/Course"
import classes from "../../assets/6-pages/Courses.module.scss"
import Container from "layout/Container";
import { requestCourses } from "../../store/proxy"

import { useRef } from "react";


import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import SwiperCore, { Scrollbar, Pagination, FreeMode, Autoplay } from "swiper";
SwiperCore.use([Pagination, Scrollbar, FreeMode, Autoplay]);

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const [verticalScroll, setVerticalScroll] = useState(true)
    const myRef = useRef();

    useEffect(() => {
        dispatch(requestCourses({ idToken }))
        window.addEventListener('resize', () => { window.innerWidth <= 700 & !isMobile ? setVerticalScroll(false) : setVerticalScroll(true); })
        window.innerWidth <= 700 & !isMobile ? setVerticalScroll(false) : setVerticalScroll(true);
    }, [dispatch, idToken])



    const coursesList = courses.map((course) => {
        const obj = {
            key: Math.random(),
            name: course.name,
            pubId: course.pubId,
            index: course.index,
        }
        if ((verticalScroll || isMobile)) { return<Course {...obj} />}
        else if ((!verticalScroll & !isMobile)) { return <Course {...obj} />}
        
    });


    return (
        <section className={classes['courses-section']}>
            <p>Select one of this courses</p>
            {verticalScroll && 
                <div className={classes['courses-container']} ref={myRef}>{coursesList}</div>
            }
            {!verticalScroll && 
                <Container 
                    slidesPerView={'auto'}
                    freeMode={false}
                    observer={true}
                    observeParents={true}
                    simulateTouch={false}
                    navigation={true}
                    spaceBetween={30}
                    containerClassName={(isMobile ? classes['courses-container'] : classes['courses-container-swiper'])}>
                    {coursesList}
                </Container>
            } 
        </section>
    );
}

export default Courses;