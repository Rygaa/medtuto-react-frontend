// import classes from './NavLinkButton.module.scss'
import classes from '../assets/5-components/Input.module.scss'
import image from "img/email.png"
const Input = (props) => {
    return (
        <div className={classes['Input']}>
            <img src={image} alt={'input'}/>
            <div />
            <input value={props.txt} />
        </div>
    );
}

export default Input