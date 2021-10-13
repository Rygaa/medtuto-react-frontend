// import classes from './Header.module.scss'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";
import Select from 'react-select'
import { createNewYear, requestFaculties, requestYears } from '../../store/models-actions'

const AddYear = (props) => {
    const idToken = useSelector((state) => state.user.idToken);
    const dispatch = useDispatch();
    const faculties = useSelector((state) => state.models.faculties);
    const years = useSelector((state) => state.models.years);

    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [newYear, setNewYear] = useState('');


    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.pubId)
        dispatch(requestYears({ idToken, facultyPubId: e.pubId }))
    }
    const newYearOnChange = (e) => {
        setNewYear(e.target.value);
    }
    const newYearOnClick = (e) => {
        dispatch(createNewYear({ idToken, yearName: newYear, facultyPubId: selectedFaculty }));
    }

    useEffect(() => {
        dispatch(requestFaculties({ idToken }))
    }, [])

    const facultiesList = faculties.map((faculty) => (
        { key: Math.random(), value: faculty.name, label: faculty.name, pubId: faculty.pubId }
    ));
    const yearsList = years.map((year) => (
        <p key={Math.random()}>{year.name} {year.pubId}</p>
    ));

    return (
        <div style={{ backgroundColor: "gray", gridColumn: "3 / 4 ", border: "5px solid green" }}>
            <Select options={facultiesList} placeholder='Choose your faculty' onChange={facultiesSelectOnChange}></Select>
            <div style={{height: "200px", overflowY: "scroll" }}>
                {yearsList}
            </div>
            <input value={newYear} onChange={newYearOnChange} />
            <button onClick={newYearOnClick}>ADD</button>
        </div>


    );
}

export default AddYear;