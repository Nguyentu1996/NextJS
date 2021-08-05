import { createRef, useEffect, useState } from "react"
import useSlide from "./use-slide";

function OrderCart({ children, onSlideClose }) {
  const slideRef = createRef()
  slideRef.current = onSlideClose;
  const {isSlideVisible, toggleSlidebar} = useSlide()
  
  useEffect(() => {
    if (!isSlideVisible) {
      return null
    }
    function keyListener(event) {
      if (event.key === 'Escape') {
        return setVisible(false)
      }
      return null
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  }, [isSlideVisible])

  return (
        <div className={"sidebar-cart " + `${isSlideVisible ? 'active' : '' }`}>
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
    )
}
export default OrderCart
