// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import NavLinkButton from "../../components/NavLinkButton";
import ppIMG from "../../img/pp.png"
import classes from "../../assets/6-pages/ToNameSection.module.scss"
import { requestTeachers } from '../../store/Joho/models-actions'
import Teacher from "../../components/Teacher";
import { NavLink, useParams, useLocation } from "react-router-dom"

const ToNameSection = (props) => {
    return (
        <section className={classes['section']}>
            {props.children}

        </section>
    );
}

export default ToNameSection;