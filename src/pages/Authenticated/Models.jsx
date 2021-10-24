// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import { requestFaculties, requestModels, requestYears } from '../../store/models-actions'
import classes from './Models.module.scss'

const Models = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const faculties = useSelector((state) => state.models.faculties);
    const years = useSelector((state) => state.models.years);
    const models = useSelector((state) => state.models.models);
    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    useEffect(() => {
        dispatch(requestFaculties({ idToken }))
    }, [])

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
    
    const facultiesList = []
    facultiesList.push(<option value="" disabled selected> Select your option</option>)
    facultiesList.push(faculties.map((faculty) => (
        <option value={faculty.pubId} label={faculty.label}>{faculty.name}</option>
    )));

    const yearsList = []
    yearsList.push(<option value="" disabled selected> Select your option</option>)
    yearsList.push(years.map((year) => (
        <option value={year.pubId} label={year.label}>{year.name}</option>
    )));


    const modelsList = models.map((model) => {
        return (<Model key={Math.random()} name={model.name} pubId={model.pubId} facultyName={selectedFaculty} yearName={selectedYear}></Model>)
    })
    const x = []
    x.push(
        <option value="" disabled selected> Select your option</option>
    )

    return (
        <section className={classes['models']}>
            <p>Choose your learning</p>
            <div>
                <form>  
                    <select className={classes.faculty} onChange={facultiesSelectOnChange}>{facultiesList}</select>
                    <select className={classes.year} onChange={yearsSelectOnChange}>{yearsList}</select>
                    <button>Start learning</button>
                </form>
                <div>{modelsList}</div>
            </div>
        </section>
    );
}

export default Models;