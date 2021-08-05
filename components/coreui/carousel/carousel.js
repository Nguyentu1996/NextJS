import Link from 'next/link'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from "swiper/react"
import MyImage from '../image/image'
SwiperCore.use([Autoplay, Pagination, Navigation])

function Carousel({ slides, slidesPerView, spaceBetween, autoplay, onSlideChange, link }) {

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
    </Swiper>
  )
}
export default Carousel
