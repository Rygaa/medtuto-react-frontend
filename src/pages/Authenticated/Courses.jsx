// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../../components/Course"
import classes from "../../assets/6-pages/Courses.module.scss"
import Container from "layout/Container";
import { requestCourses } from "../../store/proxy"
import { useRef } from "react";
import { motion } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const animation = {
    hidden: {
        y: '100vh'
    }, 
    visible: {
        y: 0,
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            duration: .35,
        }
    }
}

const animationMobile = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 1,
        }
    },
    exit: {
        x: '100vw',
        transition: {
            duration: .35,
        }
    }
}

const Courses = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const courses = useSelector((state) => state.models.courses);
    const [verticalScroll, setVerticalScroll] = useState(true)
    const [lessThan700px, setLessThan700px] = useState(window.innerWidth <= 700 ? true : false);
    const myRef = useRef();

    useEffect(() => {
        dispatch(requestCourses({ idToken }))
        window.addEventListener('resize', () => { window.innerWidth <= 700 & !isMobile ? setVerticalScroll(false) : setVerticalScroll(true); })
        window.innerWidth <= 700 & !isMobile ? setVerticalScroll(false) : setVerticalScroll(true);
        // window.addEventListener('resize', () => { window.innerWidth <= 700 ? setLessThan700px(true) : setLessThan700px(false); })
        // window.innerWidth <= 700 ? setLessThan700px(true) : setLessThan700px(false);
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
        <div style={{overflow: 'hidden'}}>
            <motion.p
                initial={{ y: "200%", }}
                animate={{ y: "0", }}
                transition={{ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }}
                exit={{ y: '100vh'}}
                >Select one of this courses</motion.p></div>
            {verticalScroll && 
                <motion.div variants={(lessThan700px ? animationMobile : animation)}
                    initial='hidden'
                    animate='visible' 
                    exit='exit'
                    className={classes['courses-container']} ref={myRef}>{coursesList}</motion.div>
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
                    motion = {true}
                    variants={(lessThan700px ? animationMobile : animation)}
                    initial = 'hidden'
                    animate = 'visible'
                    exit = 'exit'
                    containerClassName={(isMobile ? classes['courses-container'] : classes['courses-container-swiper'])}>
                    {coursesList}
                </Container>
            } 
        </section>
    );
}

export default Courses;