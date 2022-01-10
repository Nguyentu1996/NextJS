import { CContainer } from '@coreui/react'
import Link from 'next/link'
import React from 'react'
import Icons from '../icons'

function Breadcrumb({ menu }) {
  return (
    <CContainer lg className="d-flex align-items-center h-3">
      
      <Link href="/" passHref className="text-decoration-none link text-dark a-color-link-hover">Home</Link>  
      <span className="px-2"><Icons.BsChevronRight /></span>
      <span className="px-2 ">{menu}</span>
    </CContainer>
  )
}
export default Breadcrumb
