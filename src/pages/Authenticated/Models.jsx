// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Model from "../../components/Model"
import { requestModels } from '../../store/Joho/models-actions'
import { requestFaculties } from '../../store/proxy'
import classes from '../../assets/6-pages/Models.module.scss'
import { useRef } from "react";
import { requestYears } from "../../store/proxy"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Container from "layout/Container";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import SwiperCore, { Scrollbar, Pagination, FreeMode, Autoplay } from "swiper";
SwiperCore.use([Pagination, Scrollbar, FreeMode, Autoplay]);

const animationTopSideContainer = {
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
        }
    },
    exit: {
        y: '100vh',
        transition: {
            duration: .35,
        }
    }
}

const animationTopSideChild = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            duration: .35,
        }
    }
}


const animationBottomSide = {
    hidden: {
        y: '100vh'
    },
    visible: {
        y: 0,
        transition: {
            delay: 1.5,
            duration: 1,
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

const Models = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const faculties = useSelector((state) => state.models.faculties);
    const years = useSelector((state) => state.models.years);
    const models = useSelector((state) => state.models.models);
    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const facultiesRef = useRef();
    const yearsRef = useRef();
    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.value)
        dispatch(requestYears({ idToken, facultyPubId: e.target.value }))
    }
    const yearsSelectOnChange = (e) => {
        setSelectedYear(e.target.value)
        dispatch(requestModels({ idToken, yearPubId: e.target.value }))
    }
    
    useEffect(() => {
        dispatch(requestFaculties({ idToken }))
    }, [dispatch, idToken])

    useEffect(() => {
        dispatch(requestYears({ idToken, facultyPubId: facultiesRef.current.value }))
    }, [dispatch, idToken, faculties])

    useEffect(() => {
        dispatch(requestModels({ idToken, yearPubId: yearsRef.current.value }))
    }, [dispatch, idToken, years])

    const facultiesList = []
    facultiesList.push(faculties.map((faculty) => (
        <option value={faculty.pubId} label={faculty.label}>{faculty.name}</option>
    )));

    const yearsList = []
    yearsList.push(years.map((year) => (
        <option value={year.pubId} label={year.label}>{year.name}</option>
    )));


    const modelsList = models.map((model) => {
        return (
            <Model 
                key={Math.random()} 
                name={model.name} 
                description={model.description} 
                pubId={model.pubId} 
                facultyName={selectedFaculty} 
                yearName={selectedYear}
            ></Model>
    )})
    const x = []
    x.push(
        <option value="" disabled selected> Select your option</option>
    )

    return (
        <section className={classes['models']}>
            <motion.div 
            className={classes["top-side"]} 
            variants={animationTopSideContainer} 
            initial="hidden" 
            animate="visible"
            exit="exit">
                <motion.p variants={animationTopSideChild}>ENJOY YOUR COURSE</motion.p>
                <motion.p variants={animationTopSideChild}>By selecting your</motion.p>
                <motion.form variants={animationTopSideChild}>
                    <label>Department: </label>
                    <select ref={facultiesRef} className={classes.faculty}  onChange={facultiesSelectOnChange}>{facultiesList}</select>
                </motion.form>
                <motion.form variants={animationTopSideChild}>
                    <label>Year: </label>
                    <select ref={yearsRef} className={classes.year} onChange={yearsSelectOnChange}>{yearsList}</select>
                </motion.form>
            </motion.div>
       
            <div className={classes['bottom-side']}>
                <Container motion={true} variants={animationBottomSide} initial="hidden" animate="visible" exit="exit" spaceBetween={0} containerClassName={(isMobile ? classes['courses-container-mobile'] : classes['courses-container'])}>
                    {modelsList}
                </Container>
            </div>
      

        </section>
    );
}

export default Models;