// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import { requestFaculties, requestModels, requestYears } from '../../store/models-actions'

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
        dispatch(requestYears({ idToken, facultyPubId: e.pubId }))
    }
    const yearsSelectOnChange = (e) => {
        console.log('request models');
        setSelectedYear(e.value)
        dispatch(requestModels({ idToken, yearPubId: e.pubId }))
    }
    

    const facultiesList = faculties.map((faculty) => (
        { value: faculty.name, label: faculty.name, pubId: faculty.pubId }
    ));
    const yearsList = years.map((year) => (
        { value: year.name, label: year.name, pubId: year.pubId }
    ));
    const modelsList = models.map((model) => {
        return (<Model key={Math.random()} name={model.name} pubId={model.pubId} facultyName={selectedFaculty} yearName={selectedYear}></Model>)
    })
    
    return (
        <section>
            <form>  
                <Select options={facultiesList} placeholder='Choose your faculty' onChange={facultiesSelectOnChange}></Select>
                <Select options={yearsList} placeholder='Choose your year' onChange={yearsSelectOnChange}></Select>
                <button>Start learning</button>
            </form>
            <div>{modelsList}</div>
            
        </section>
    );
}

export default Models;