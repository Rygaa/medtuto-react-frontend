

import classes from 'assets/4-layout/Container.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'assets/1-helpers/swiper-scrollbars.css'
import SwiperCore, { Scrollbar, Pagination, FreeMode, Autoplay, Navigation } from "swiper";

import { useEffect, useState, forwardRef } from 'react';
import { isMobile } from 'react-device-detect'
import { motion } from 'framer-motion'
import 'assets/1-helpers/swiper-scrollbars.css'

SwiperCore.use([Pagination, Scrollbar, FreeMode, Autoplay, Navigation]);




const Container = forwardRef((props, ref) => {
    const obj = {
        // className: props.containerClassName,
        style: {width: '100%'},
        slidesPerView:'auto',
        simulateTouch: false,
        navigation:true,
        
        spaceBetween: props.spaceBetween,
    }


    const [useSwiper, setUseSwiper] = useState(null);

    useEffect(() => {
        const handleSwiper = () => {
            if (!isMobile) {
                setUseSwiper(true);
            } else {
                setUseSwiper(false);
            }
        }
        window.addEventListener('resize', () => { 
            handleSwiper();
        })
        handleSwiper();
    }, [])

    useEffect(() => {
        console.log(useSwiper);
    }, [useSwiper])





    const handleContainer = () => {
        if (useSwiper) {
            const children = props.children.map((child) => (<SwiperSlide style={{ display: 'flex', width: 'auto' }}>{child}</SwiperSlide>))
            return (
                <Swiper
                    {...obj}
                    navigation={true}
                    >{children}
            
                </Swiper>
            )

        } else if (!useSwiper) {
            return (
                <div className={props.containerClassName}
                    style={{ boxSizing: 'border-box' }}
                >{props.children}</div>
            )
        }
        return (null);
        
    }
    let container = handleContainer();


    return props.motion ? 
    <motion.div
        variants={props.variants}
        initial={props.initial}
        animate={props.animate}
        exit={props.exit}
        transition={props.transition}
        ref={ref}
        className={props.containerClassName}
        style={{ display: 'grid' }}>
        {container}
    </motion.div> : <div
        ref={ref} 
        className={props.containerClassName} 
        style={{display:'grid' }}>
        {container}
    </div>;
})


export default Container;