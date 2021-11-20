// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Model from "../../components/Model"
import { requestModels } from '../../store/Joho/models-actions'
import { requestFaculties } from '../../store/proxy'
import classes from '../../assets/6-pages/Models.module.scss'
import { useRef } from "react";
import { requestYears } from "../../store/proxy"


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
    const modelsRef = useRef();
    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.value)
        console.log(e.target.value);
        dispatch(requestYears({ idToken, facultyPubId: e.target.value }))
    }
    const yearsSelectOnChange = (e) => {
        console.log('request models');
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
        return (<Model key={Math.random()} name={model.name} description={model.description} pubId={model.pubId} facultyName={selectedFaculty} yearName={selectedYear}></Model>)
    })
    const x = []
    x.push(
        <option value="" disabled selected> Select your option</option>
    )

    return (
        <section className={classes['models']}>
            <div>
                <p>ENJOY YOUR COURSE</p>
                <p>By selecting your</p>
                <form>
                    <label>Department: </label>
                    <select ref={facultiesRef} className={classes.faculty}  onChange={facultiesSelectOnChange}>{facultiesList}</select>
                </form>
                <form>
                    <label>Year: </label>
                    <select ref={yearsRef} className={classes.year} onChange={yearsSelectOnChange}>{yearsList}</select>
                </form>
            </div>
            <div ref={modelsRef}>
                        {modelsList}
            </div>
        </section>
    );
}

export default Models;