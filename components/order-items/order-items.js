import MyImage from "../coreui/image/image"
import { commonService } from '../../services/common-service'
import Link from 'next/link'

function OrderItems({ items = [], onClick }) {
  return (
    <div className="order-items ">
      <div className="overflow-auto cart h-full px-2 py-1">
        {
          items.reverse().map((item, i) =>
            <div key={i} className="d-table w-100 item-shadow">
              <div className="image-wrapper d-table-cell p-8 w-20 position-relative">
                <MyImage src={item.imageUrlFv} className="img-item-cta thumb" alt={item.slugUrlFv} width={80} height={80} />
               
              </div>
              <div className="d-table-cell position-relative ">
                <div className="d-flex justify-contents-center position-absolute width-full mt-3">
                  <div className="d-block w-100">
                    <Link href={'/' + item.slugUrlFv} passHref>
                      <a> {item.itemInfoFv} - {item.producerNameFv} </a>
                    </Link>
                    <p className="m-0">{item.quantity} x {commonService.currencyFormat(item.price1Fn)}</p>
                    {/* <p className="fw-300 cursor-pointer" style={{color: '#397899'}} onClick={() => onClick(item)}><u>Delete</u></p> */}
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default OrderItems
