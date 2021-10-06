import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { commonService } from '../../services/common-service';
import ActiveLink from "../active-link/active-link";
import Icons from "../coreui/icons";
import MyImage from "../coreui/image/image";
import OrderItems from "../order-items/order-items";
import styles from './order-cart.module.css';

function OrderCart({ children, onSlideClose, isSlideVisible }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const { orderCart } = useSelector((state) => state)
  const closeRef = useRef()
  closeRef.current = onSlideClose

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

  useEffect(() => {
    setIsBrowser(true);
    if (!isSlideVisible) {
      return null
    }
    function keyListener(event) {
      if (event.key === 'Escape') {
        return closeRef.current();
      }
      return null
    }

    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  }, [isSlideVisible])


  const sidebarCart = (
    <div className={"sidebar-cart " + `${isSlideVisible ? 'active' : ''}`}>
      <div className={styles.close} />
      <div className={styles['cart-header']}>
        <div id="cart-l-header" className={styles['cart-left']}>
          <div className={styles['added-to-cart-message']}>
            <div className={styles['box-message']}>
              <h4 className={styles.message}>Added to Cart</h4>
              <Icons.AiFillCheckCircle className={styles['icon-confirm']} />
            </div>
          </div>
          <div className={styles['added-img']}>
            {orderCart.added?.imageUrlFv && <MyImage src={orderCart.added?.imageUrlFv} className="img-item-cta thumb" alt={orderCart.added?.slugUrlFv} width={70} height={70} />}
          </div>
        </div>
        <div id="cart-r-header" className={styles['cart-right']}>
          <div className="position-fixed">
            <p className={styles['subtotal']} >
              <b>Card subtotal </b>({totalItems} {totalItems > 1 ? 'items' : 'item'}):
              <span className="text-orange-300 ps-2">{totalPrices}</span>
            </p>
            <div className="d-flex py-1">
              <ActiveLink className="border-0 me-3 text-orange-300 px-3 py-1 bg-orange-100 btn-animate" href={'/shopping-cart'} >Cart </ActiveLink>
              <button className="bg-orange-300 text-white border-0 px-3 py-1"> Process Checkout ({totalItems} {totalItems > 1 ? 'items' : 'item'}) </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['cart-content']}>
        <OrderItems items={orderCart?.result} height={80} />
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      sidebarCart
      ,
      document.getElementById("root")
    );
  } else {
    return null;
  }

}
export default OrderCart
