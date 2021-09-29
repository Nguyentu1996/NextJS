
import MyImage from "../coreui/image/image"
import { commonService } from '../../services/common-service'
import Link from 'next/link'
import { CRow, CCol } from "@coreui/react"
import Icons from "../coreui/icons"
import Section from "../coreui/section/section"

function ShoppingCartItems({ items = [], height, width = height, onClick, decreaseQuantity, increaseQuantity }) {
  return (
      <div className="overflow-auto cart h-full bg-white p-2 px-3">
        <CRow className="w-100 p-2 m-0 border-bottom">
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
                    <p className="m-0 w-20 d-flex justify-content-end">{commonService.currencyFormat(item.price1Fn)}</p>
                  </div>

                 

                  {/* <p className="m-0">{item.quantity} x {commonService.currencyFormat(item.price1Fn)}</p> */}
                  <p className="fw-300 cursor-pointer" style={{ color: '#397899' }} onClick={() => onClick(item)}>
                    <u className="pe-2">Delete</u>|<u className="px-2">Save for later</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  )
}
export default ShoppingCartItems