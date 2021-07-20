import { CContainer } from '@coreui/react'
import Icons from '../../components/coreui/icons'
import SearchBar from '../../components/coreui/search-bar/search-bar'

// eslint-disable-next-line no-unused-vars
function SearchHeader(props) {
  return (
    <div id="search" className="m-w-row">
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
              <div className="w-50 w-md-60 border border-1 border-orange-300 rounded-pill d-flex justify-content-center h-60 p-1 align-items-center">
                <span>Cart</span>
                <Icons.HiOutlineShoppingCart className="fs-3 ms-2" />
              </div>
            </div>
          </div>

        </div>
      </CContainer>
    </div>
  )
}
export default SearchHeader
