import React, { useRef, useState } from 'react';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import Icons from "../coreui/icons";
import ItemList from "../item-list/item-list";



// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Navigation]);

function SlickSlider({ products, pagination, autoplay, key, addToCartClick }) {
  const ref = useRef()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [listProducts, setListProduct] = useState(pageInSlide())

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
      if (i >= (page * 12) - 1) {
        itemInPage.push(products[i]);
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

  return  (
    <>
      <Swiper
        ref={ref}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.navigation.disabledClass = 'opacity-0';
          swiper.navigation.update();
        }}
        autoplay={
          autoplay && {
            "delay": 6000,
            "disableOnInteraction": false
          }
        }
        pagination={pagination ? paginationOption : false}
        className="mySwiper"
      >
        {listProducts && listProducts.map((productsItem, index) =>
          <SwiperSlide key={`slider-tabs` + index}>
            <ItemList products={productsItem} addToCartClick={addToCartClick}/>
          </SwiperSlide>
        )}
        {
          listProducts.length < 1 && (<div className="bg-white text-dark d-flex justify-content-center m-h-700 w-100"> <p>No data return</p> </div>)
        }
        {
          listProducts.length > 0 && (
            <>
              <div ref={prevRef} className="custom-slider-prev rounded-circle bg-white ">
                <Icons.FaAngleLeft />
              </div>
              <div ref={nextRef} className="custom-slider-next rounded-circle bg-white ">
                <Icons.FaAngleRight />
              </div>
            </>
          )
        }

      </Swiper>

    </>)
}
export default React.memo(SlickSlider)
