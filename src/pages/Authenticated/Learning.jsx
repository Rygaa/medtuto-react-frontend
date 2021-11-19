// import classes from './Header.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Select from 'react-select'
import Model from "../../components/Model"
import Course from "../../components/Course"
import classes from "../../assets/6-pages/Learning.module.scss"
import { addReview, requestLearning } from '../../store/Joho/models-actions'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classnames from 'classnames';

const Learning = (props) => {
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.user.idToken);
    const videos = useSelector((state) => state.models.videos);
    const links = useSelector((state) => state.models.links);
    const files = useSelector((state) => state.models.files);
    const [videoDisplayedNumber, setVideoDisplayedNumber] = useState(0)
    const [switched, setSwitched] = useState(false)
    const [review, setReview] = useState('')

    useEffect(() => {
        dispatch(requestLearning({ idToken }))
    }, [])

    const previous = (e) => {
        if (videoDisplayedNumber != 0) {
            setVideoDisplayedNumber(videoDisplayedNumber - 1);

        }
    }

    const next = (e) => {
        if (videoDisplayedNumber != videos.length - 1) {
            setVideoDisplayedNumber(videoDisplayedNumber + 1);
        }
    }


    let videoDisplayed = (<iframe src={`https://www.youtube.com/embed/${videos[videoDisplayedNumber]}`}></iframe>)
    useEffect(() => {
        videoDisplayed = (<iframe 
        src={`https://www.youtube.com/embed/${videos[videoDisplayedNumber]}`}
            frameborder="2" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"

        
        ></iframe>)
    }, [videoDisplayedNumber])
    const linksList = links.map((link) => (
        <p>{link}</p>
    ));
    const filesList = files.map((file) => (
        <p>{file}</p>
    ));

    const switchOnClick = (e) => {
        setSwitched(!switched)
    }

    const addReviewOnClick = () => {
        dispatch(addReview({idToken, review}))
    }

    const reviewOnChange = (e) => {
        setReview(e.target.value)
    }

    return (
        <section className={classes['learning']}>
            <p>Introduction a la molecule</p>
            <div className={classnames(classes['videos-container'], (switched ? classes['switch-effect-on'] : classes['switch-effect-off']))}>
                
            {videoDisplayed}
                <div>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
                

            </div>
            <Tabs className={classnames(classes['tabs'], (!switched ? classes['switch-effect-on'] : classes['switch-effect-off']))}>
                <TabList className={classes['tabList']}>
                    <Tab className={classes['tab-links']}>Links</Tab>
                    <Tab className={classes['tab-files']}>Files</Tab>
                    <Tab className={classes['tab-files']}>Add review</Tab>
                </TabList>

                <TabPanel className={classes['tabPanel']}>
                    {linksList}
                </TabPanel>
                <TabPanel className={classes['tabPanel']}>
                    {filesList}
                </TabPanel>
                <TabPanel className={classes['tabPanel']}>
                    <textarea value={review} onChange={reviewOnChange}></textarea>
                    <button onClick={addReviewOnClick}>Add review</button>
                </TabPanel>
            </Tabs>
            <button className={classes['switch-button']} onClick={switchOnClick}>switch</button>
    
        </section>
    );
}

export default Learning;