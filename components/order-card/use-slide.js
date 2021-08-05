import { useState, useEffect } from 'react'

const useSlide = () => {
  const [isSlideVisible, setIsSlideVisible] = useState(false)

  useEffect(() => {
  
  return setIsSlideVisible(isSlideVisible)
  }, [isSlideVisible])

  function toggleSlidebar(isVisible) {
    console.log("visible",isVisible);
    setIsSlideVisible(isVisible)
    console.log("visible",isVisible);

  }

  return {
    isSlideVisible,
    toggleSlidebar
  }
}

export default useSlide
