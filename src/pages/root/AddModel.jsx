// import classes from './Header.module.scss'

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";
import Select from 'react-select'
import { createNewYear, removeModel, requestFaculties, createNewModel, requestModels, requestYears } from '../../store/models-actions'

const AddModel = (props) => {
    const idToken = useSelector((state) => state.user.idToken);
    const dispatch = useDispatch();
    const faculties = useSelector((state) => state.models.faculties);
    const years = useSelector((state) => state.models.years);
    const models = useSelector((state) => state.models.models);

    const [newModel, setNewModel] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    const imgInputRef = useRef();
    const img2InputRef = useRef();



    const facultiesSelectOnChange = (e) => {
        setSelectedFaculty(e.pubId)
        dispatch(requestYears({ idToken, facultyPubId: e.pubId }))
    }

    const yearsSelectOnChange = (e) => {
        setSelectedYear(e.pubId)
        dispatch(requestModels({ idToken, yearPubId: e.pubId }))
    }


    const newModelOnChange = (e) => {
        setNewModel(e.target.value);
    }
    const newModelOnClick = (e) => {
        dispatch(createNewModel({ 
            idToken, 
            yearPubId: selectedYear, 
            description: "x", 
            modelName: newModel,
            picture1: imgInputRef.current.files[0],
            picture2: img2InputRef.current.files[0]
        }));
    }

    useEffect(() => {
        dispatch(requestFaculties({ idToken }))
    }, [])

    const facultiesList = faculties.map((faculty) => (
        { key: Math.random(), value: faculty.name, label: faculty.name, pubId: faculty.pubId }
    ));
    const yearsList = years.map((year) => (
        { key: Math.random(), value: year.name, label: year.name, pubId: year.pubId }
    ));


    const removeOnClick = (e) => {
        console.log(e.target.attributes[0].nodeValue)
        const modelPubId = e.target.attributes[0].nodeValue
        dispatch(removeModel({ idToken, modelPubId, yearPubId: selectedYear }))
    }
    const modelsList = models.map((model) => (
        <div style={{ display: "flex" }}>
            <p key={Math.random()}>{model.name} {model.pubId}</p>
            <button onClick={removeOnClick} data-pubid={model.pubId}>Remove</button>
        </div>
    ));



    return (
        <div style={{ backgroundColor: "gray", gridColumn: "1 / 2", gridRow: "2 / 3", border: "5px solid gray"  }}>
            <Select options={facultiesList} placeholder='Choose your faculty' onChange={facultiesSelectOnChange}></Select>
            <Select options={yearsList} placeholder='Choose your year' onChange={yearsSelectOnChange}></Select>
            <div style={{ height: "200px", overflowY: "scroll" }}>
            {modelsList}
            </div>
            <input type="file" type="file" ref={imgInputRef}></input>
            <input type="file" type="file" ref={img2InputRef}></input>

            <input value={newModel} onChange={newModelOnChange} />
            <button onClick={newModelOnClick}>ADD</button>
        </div>


    );
}

export default AddModel;