import { useState } from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/na.jpg'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from "swiper/react"
SwiperCore.use([Autoplay, Pagination, Navigation])

function Carousel({ slides, slidesPerView, spaceBetween, autoplay, onSlideChange }) {

  return (
    
    <Swiper
      navigation
      slidesPerView={slidesPerView || 1}
      spaceBetween={spaceBetween || 30}
      pagination={{
        "clickable": true,
        "dynamicBullets": true
      }}
      autoplay={{
        "delay": 10000,
        "disableOnInteraction": false
      }}
      onSlideChange={(swiper) => console.log(swiper)}
      className="position-relative">
      {
        slides.map((slide, index) => 
          // <SwiperSlide key={index}>
          //   <Image src={slide || profilePic} layout="fill" objectFit="cover" alt="slide1" />
          // </SwiperSlide>
          <SwiperSlide key={index}>Slider {slide}</SwiperSlide>
        )
      }
    </Swiper>
  )
}
export default Carousel
