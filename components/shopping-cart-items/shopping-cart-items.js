
import { CCol, CRow } from "@coreui/react"
import Link from 'next/link'
import { commonService } from '../../services/common-service'
import Icons from "../coreui/icons"
import MyImage from "../coreui/image/image"
import { useCallback } from 'react'
import { useDispatch } from "react-redux";
import {removeItem} from '../../store/actions/order-cart'

function ShoppingCartItems({ totalItems, totalPrices, items = [], height, width = height, removeItemInCart, decreaseQuantity, increaseQuantity }) {
  return (
      <div className="overflow-auto text-dark cart h-full bg-white p-2 px-3">
        <CRow className="w-100 p-2 m-0 border-bottom text-orange-300">
          <CCol sm={10} className="p-0"><h5>Products</h5></CCol>
          <CCol sm={2} className="d-flex p-0 justify-content-end">
            <h5 >Price</h5>
          </CCol>
        </CRow>
        {items.map((item, i) =>
          <div key={i} className="d-table w-100 item-shadow border-bottom">
            <div className="image-wrapper d-table-cell p-8 w-20 position-relative">
              <MyImage
                src={item.imageUrlFv}
                className="img-item-cta thumb"
                alt={item.slugUrlFv}
                width={width} height={height} />
            </div>
            <div className="d-table-cell position-relative ">
              <div className="d-flex justify-contents-center position-absolute mt-3 px-2 w-100">
                <div className="d-block w-100">
                  <div className="d-flex w-100">
                    <Link href={'/' + item.slugUrlFv} passHref >
                      <a className="w-80"> {item.itemInfoFv} - {item.producerNameFv} </a>
                    </Link>
                    <p className="m-0 w-20 d-flex align-items-start justify-content-end fw-500">{commonService.currencyFormat(item.price1Fn)}</p>
                  </div>
                  <p className="text-orange-300 m-0 fs-14"> in stock </p>
                  <div className="w-100 d-flex h-2 align-items-center ">
                    <p className="m-0 pe-2 fw-500 fs-14 ">Quantity:</p>
                    <div className="pe-2 icon-height lh-1 fw-300"><Icons.BiMinus /> </div>
                    <p className="m-0"> {item.quantity} </p>
                    <div className="px-2 icon-height lh-1 fw-300"><Icons.BiPlus /> </div>
                  </div>
                  {/* <p className="m-0">{item.quantity} x {commonService.currencyFormat(item.price1Fn)}</p> */}
                  <p className="m-0 cursor-pointer fs-14 a-color-link" >
                    <span className="pe-2" onClick={() => removeItemInCart(item)}>Delete</span>|<span className="px-2">Save for later</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-100 d-flex p-2 justify-content-end mb-3">
          <h6 className="fw-400 px-1 fs-18">Subtotal ({totalItems}):  </h6> <h6 className="fs-18">{totalPrices}</h6>
          </div>
      </div>
  )
}
export default ShoppingCartItems