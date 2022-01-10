import { CCol, CContainer, CRow } from "@coreui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from 'swr';
import Breadcrumb from "../../components/coreui/breadcrumb/breabcrumb";
import SearchHeader from "../../components/home/search-header";
import OrderItems from "../../components/order-items/order-items";
import ShoppingCartItems from "../../components/shopping-cart-items/shopping-cart-items";
import nextI18nextConfig from "../../next-i18next.config";
import { commonService } from "../../services/common-service";
import { productService } from "../../services/product-service";
import { decrementCounter, incrementCounter, removeItem } from "../../store/actions/order-cart";
import styles from './shopping-cart.module.css';

function ShoppingCart(props) {

  const { orderCart } = useSelector(state => state)
  const ids = orderCart.result.map(item => { if (item) return item.itemCdFv })
  // // fetchAPI is the function to do data fetching
  const { data } = useSWR(ids.toString(), productService.getRelativeItems)
  // const { suggest } = useSWR('suggestItem', )

  const dispatch = useDispatch()
  const removeItemInCart = useCallback((event) => dispatch(removeItem(event)), [dispatch])
  const decreaseQuantity = useCallback((event) => dispatch(decrementCounter(event)), [dispatch])
  const increaseQuantity = useCallback((event) => dispatch(incrementCounter(event)), [dispatch])
  const totalItemsCount = (items) => {
    if (items == undefined || items == null || items.length == 0) return 0;
    return items.reduce((total, item) => total + (item && item.quantity ? item.quantity : 0), 0)
  }

  const totalPriceCount = (items) => {
    if (items == undefined || items == null || items.length == 0) return 0;
    return commonService.currencyFormat(items.reduce((total, item) =>
      total + (item && item.quantity ? item.quantity : 0) * (item && item.price1Fn ? item.price1Fn : 0), 0))
  }

  const totalItems = useMemo(() => totalItemsCount(orderCart.result), [orderCart])
  const totalPrices = useMemo(() => totalPriceCount(orderCart.result), [orderCart])


  return <>
    <SearchHeader />
    <div className="bg-secondary-300 pb-3">
      <Breadcrumb menu={'Shopping cart'} />
      <CContainer lg >
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
            <div className="h-5 bg-white my-3"/>
             
            <div className="fs-13 color-black">
              <p className="m-0">The price and availability of items at thuong mai nong san com are subject to change. The Cart is a temporary place to store a list
                of your items and reflects each items most recent price. </p>
              <p className="m-0"> Shopping Cart  Do you have a gift card or promotional code Well ask you to enter your claim code when its time to pay.</p>
            </div>
          </CCol>
          <CCol sm={4} >
            {data ? <div className={styles['cart-right']}>
              <div className="d-flex">
                <h5 className="fs-16 fw-400 text-dark pe-2">Subtotal ({totalItems} {totalItems > 1 ? 'items' : 'item'}): </h5>
                <h5 className="fs-16 fw-600">{totalPrices}</h5>
              </div>
              <button className="bg-orange-300 text-white border-0 px-3 py-1 btn-animate"> Process to checkout </button>
            </div> : null}
            {
              data
                ? <>
                  <div className='bg-white text-orange-300 p-3 mt-3 border-bottom' style={{ minWidth: '400px' }}>
                    <span className="fs-6 fw-500 ">Sponsored Products related to items in your cart</span>
                  </div>

                  <div className="w-100 d-flex mb-3" style={{ flexDirection: 'column', overflow: 'hidden', maxHeight: '650px', minWidth: '400px' }}>
                    <OrderItems items={data} height={110} className={`w-100 m-0 ` + styles['cart-right'] + styles['relative-item']} />
                  </div>
                </>
                :
                <>
                  <div className='bg-white text-orange-300 p-3 border-bottom cart-right' style={{ minWidth: '400px' }}>
                    <span className="fs-6 fw-500 ">Suggest for you</span>
                  </div>
                    <div className="w-100 d-flex mb-3" style={{ flexDirection: 'column', overflow: 'hidden', maxHeight: '650px', minWidth: '400px' }}>
                      <OrderItems items={props.suggest} height={110} className={`w-100 m-0 ` + styles['cart-right'] + styles['relative-item']} />
                    </div>
           
                </>
            }
          </CCol>
        </CRow>
      </CContainer>
    </div>
  </>
}

export async function getStaticProps({ locale }) {
  const suggest = await productService.getSuggestItem()
  return {
    props: {
      suggest,
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),

    },
  };
};
export default ShoppingCart