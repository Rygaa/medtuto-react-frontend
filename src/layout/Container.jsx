

import classes from 'assets/4-layout/Container.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'assets/1-helpers/swiper-scrollbars.css'
import SwiperCore, { Scrollbar, Pagination, FreeMode, Autoplay, Navigation } from "swiper";

import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect'


SwiperCore.use([Pagination, Scrollbar, FreeMode, Autoplay, Navigation]);




const Container = (props) => {
    const obj = {
        className: props.containerClassName,
        slidesPerView:'auto',
        simulateTouch: false,
        navigation:true,
        spaceBetween:30,
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
                >{children}</Swiper>
            )

        } else if (!useSwiper) {
            return (
                <div className={props.containerClassName}
                >{props.children}</div>
            )
        }
        return (null);
        
    }
    let container = handleContainer();


    return container;
}


export default Container;