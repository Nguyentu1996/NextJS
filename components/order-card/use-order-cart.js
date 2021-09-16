import { useState, useEffect } from 'react'

const useOrderCart = () => {
    const [isSlideVisible, setIsSlideVisible] = useState(false)
    useEffect(() => {
        if (isSlideVisible) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isSlideVisible])

    function toggleOrderCart(isVisible) {
        setIsSlideVisible(isVisible)
    }
    return { isSlideVisible, toggleOrderCart }
}
export default useOrderCart
