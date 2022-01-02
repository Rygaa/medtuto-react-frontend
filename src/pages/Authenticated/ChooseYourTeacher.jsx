import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../assets/6-pages/ChooseYourTeacher.module.scss"
import { requestTeachers } from '../../store/Joho/models-actions'
import Teacher from "../../components/Teacher";
import { NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";
const animation = {
    hidden: {
        // opacity: 0,
        y: '-100vh'
    },
    visible: {
        // opacity: 1,
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

const reviewsAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .75,
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




const ChooseYourTeacher = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const teachers = useSelector((state) => state.models.teachers);
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const location = useLocation();
    const [lessThan700px, setLessThan700px] = useState(window.innerWidth <= 700 ? true : false);

    // useEffect(() => {
    //     window.addEventListener('resize', () => { window.innerWidth <= 700 ? setLessThan700px(true) : setLessThan700px(false); })
    //     window.innerWidth <= 700 ? setLessThan700px(true) : setLessThan700px(false);
    // }, [])

    useEffect(() => {
        console.log('lessThan700px:', lessThan700px);
    }, [lessThan700px])

    useEffect(() => {
        dispatch(requestTeachers({ idToken }))
    }, [dispatch, idToken])

    const selectedTeacherOnChange = (teacher) => {
        setSelectedTeacher(teacher)
    }

    useEffect(() => {
        setSelectedTeacher(teachers.length > 0 ? teachers[0] : '')
    }, [teachers])
    useEffect(() => {
        dispatch(requestTeachers({ idToken }))

    }, [dispatch, idToken])

    useEffect(() => {
        dispatch(requestTeachers({ idToken }))
    }, [location, dispatch, idToken])

    const path = location.pathname;
    const teachersList = teachers.map((teacher, index) => (
        <Teacher index={0} name={teacher.name} selected={(teacher.pubId == selectedTeacher.pubId ? true : false)} pubId={teacher.pubId} reviews={teacher.reviews} numberOfVideos={teacher.numberOfVideos} selectedTeacherOnChange={selectedTeacherOnChange}/>
    ));

    teachersList.push(<Teacher />);
    teachersList.push(<Teacher />);


    let reviews = null;
    if (selectedTeacher.reviews == null || (selectedTeacher.reviews != null && selectedTeacher.reviews.length <= 0)) {
        reviews = <motion.div variants={reviewsAnimation}
            initial='hidden'
            animate='visible'><p key={Math.random()}
            >No review. you can add a review in the learning page</p></motion.div>
    } else {
        reviews = selectedTeacher.reviews.map((review) => (
            <motion.div key={Math.random()}
                variants={reviewsAnimation}
                initial='hidden'
                animate='visible'
                exit="exit" ><p 
         
            >{review}</p></motion.div>
        ))
    }

    return (
        <motion.section className={classes['teachers-section']}
            variants={(lessThan700px ? animationMobile : animation)}
            initial='hidden'
            animate='visible'
            exit='exit'>
            <div className={classes['teachers-container']}>
                <div className={classes['choices-container']}>
                    <p>Make your choices</p>
                    <p>We deliver multiple choice of teachers</p>
                    <div className={classes['profiles-pictures-container']}>{teachersList}</div>
                </div>
                <div className={classes['info-container']}>
                    <p>First name: {`${selectedTeacher.name}`}</p>
                    <p>Number of videos: {`${selectedTeacher.numberOfVideos}`}</p>
                </div>
            </div>
            <div className={classes['reviews-container']}>
                <p>Reviews: </p>
                <div  >
                     {reviews}
                </div>
                
            </div>
            <NavLink className={classes['nav-link']} to={`${path}/${selectedTeacher.pubId}`}>Choose</NavLink>
            
        </motion.section>
    );
}

export default ChooseYourTeacher;