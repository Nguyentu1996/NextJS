import { CContainer } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../icons'

function Breabcrumb({ menu }) {
  return (
    <CContainer lg className="h-2 d-flex align-items-center">
      <Link to="/" className="text-decoration-none link">Home</Link>  
      <span className="px-2"><Icons.BsChevronRight /></span>
      {menu}
    </CContainer>
  )
}
export default Breabcrumb
