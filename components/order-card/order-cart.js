import { createRef, useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom";
import styles from './order-cart.module.css'

function OrderCart({ children, onSlideClose, isSlideVisible }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const closeRef = useRef()
  closeRef.current = onSlideClose

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
      <div className={styles.content}>
      <div className={styles.close}/>
      <div className={styles['cart-header']}>
        Added
        <div id="cart-l-header" className={styles['cart-left']}>
          left
        </div>
        <div id="cart-r-header" className={styles['cart-right']}>
          right
        </div>
      </div>
      <div className="sidebar-cart-body">
        content
      </div>
      <div className="sidebar-cart-bottom">
        bottom
      </div>

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
