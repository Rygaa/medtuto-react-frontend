import { useDispatch, useSelector } from "react-redux";
import classes from "assets/6-pages/MyAccount.module.scss"
import { updateMyAccountProfile } from '../../store/User/user-actions'
import Input from "components/Input"
import { useRef } from "react";
import { url } from "_globalVar/_ip"

const MyAccount = (props) => {
    // <Input txt={'02/02/2000'} />
    // <Input txt={'Mohamed Aissa'} />
    const username = useSelector((state) => state.user.username)
    const idToken = useSelector((state) => state.user.idToken)
    const email = useSelector((state) => state.user.email)
    const isTeacher = useSelector((state) => state.user.isTeacher)
    const pubId = useSelector((state) => state.user.pubId)
    const imgInputRef = useRef();
    const image = `${url}/account/${pubId}`;
    const dispatch = useDispatch();
    const imageOnChange = (e) => {
        dispatch(updateMyAccountProfile({ idToken, newProfilePicture: imgInputRef.current.files[0]}))
    }

    return (
        <section className={classes['my-account']}>
            <label for="upload">
                <img src={image} alt={'upload'}/>
                <input type="file" id="upload" ref={imgInputRef} onChange={imageOnChange} />
            </label>
            <div className={classes['public-container']}>
                <p>Public</p>
                <Input txt={username} />
                <Input txt={isTeacher === "true" ? "Teacher" : "Student"} />
            </div>
            <div className={classes['private-container']}>
                <p>Private</p>
                <Input txt={email} />
            </div>
            <button className={classes['update-button']}>Update</button>
        </section>
    );
}

export default MyAccount;