import { CContainer } from '@coreui/react'
import Link from 'next/link'
import React from 'react'
import Icons from '../icons'

function Breadcrumb({ menu }) {
  return (
    <CContainer lg className="h-2 d-flex align-items-center">
      <Link href="/" passHref className="text-decoration-none link text-dark">Home</Link>  
      <span className="px-2"><Icons.BsChevronRight /></span>
      <span className="px-2 ">{menu}</span>
    </CContainer>
  )
}
export default Breadcrumb
