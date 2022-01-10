import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Icons from '../icons';
import MyImage from '../image/image';
import { addToCart } from '../../../store/actions/order-cart'
import { commonService } from '../../../services/common-service'


const Item = (({ item, onClick, href, addToCartClick }, ref) => {
  const [inHover, setHover] = useState(false)
  const dispatch = useDispatch()
  const itemPrice = (price) => commonService.currencyFormat(price)
  const handlerAdd = (event) => {
    dispatch(addToCart(item, 1))
    addToCartClick(event)
  }

  return (
    <div
      id="card-item"
      className="w-item d-inline-block position-relative border-item bg-white btn-animate"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        ref={ref}
        href={href}
        key={item.itemCdFv}
        className="text-dark"

      >
        <div>
          <MyImage src={item.imageUrlFv} className="img-item-cta" alt={item.slugUrlFv} width={500} height={500} />
        </div>
        <div
          id="rate-me"
          className="text-decoration-none d-block"
        >

          <div className="w-100" style={{color: 'orange'}}>
            <Icons.HiStar />
            <Icons.HiStar />
            <Icons.HiStar />
            <Icons.HiStar />
          </div>

            <div id="name" className="w-100 item-name">
              {item.itemInfoFv}
            </div>
          {
            !inHover
            && (
              <div className="w-100 p-1 px-3 d-flex align-items-center text-secondary">
                <Icons.HiOutlineLocationMarker />
                <span className="ps-2 fs-13">Bắc Giang</span>
              </div>
            )
          }
          <div id="price" className="w-100 d-flex justify-content-between align-items-center py-1 px-2">
            <span className="price-space fs-6 fw-500 text-orange-300 overflow-hidden m-w-50">{itemPrice(item.price1Fn)}</span>
            <span className="price-space text-decoration-midle text-secondary fs-13 overflow-hidden m-w-50">{itemPrice(item?.price2Fn)}</span>
          </div>
        </div>

        {
          !inHover === false
          && (
            <div id="like" className="position-absolute top-0 start-0 bg-orange fs-13 text-white px-1">
              <span > Yêu thích</span>
            </div>
          )
        }
        <div id="discount" className="position-absolute top-0 end-0 bg-red fs-13 text-white px-1 d-flex justify-content-center">
          <span> {item.discountNumFn}% </span>
        </div>
      </a>
      {
        !inHover === false
        && (
          <div id="add-to-card" className="position-absolute bottom-0 end-0 w-100 "
            onClick={handlerAdd}
          >
            <button className="w-100 bg-orange-300 text-white border-0"
            > Add to card </button>
          </div>
        )
      }
    </div>
  )
})

export default forwardRef(Item)
