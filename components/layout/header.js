import { CContainer } from '@coreui/react'
import { withRouter } from 'next/router'
import ActiveLink from '../active-link/active-link'

function Header({router}) {
  return ( router.pathname !== '/login' && 
    <div id="header" className="bg-orange-300 h-3 p-2">
      <CContainer className="d-flex justify-content-between align-items-center h-full" lg>
        <div id="lang">
          <ul className="list-inline pe-none text-white d-flex align-items-center m-0">
            <li className="list-inline-item ">VN</li>
            <li className="list-inline-item ">EN</li>
          </ul>
        </div>
        <div id="header-menu d-flex cursor-pointer">
          <span className="p-2 pe-none text-white fw-400">My wishlist</span><span className="text-white fw-100">|</span>
          <ActiveLink href="./login">          
             <span className="p-2 pe-none text-white fw-400">Sign in</span><span className="text-white fw-100">|</span>
          </ActiveLink>
          <span className="p-2 pe-none text-white fw-400">Register</span><span className="text-white fw-100">|</span>
          <span className="ps-2 pe-none text-white fw-400">Store locator</span>
        </div>
      </CContainer>
    </div>
  )
}

export default withRouter(Header)
