import { CContainer } from '@coreui/react'
import Link from 'next/link'
import React from 'react'
import Icons from '../icons'

function Breadcrumb({ menu }) {
  return (
    <CContainer lg className="h-2 d-flex align-items-center">
      <Link href="/" passHref className="text-decoration-none link">Home</Link>  
      <span className="px-2"><Icons.BsChevronRight /></span>
      {menu}
    </CContainer>
  )
}
export default Breadcrumb
