import Image from "next/image"
import PropTypes from 'prop-types';
import { useState } from "react";
import { apiUrl } from '../../../config';
import notfoundImg from '../../../public/images/image-not-found.png'

const myLoader = ({ src, width, quality }) => {
  if (!src) {
    return notfoundImg
  }
  return `${apiUrl}/File/${src}?w=${width}&q=${quality || 75}`
}

function MyImage(props) {
  const [srcFallBack, setSrcFallBack] = useState(false)

  return (
    <>
      {
        srcFallBack && (
        <Image 
          src={notfoundImg} 
          alt={props?.alt}
          width={props?.width}
          height={props?.height}
          layout={props?.layout}
          objectFit={props?.objectFit}/>)
      }
      { srcFallBack === false && (
        <Image
          className={props?.className}  
          loader={myLoader}
          src={props?.src}
          alt={props?.alt}
          width={props?.width}
          height={props?.height}
          layout={props?.layout}
          objectFit={props?.objectFit}
          onError={() => setSrcFallBack(true)}
        />)
      }
    </>
  )

}

MyImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  layout: PropTypes.oneOf(['fill', 'fixed', 'responsive', 'intrinsic']),
  objectFit: PropTypes.oneOf(['contain', 'cover'])
}
export default MyImage
