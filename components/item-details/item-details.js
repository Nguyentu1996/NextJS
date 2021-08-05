import { useCallback, useState } from 'react'
import { CRow, CCol } from '@coreui/react'
import Icons from '../coreui/icons'
import Carousel from '../coreui/carousel/carousel'
import MyImage from '../coreui/image/image'


function ItemDetails({ item, images }) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = useCallback(() => setQuantity(quantity + 1), [quantity])
  const decreaseQuantity = useCallback(() => {
    if (quantity === 1) {
      return
    }
    return setQuantity(quantity - 1)
  }, [quantity])

  // const [activeIndex, setActiveIndex] = useState(item.images[0]);
  return (
    <CRow className="d-flex">
      <CCol sm={5}>
        <div id="carousel-item" >
          <div className="img-detail"
            id="img-details"
          >
            <MyImage src={item?.imageUrlFv}  width={530} height={530} alt="Image detail product" />
          </div>
          <div className="h-8">
            <Carousel slides={images} slidesPerView={3} />
          </div>
        </div>
      </CCol>
      <CCol sm={6}>
        <p className="py-3 m-0">{item.itemInfoFv}</p>
        {/* <span>Đánh giá</span> | <span>Đã bán</span> */}
        <div id="price" className="w-100 bg-secondary-300 d-flex align-items-center px-3 h-4" >
          <p className="text-secondary text-decoration-midle m-0">{item.price1Fn}<span>₫</span></p>
          <p className="text-orange-300 m-0 px-2 fs-30">{item.price2Fn} ₫</p>
          <div id="discount-detail" className="bg-red text-white fs-13 d-flex justify-content-center">
            <p className="m-0 px-2">{item.discountNumFn}%</p>
          </div>
        </div>
        <div>
          Select option
        </div>
        <div className="quantity my-3 d-flex align-items-center h-3 disable-select">
          <p className="text-secondary m-0">Số lượng</p>
          <div id="quantity"
            className="ms-4 border border-right-none p-2 d-flex justify-content-center cursor-pointer"
            onClick={decreaseQuantity}
          >
            <Icons.BiMinus />
          </div>
          <div className="px-4 border">
            <div id="quantity" className="py-1"> {quantity} </div>
          </div>
          <div
            id="quantity"
            className="border border-left-none p-2 d-flex justify-content-center cursor-pointer"
            onClick={increaseQuantity}
          >
            <Icons.BiPlus />
          </div>
          <p className="m-0 px-2 text-secondary">99 sản phẩm có sẵn</p>
        </div>
        <div className="d-flex">
          <button className="border-0 me-2 text-orange-300 px-5 bg-orange-100 w-12">Add to card</button>
          <button className="bg-orange-300 p-2 px-5 text-white border-0 w-12">Buy now</button>
        </div>
        <div id="shared" className="border-top my-4 d-block">
          <div>Đã thích</div>
          <div className="d-flex align-items-center pt-2">
            <span className="pe-3">Chia sẽ</span>
            <ul className="d-flex list-inline cursor-pointer mb-0">
              <li>
                <span
                  className="d-flex align-items-center px-1"
                  style={{ fontSize: '22px' }}
                  aria-label="Share on Facebook">
                  <Icons.FaFacebookSquare />
                </span>
              </li>
              <li>
                <span
                  className="d-flex align-items-center px-1"
                  style={{ fontSize: '22px' }}
                  aria-label="Share on Messenger"
                >
                  <Icons.FaFacebookMessenger />
                </span>
              </li>
              <li>
                <span className="d-flex align-items-center px-1"
                  style={{ fontSize: '22px' }}
                  aria-label="Share on Twitter"
                >
                  <Icons.FaTwitterSquare />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}
export default ItemDetails
// ctgCdFv:'010102'
// discountNumFn:'30'
// imageListCdFv:'11'
// imageUrlFv:'global/image-collection/hoaqua_3-280x330.jpg'
// itemCdFv:'11'
// itemDetailFv:'Hoa quả luôn là thức ăn dinh dưỡng tốt cho sức khỏe con người hằng ngày,nhưng hiện nay trên thị trường tràn lan các loại hoa quả không rõ nguồn gốc ảnh hưởng rất nhiều đến đời sống dinh dưỡng của con người cũng như làm tổn hại sức khỏe và đem lại những hậu quả khôn lường về bệnh tật... <br> Công ty chúng tôi đã giải đáp các khúc mắt của thị trường hiện nay,bằng cách nhập khẩu các loại hoa quả có nguồn gốc rõ ràng và được kiểm chứng kĩ càng trước khi tới tay người tiêu dùng và được mọi người hưởng ứng lớn,hiện nay Công Ty chúng tôi cung cấp hoa quả trên tất cả các tỉnh thành trong cả nước,hãy đến với chúng tôi để lựa chọn những chất dinh dưỡng thiết yếu cho mọi người trong gia đình bạn...'
// itemInfoFv:'Vãi Thiều Ông Tú'
// itemSummaryFv:'Hoa quả luôn là thức ăn dinh dưỡng tốt cho sức khỏe con người hằng ngày,nhưng hiện nay trên thị trường tràn lan các loại hoa quả không rõ nguồn gốc ảnh hưởng rất nhiều đến đời sống dinh dưỡng của con …'
// keywordsCdFv:'{hoa quả, trái cây, hồng}'
// price1Fn:'1600000'
// price2Fn:'1700000'
// producerCdFv:'11'
// producerNameFv:null
// promCdFv:'1'
// sellNumFn:'510.00000000'
// starNumFn:'2.00000000'
// stockNumFn:'2.00000000'