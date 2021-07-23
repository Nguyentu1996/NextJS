import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from 'react'
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'

import ItemList from "../item-list/item-list";
import Icons from "../coreui/icons";


// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Navigation]);

function SlickSlider({ products, pagination, autoplay }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [listProducts, setListProduct] = useState([])
  useEffect(() => {
    setListProduct(pageInSlide())
  }, [products])

  const paginationOption = {
    "clickable": true,
    // "renderBullet": true
    "renderBullet": function (index, className) {

      return '<span class=\"' + className + '\">' + (index + 1) + '</span>';

    }
  }


  function pageInSlide() {
    let page = 1;
    let slider = [];
    let itemInPage = [];
    for (let i = 0; i < products.length; i++) {
      if (i >= page * 12) {
        page += 1;
        slider.push(
          itemInPage
        )
        itemInPage = [];
        continue;
      }

      itemInPage.push(products[i]);
      if (i === products.length - 1) {
        slider.push(
          itemInPage
        )
      }
    }
    return slider
  }

  return (
    <>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        autoplay={
          autoplay && {
            "delay": 6000,
            "disableOnInteraction": false
          }
        }
        navigation={{
          disabledClass: 'opacity-0',
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        pagination={pagination ? paginationOption : false}
        className="mySwiper"
      >
        {listProducts.map((productsItem, index) =>
          <SwiperSlide key={`slider` + index}>
            <ItemList products={productsItem} />
          </SwiperSlide>
        )
        }
        <div ref={prevRef} className="custom-slider-prev rounded-circle bg-white ">
          <Icons.FaAngleLeft />
        </div>
        <div ref={nextRef} className="custom-slider-next rounded-circle bg-white ">
          <Icons.FaAngleRight />
        </div>
      </Swiper>

    </>)
}
export default SlickSlider