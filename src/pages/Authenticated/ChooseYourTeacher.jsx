import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../assets/6-pages/ChooseYourTeacher.module.scss"
import { requestTeachers } from '../../store/Joho/models-actions'
import Teacher from "../../components/Teacher";
import { NavLink, useLocation } from "react-router-dom"

const ChooseYourTeacher = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const teachers = useSelector((state) => state.models.teachers);
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const location = useLocation();
    useEffect(() => {
        dispatch(requestTeachers({ idToken }))
    }, [dispatch, idToken])

    const selectedTeacherOnChange = (teacher) => {
        setSelectedTeacher(teacher)
    }

    useEffect(() => {
        dispatch(requestTeachers({ idToken }))

    }, [dispatch, idToken])

    useEffect(() => {
        dispatch(requestTeachers({ idToken }))
    }, [location, dispatch, idToken])

    const path = location.pathname;
    const teachersList = teachers.map((teacher) => (
        <Teacher name={teacher.name} pubId={teacher.pubId} reviews={teacher.reviews} numberOfVideos={teacher.numberOfVideos} selectedTeacherOnChange={selectedTeacherOnChange} selected={true} />
    ));

    teachersList.push(teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    )));
    teachersList.push(teachers.map((teacher) => (
        <Teacher name={teacher.name} selectedTeacherOnChange={selectedTeacherOnChange} />
    )));

    let reviews = null;
    if (selectedTeacher.reviews) {
        if (selectedTeacher.reviews.length > 0) {
            reviews = selectedTeacher.reviews.map((review) => (
                <p>{review}</p>
            ))
        } else {
            reviews = <p style={{ marginTop: "1rem" }}>No review. you can add a review in the learning page</p>

        }
    } else { 
        reviews = <p style={{marginTop:"1rem"}}>No review. you can add a review in the learning page</p>

    }

    return (
        <section className={classes['teachers-section']}>
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
                <div>
                    {reviews}
                </div>
            </div>
            <NavLink className={classes['nav-link']} to={`${path}${selectedTeacher.pubId}`}>Choose</NavLink>
            
        </section>
    );
}

export default ChooseYourTeacher;