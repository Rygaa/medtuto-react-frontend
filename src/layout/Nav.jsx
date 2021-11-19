// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import NavLinkButton from '../components/NavLinkButton';
import classes from '../assets/4-layout/Nav.module.scss'

import signupIMG from '../img/sign up.png'
import aboutusIMG from '../img/about us.png'
import loginIMG from '../img/login.png'
import logo from '../img/logo.png'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
const customStyles = {
    content: {
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        // backgroundColor: 'red',
        
    },
};
Modal.setAppElement('#root');


const Nav = (props) => {
    const isConnected = useSelector((state) => state.user.isConnected)
    const [navDisplay, setNavDisplay] = useState(true)
    const [dropdown, setDropdown] = useState(false);
    const buttonRef = useRef();
    const displayButtonRef = useRef();
    const dropdownOnClick = () => {
        setDropdown(!dropdown)
        setIsOpen(!modalIsOpen);

    }

    useEffect(() => {
        console.log(dropdown);
    }, [dropdown])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 750) {
                setNavDisplay(false);
                console.log('small');
            } else {
                setNavDisplay(true);

            }
        })
        if (window.innerWidth < 700) {
            setNavDisplay(false);
        } else {
            setNavDisplay(true);

        }
    }, [])

    // function widthCalc(el) {
    //     return el.current.offsetWidth;
    // }


    // useEffect(() => {
    //     if (widthCalc(buttonRef) > 600) {
    //         setDropdown(true)
    //     }
    //     window.addEventListener('resize', () => {
    //         console.log('false');

    //         if (widthCalc(buttonRef) < 600) {
    //             setDropdown(true);
    //         } else {
    //             setDropdown(false);
    //             console.log('false');
    //         }
    //     })
    // }, [])
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        setDropdown(false);

    }


    // return ();

    return (
        navDisplay ? 
            <nav className = {classes.nav}>
                <RightNav dropdown={false} />
                <LeftNav dropdown={false} />
            </nav> :
            <nav className={!dropdown ? classes['nav-dropdown-closed'] : classes['nav-dropdown-opened']}>
                <button
                    ref={displayButtonRef}
                    className={classes['nav-button']}
                    onClick={dropdownOnClick}
                >Menu</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    className={classes['Modal']}
                    overlayClassName={classes['Overlay']}
                >
                    <button
                        className={classes['close-button']}
                        onClick={dropdownOnClick}
                    >Close</button>
                    <RightNav dropdown={true} open={dropdown} />
                    <LeftNav dropdown={true} open={dropdown} />
                </Modal>

            </nav>

        
        
    );
}

export default Nav;