import { useState } from 'react'
import Icons from '../icons'

function CardItem({ cartData }) {
  const [inHover, setHover] = useState(false)

  return (
    <div
      id="card-item"
      className="w-card-item d-inline-block position-relative border-item mb-1 bg-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        id="rate-me"
        className="text-decoration-none p-2 px-3 d-block"
      >
        {
          inHover === false
          && (
            <div className="w-100">
              <Icons.HiStar />
              <Icons.HiStar />
              <Icons.HiStar />
              <Icons.HiStar />
            </div>
          )
        }

        <div id="name" className="w-100 pt-1">
          <span>Vãi Thiều Ông Tú</span>
        </div>
        {
          !inHover
          && (
            <div className="w-100 d-flex align-items-center text-secondary">
              <Icons.HiOutlineLocationMarker />
              <span className="ps-2 fs-13">Bắc Giang</span>
            </div>
          )
        }
        <div id="price" className="w-100 d-flex justify-content-between align-items-center pt-1">
          <span className="fs-6 fw-500 text-orange-300">600.000đ</span>
          <span className="text-decoration-midle text-secondary fs-13">700.000đ</span>
        </div>
      </div>
      {
        !inHover === false
        && (
          <div id="add-to-card" className="position-absolute bottom-0 end-0 w-100">
            <button className="w-100 bg-orange-300 text-white p-1 border-0"> Add to card </button>
          </div>
        )
      }
      {
        !inHover === false
        && (
          <div id="like" className="position-absolute top-0 start-0 w-30 bg-orange fs-13 text-white px-1">
            <span> Yêu thích</span>
          </div>
        )
      }
      <div id="discount" className="position-absolute top-0 end-0 bg-red fs-13 text-white px-1 d-flex justify-content-center">
        <span> 20% </span>
      </div>
    </div>
  )
}
export default CardItem
