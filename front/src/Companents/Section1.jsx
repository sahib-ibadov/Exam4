import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import "./Section1.scss"

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


function Section1() {
  return (
    <div>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 500,
            disableOnInteraction: false
        }}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='section1_swipper'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
        <div className='section1_swipper_in'>
        <h1><span>GET YOUR </span> <span style={{color:"yellow"}}>EDUCATION</span> <span>TODAY</span></h1>
        </div>
        </SwiperSlide>
        <SwiperSlide className='section1_swipper'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
        <div className='section1_swipper_in'>
        <h1><span>GET YOUR </span> <span style={{color:"yellow"}}>EDUCATION</span> <span>TODAY</span></h1>
        </div>
        </SwiperSlide>
        <SwiperSlide className='section1_swipper'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
        <div className='section1_swipper_in'>
        <h1><span>GET YOUR </span> <span style={{color:"yellow"}}>EDUCATION</span> <span>TODAY</span></h1>
        </div>
        </SwiperSlide>
        <SwiperSlide className='section1_swipper'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
        <div className='section1_swipper_in'>
        <h1><span>GET YOUR </span> <span style={{color:"yellow"}}>EDUCATION</span> <span>TODAY</span></h1>
        </div>
        </SwiperSlide>
        <SwiperSlide className='section1_swipper'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
        <div className='section1_swipper_in'>
        <h1><span>GET YOUR </span> <span style={{color:"yellow"}}>EDUCATION</span> <span>TODAY</span></h1>
        </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Section1
