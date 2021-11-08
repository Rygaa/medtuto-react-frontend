// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import { requestFaculties, requestModels, requestYears } from '../../store/models-actions'
import classes from '../../assets/6-pages/Models.module.scss'

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
    facultiesList.push(<option value="" disabled selected>{`\xa0`}{`\xa0`}Choose your faculty</option>)
    facultiesList.push(faculties.map((faculty) => (
        <option value={faculty.pubId} label={faculty.label}>{faculty.name}</option>
    )));

    const yearsList = []
    yearsList.push(<option value="" disabled selected>{`\xa0`}{`\xa0`}Choose your year</option>)
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
            <div>
                <p>ENJOY YOUR COURSE</p>
                <p>By selecting your</p>
                <form>
                    <label>Department: </label>
                    <select className={classes.faculty} onChange={facultiesSelectOnChange}>{facultiesList}</select>
                </form>
                <form>
                    <label>Year: </label>
                    <select className={classes.year} onChange={yearsSelectOnChange}>{yearsList}</select>
                </form>
            </div>
            <div>
                        {modelsList}
            </div>
        </section>
    );
}

export default Models;