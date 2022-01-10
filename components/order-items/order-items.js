import MyImage from "../coreui/image/image"
import { commonService } from '../../services/common-service'
import Link from 'next/link'
import Icons from "../coreui/icons"

function OrderItems({ className, items = [], height, width = height }) {
  return (
    <div className={`order-items text-dark ` + className}>
      <div className="overflow-auto cart h-full px-2 py-1">
        {items.map((item, i) =>
          <div key={i} className="d-table w-100 item-shadow position-relative" style={item.quantity ? null : {height: '120px'}}>
            <div className={`image-wrapper d-table-cell p-8 w-20` + item.quantity ? null :'w-30' } style={{textAlign: 'center', marginTop: '13px'}}>
              <MyImage
                src={item.imageUrlFv}
                className="img-item-cta thumb"
                alt={item.slugUrlFv}
                width={width} height={height} />
            </div>
            <div className="d-table-cell w-70">
              <div className="d-flex justify-contents-center position-absolute width-full mt-3">
                <div className="d-block w-100">
                  <Link href={'/' + item.slugUrlFv} passHref >
                    <a className="a-color-link-hover item-name"> {item.itemInfoFv} - {item.producerNameFv} </a>
                  </Link>
                  {item.quantity ? '' : 
                    <div className="w-100" style={{color: 'orange'}}>
                    <Icons.HiStar />
                    <Icons.HiStar />
                    <Icons.HiStar />
                    <Icons.HiStar />
                  </div>
                  }
                  <p className="m-0 text-orange-300 fw-500">{item.quantity ? item.quantity + ' x' : ''} {commonService.currencyFormat(item.price1Fn)}</p>
                  {/* <p className="fw-300 cursor-pointer" style={{color: '#397899'}} onClick={() => onClick(item)}><u>Delete</u></p> */}
                  {/* { item.quantity ? null : <div className="fw-300 cursor-pointer" style={{color: '#397899'}} onClick={() => onClick(item)}>see detail</div> } */}

                </div>
              </div>
            </div>
          </div> 
        )}
      </div>
    </div>
  )
}
export default OrderItems
