import Link from 'next/link'
import { useRef } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from "swiper/react"
import Icons from '../icons'
import MyImage from '../image/image'

SwiperCore.use([Autoplay, Pagination, Navigation])

function Carousel({ slides, slidesPerView, spaceBetween, autoplay, onSlideChange, link }) {
  const ref = useRef()
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Swiper
      ref={ref}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.params.navigation.disabledClass = 'opacity-6';
        swiper.navigation.update();
      }}
      // navigation
      slidesPerView={slidesPerView || 1}
      spaceBetween={spaceBetween || 30}
      pagination={{
        "clickable": true,
        "dynamicBullets": true
      }}
      autoplay={{
        "delay": 6000,
        "disableOnInteraction": false
      }}
      onSlideChange={(swiper) => console.log(swiper)}
      className="position-relative">
      {
        slides && slides.map((slide, index) =>
          <SwiperSlide key={'SliderDynamic' + index}>
            {link && slide.slugUrlFv && (
              <Link href={slide.slugUrlFv} passHref>
                <MyImage src={slide.imageUrlFv} alt={`Slider` + index + 1} layout="fill" objectFit="cover" />
              </Link>)
            }
            {
              !link && (
                <MyImage src={slide.imageUrlFv} alt={`Slider` + index + 1} layout="fill" objectFit="cover" />
              )
            }


          </SwiperSlide>
        )
      }
      {
          slides.length > 0 && (
            <>
              <div ref={prevRef} className="custom-slider-prev rounded-circle bg-white text-orange-300 ">
                <Icons.FaAngleLeft />
              </div>
              <div ref={nextRef} className="custom-slider-next rounded-circle bg-white text-orange-300">
                <Icons.FaAngleRight />
              </div>
            </>
          )
        }
    </Swiper>
  )
}
export default Carousel
