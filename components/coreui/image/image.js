import Image from "next/image"
import PropTypes from 'prop-types';

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

function  MyImage(props) {
  return (
    <Image
      className={props.className}
      loader={myLoader}
      src={props.name}
      alt="Picture of the author"
      width={props?.width}
      height={props?.height}
      layout={props?.layout}
      objectFit={props?.objectFit}
    />
  )
}

MyImage.propTypes  = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  layout: PropTypes.oneOf(['fill', 'fixed', 'responsive', 'intrinsic']),
  objectFit: PropTypes.oneOf(['contain', 'cover'])
}
export default MyImage