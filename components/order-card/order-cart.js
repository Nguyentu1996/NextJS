import { createRef, useEffect, useState } from "react"
import ReactDOM from "react-dom";

function OrderCart({ children, onSlideClose, isSlideVisible }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (!isSlideVisible) {
      return null
    }
    function keyListener(event) {
      if (event.key === 'Escape') {
        return isSlideVisible = false
      }
      return null
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  }, [isSlideVisible])

  const sidebarCart = isSlideVisible ? (
    <div className={"sidebar-cart " + `${isSlideVisible ? 'active' : ''}`}>
      <div className="sidebar-cart-header">
        Added
      </div>
      <div className="sidebar-cart-body">
        content
      </div>
      <div className="sidebar-cart-bottom">
        bottom
      </div>
    </div>
  ) : null;

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
