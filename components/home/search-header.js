import { CContainer } from '@coreui/react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Icons from '../../components/coreui/icons'
import SearchBar from '../../components/coreui/search-bar/search-bar'

// eslint-disable-next-line no-unused-vars
function SearchHeader(props) {
  const {orderCart} = useSelector((state) => state)

  const totalItemsCount = (items) => {
    if(items == undefined || items== null || items.length == 0) return 0;
    return items.reduce((total, item) =>  total + item.quantity, 0)
  }
  const totalItems = useMemo(() => totalItemsCount(orderCart.result), [orderCart.result])

  return (
    <div id="search" className="">
      <CContainer className="d-flex py-4" lg>
        <div id="logo" className="logo me-2">
          YOUR LOGO
        </div>
        <div className="d-flex w-100">
          <div id="search-key" className="w-60">
            <SearchBar />
          </div>
          <div className="w-40 d-flex">
            <div className="w-50 d-flex justify-content-center align-items-center">
              <h4>1900100 Có</h4>
            </div>
            <div className="w-50 d-flex justify-content-end h-60 align-items-center">
              <div id="btn-cart" className="w-50 border border-1 border-orange-300 rounded-pill d-flex justify-content-center h-60 p-1 align-items-center">
                <span>Cart</span>
                <div className="position-relative" >
                <Icons.HiOutlineShoppingCart className="fs-3 ms-2" />
                <div id="total-item" className="position-absolute">{totalItems}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </CContainer>
    </div>
  )
}
export default SearchHeader
