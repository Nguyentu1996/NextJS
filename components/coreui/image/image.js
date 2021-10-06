import Image from "next/image";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { apiUrl, domain } from '../../../config';
import notfoundImg from '../../../public/images/image-not-found.png';

const myLoader = ({ src, width, quality }) => {
  if (src == undefined || src == null) {
    return notfoundImg
  }
  return `${domain}/File/${src}?w=${width}&q=${quality || 75}`
}

function MyImage(props) {
  
  const [srcFallBack, setSrcFallBack] = useState(false)

  useEffect(() => {
    if(srcFallBack) return setSrcFallBack(false)
  }, [props, setSrcFallBack])

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
            objectFit={props?.objectFit} />)
      }
      {srcFallBack === false && (
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
    </>)


}

MyImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  layout: PropTypes.oneOf(['fill', 'fixed', 'responsive', 'intrinsic']),
  objectFit: PropTypes.oneOf(['contain', 'cover'])
}
export default React.memo(MyImage)
