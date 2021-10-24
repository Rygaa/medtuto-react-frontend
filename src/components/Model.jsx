// import classes from './NavLinkButton.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from './NavLinkButton'
import classes from './Model.module.scss'
import carta from '../img/carta.png'
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import ReactCardFlip from 'react-card-flip';

const Model = (props) => {
    const myRef = useRef();
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false)
    const [timer, setTimer] = useState(null)
    
    useEffect(() => {
        myRef.current.addEventListener("animationend", () => {
            console.log('end');
        });
        myRef.current.addEventListener("animationstart", () => {
            console.log('start');
        });
        myRef.current.addEventListener('mouseenter', function checkHover() {
            setIsMouseIn(true)
        });
        myRef.current.addEventListener('mouseleave', function checkHover() {
            setIsMouseIn(false)
        });
    }, [])
    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(isFlipped => !isFlipped);
    }
    useEffect(() => {
        if (isFlipped && !isMouseIn) {
            clearTimeout(timer)
            setTimer(setTimeout(() => {
                setIsFlipped(false)
            }, 1000))
        }
  
    }, [isMouseIn])


    return (
        <ReactCardFlip containerClassName={classes["model"]} isFlipped={isFlipped} flipDirection="horizontal">
            <div ref={myRef} onMouseEnter={handleClick} className={isFlipped ? classes['back'] : classes['front']}>
                <img src={carta} />
            </div>

            <div onMouseLeave={handleClick} className={isFlipped ? classes['back'] : classes['front']}>
                <img src={carta}/>
                <NavLink className={classes['navLink']} to={`/models/${props.pubId}`}>
                    {props.name}
                </NavLink>

            </div>
        </ReactCardFlip>
    )

}

export default Model