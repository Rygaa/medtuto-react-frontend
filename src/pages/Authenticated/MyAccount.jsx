import { useDispatch, useSelector } from "react-redux";
import classes from "assets/6-pages/MyAccount.module.scss"
import { updateMyAccountProfile, updateMyAccount } from '../../store/User/user-actions'
import Input from "components/Input"
import { useRef } from "react";
import { url } from "_globalVar/_ip"
import { useState } from "react";
import { useEffect } from "react";

const MyAccount = (props) => {
    const username = useSelector((state) => state.user.username)
    const idToken = useSelector((state) => state.user.idToken)
    const email = useSelector((state) => state.user.email)
    const isTeacher = useSelector((state) => state.user.isTeacher)
    const pubId = useSelector((state) => state.user.pubId)
    const imgInputRef = useRef();
    const image = `${url}/account/${pubId}`;
    const dispatch = useDispatch();

    const [newUsername, setNewUsername] = useState(username);
    const [newEmail, setNewEmail] = useState(email);
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState('')
    useEffect(() => {
        setNewEmail(email);
        setNewUsername(username)
    }, [username, email])

    const newUsernameOnChange = (e) => {
        setNewUsername(e.target.value)
    }
    const newEmailOnChange = (e) => {
        setNewEmail(e.target.value)
    }
    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }
    const updateOnClick = (e) => {
        dispatch(updateMyAccount({
            idToken,
            currentPassword: password,
            newUsername,
            newEmail,
            newProfilePicture: imgInputRef.current.files.length > 0 ? imgInputRef.current.files[0] : null,
        }))
    }

    return (
        <section className={classes['my-account']}>
            <label for="upload">
                <img src={image} alt={'upload'}/>
                <input type="file" id="upload" ref={imgInputRef} />
            </label>
            <div className={classes['public-container']}>
                <p>Public</p>
                <Input txt={newUsername} onChange={newUsernameOnChange} />
                <Input txt={isTeacher === "true" ? "Teacher" : "Student"} />
            </div>
            <div className={classes['private-container']}>
                <p>Private</p>
                <Input txt={newEmail} onChange={newEmailOnChange} />
            </div>
            <button className={classes['update-button']} onClick={setIsVisible.bind(this, true)}>Update</button>
            <div className={classes['modal-password-auth']} style={(isVisible ? {display: 'flex'} : {display: 'none'})}>
                <Input txt={password} onChange={passwordOnChange}/>
                <button onClick={updateOnClick}>Confirm</button>
            </div>
        </section>
    );
}

export default MyAccount;