// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"

import { requestLearning } from '../../store/models-actions'

const Learning = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const videos = useSelector((state) => state.models.videos);
    const links = useSelector((state) => state.models.links);
    const files = useSelector((state) => state.models.files);


    useEffect(() => {
        dispatch(requestLearning({ idToken }))
    }, [])

    const videosList = videos.map((video) => (
        <p>{video}</p>
    ));
    const linksList = links.map((link) => (
        <p>{link}</p>
    ));
    const filesList = files.map((file) => (
        <p>{file}</p>
    ));

    return (
        <section>
            <div>{videosList}</div>
            <div>{linksList}</div>
            <div>{filesList}</div>
        </section>
    );
}

export default Learning;