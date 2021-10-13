// import classes from './Header.module.scss'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createNewFaculty, requestFaculties, removeFaculty } from "../../store/models-actions";
import { signUp } from '../../store/user-actions'
import { userActions } from "../../store/user-slice";

const AddFaculty = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const faculties = useSelector((state) => state.models.faculties);

    const [newFaculty, setNewFaculty] = useState();
    const newFacultyOnChange = (e) => {
        setNewFaculty(e.target.value);
    }
    const newFacultyOnClick = (e) => {
        dispatch(createNewFaculty({idToken, facultyName: newFaculty}));
    }

    useEffect(() => {
        dispatch(requestFaculties({ idToken }))
    }, [])


    const removeOnClick = (e) => {
        console.log(e.target.attributes[0].nodeValue)
        const facultyPubId = e.target.attributes[0].nodeValue
        dispatch(removeFaculty({idToken, facultyPubId}))
    }
    const facultiesList = faculties.map((faculty) => (
        <div style={{display:"flex"}}>
            <p key={Math.random()}>{faculty.name} {faculty.pubId}</p>
            <button onClick={removeOnClick} data-pubid={faculty.pubId}>Remove</button>
        </div>
    ));

    return (
        <div style={{ gridColumn: "1 / 2", border: "5px solid red" }}>
            {facultiesList}
            <input value={newFaculty} onChange={newFacultyOnChange} />
            <button onClick={newFacultyOnClick}>ADD</button>
        </div>
    );
}

export default AddFaculty;