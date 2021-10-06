import { CCol, CContainer, CRow } from "@coreui/react";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from 'swr';
import Breadcrumb from "../../components/coreui/breadcrumb/breabcrumb";
import SearchHeader from "../../components/home/search-header";
import ShoppingCartItems from "../../components/shopping-cart-items/shopping-cart-items";
import { commonService } from "../../services/common-service";
import { productService } from "../../services/product-service";
import { removeItem } from "../../store/actions/order-cart";

function ShoppingCart({ relativeItems }) {

  const { orderCart } = useSelector(state => state)
  const ids = orderCart.result.map(item => item.itemCdFv)
  // // fetchAPI is the function to do data fetching
  const { data, error } = useSWR(ids.toString(), productService.getRelativeItems)

  const dispatch = useDispatch()
  const removeItemInCart = useCallback((event) => dispatch(removeItem(event))
    , [dispatch])

  const totalItemsCount = (items) => {
    if (items == undefined || items == null || items.length == 0) return 0;
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const totalPriceCount = (items) => {
    if (items == undefined || items == null || items.length == 0) return 0;
    return commonService.currencyFormat(items.reduce((total, item) => total + item.quantity * item.price1Fn, 0))
  }

  const totalItems = useMemo(() => totalItemsCount(orderCart.result), [orderCart])
  const totalPrices = useMemo(() => totalPriceCount(orderCart.result), [orderCart])

  const decreaseQuantity = () => {

  }
  const increaseQuantity = () => {

  }
  return <>
    <SearchHeader />
    <div className="bg-secondary-300 pb-3">
      <Breadcrumb menu={'Shopping cart'} />
      <CContainer lg className="">
        <CRow className="d-flex m-h-350">
          <CCol sm={8} >
            <ShoppingCartItems
              totalItems={totalItems}
              totalPrices={totalPrices}
              items={orderCart.result}
              height={200} width={200}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeItemInCart={removeItemInCart} />
          </CCol>
          <CCol sm={4} >
            <div className="h-8 bg-white p-3">
              <div className="d-flex">
                <h5 className="fs-16 fw-400 text-dark pe-2">Subtotal ({totalItems} {totalItems > 1 ? 'items' : 'item'}): </h5>
                <h5 className="fs-16 fw-600">{totalPrices}</h5>
              </div>
              <button className="bg-orange-300 text-white border-0 px-3 py-1"> Process to checkout </button>
            </div>
            {/* relative product */}
            <div className="d-flex mt-2">
              {!data ? relativeItems.map(item => (
                <div key={item.itemCdFv}>
                  {item.itemInfoFv}
                </div>
              )) : data.map(item => (
                <div key={item.itemCdFv}>
                  {item.itemInfoFv}
                </div>
              ))}
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  </>
}

export const getStaticProps = async () => {
  const res = await productService.getRelativeItems()
  return {
    props: {
      relativeItems: res,
    },
  };
};
export default ShoppingCart