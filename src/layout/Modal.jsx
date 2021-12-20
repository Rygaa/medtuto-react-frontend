
import classes from 'assets/4-layout/Modal.module.scss'
import { useState } from 'react'



const Modal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <div>
            <div className={classes['Overlay']} onClick={setModalIsOpen.bind(!modalIsOpen)}></div>
            <div className={classes['Modal']}>{props.children}</div>
        </div>
    )
}


export default Modal

