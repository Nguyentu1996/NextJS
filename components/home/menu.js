import { useCallback, useState } from 'react'
import { CContainer } from '@coreui/react'

function Menu() {
  const menuArray = ['Sell', 'Today', 'Most viewed', 'Sell', 'Today', 'Most viewed', 'Sell', 'Today', 'Most viewed']
  const [active, setActive] = useState(0)
  const activeMenu = useCallback((event) => {
    setActive(event.target.value)
  }, [])

  return (
    <>
      <div className="m-w-row">
        <CContainer lg>
          <ul className="list-inline cursor-pointer text-dark d-flex text-uppercase align-items-center py-3 m-0">
            {menuArray && menuArray.map((item, index) => (
              <li
                value={index}
                key={index}
                className={`${active === index ? 'fw-400 text-orange' : ''} fs-6 px-3`}
                onClick={activeMenu}
              > {item}
              </li>
            ))}
          </ul>
        </CContainer>

      </div>
    </>
  )
}
export default Menu
