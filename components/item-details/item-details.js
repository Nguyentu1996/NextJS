import { useState } from 'react'
import { CRow, CCol } from '@coreui/react'
import Image from 'next/image'
import Icons from '../coreui/icons'
import Carousel from '../coreui/carousel/carousel'
import profilePic from '../../public/images/na.jpg'


function ItemDetails({ item }) {
  const [quantity, setQuantity] = useState(1);
  const indicators = Array.from({ length: 8 }, (_, i) => i).map((key) => key)

  // const [activeIndex, setActiveIndex] = useState(item.images[0]);
  return (
    <CRow className="d-flex">
      <CCol sm={5}>
        <div id="carousel-item" >
          <div className="img-detail"
          id="img-details"
          >
            <Image src={profilePic} height={500} alt="Image detail product" />
          </div>
          <div className="h-5">
            <Carousel slides={indicators} slidesPerView={3} />
          </div>
        </div>
      </CCol>
      <CCol sm={7}>
        <p className="py-3 m-0">{item} Thang Nhôm Gấp Xếp Chữ M 5M7 Đa Năng cao cấp chính hãng hàn quốc shop yêu thích uy tín bảo hành 24 tháng</p>
        {/* <span>Đánh giá</span> | <span>Đã bán</span> */}
        <div id="price" className="w-100 bg-secondary-300 d-flex align-items-center px-3 h-4" >
          <p className="text-secondary text-decoration-midle m-0">{item?.priceOld} 180000<span>₫</span></p>
          <p className="text-orange-300 m-0 px-2 fs-30">{item?.price} 180000 ₫</p>
          <div id="discount-detail" className="bg-red text-white fs-13 d-flex justify-content-center">
            <p className="m-0 px-2">20%</p>
          </div>
        </div>
        <div>
          Select option
        </div>
        <div className="quantity my-3 d-flex align-items-center h-3">
          <p className="text-secondary m-0">Số lượng</p>
          <div id="quantity" className="ms-4 border border-right-none p-2 d-flex justify-content-center"><Icons.BiMinus /></div>
          <div className="px-4 border">
            <div id="quantity" className="py-1"> {quantity} </div>
          </div>
          <div id="quantity" className="border border-left-none p-2 d-flex justify-content-center"> <Icons.BiPlus /> </div>
          <p className="m-0 px-2 text-secondary">99 sản phẩm có sẵn</p>
        </div>
        <div className="d-flex">
          <button className="border-0 me-2 text-orange-300 px-5 bg-orange-100 w-12">Add to card</button>
          <button className="bg-orange-300 p-2 px-5 text-white border-0 w-12">Buy now</button>
        </div>
        <div id="shared" className="border-top my-4 d-block">
          <p>Đã thích</p>
          <p>Chia sẽ</p>
        </div>
      </CCol>
    </CRow>
  )
}
export default ItemDetails
