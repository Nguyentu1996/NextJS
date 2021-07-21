import * as rdd from 'react-device-detect'
export default function Device(props) {
    return <>{props.children(rdd)}</>
  }