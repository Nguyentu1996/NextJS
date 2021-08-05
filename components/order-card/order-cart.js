import { createRef, useEffect, useState } from "react"
import useSlide from "./use-slide";

function OrderCart({ children, onSlideClose, isSlideVisible }) {
  const slideRef = createRef()
  slideRef.current = onSlideClose;
  // const {visible, setVisible} = useState(isSlideVisible)
  
  // useEffect(() => {
  //   console.log( 'order', isSlideVisible);
  //   // if (!visible) {
  //   //   return null
  //   // }
  //   // function keyListener(event) {
  //   //   if (event.key === 'Escape') {
  //   //     return setVisible(false)
  //   //   }
  //   //   return null
  //   // }
  //   // document.addEventListener('keydown', keyListener)

  //   // return () => document.removeEventListener('keydown', keyListener)
  // }, [])

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
