import React, { useState } from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'

function Program() {
  const mockProgram = ['Free Ship & return', 'loyalty program', 'promotion']
  const [programing, setPrograming] = useState(mockProgram)
  return (
    <CContainer lg>
      <CRow className="m-3 justify-content-around">
        {programing.map((item, index) => (
          <CCol xs={4} className="text-uppercase" key={index}>
            <div className="p-3 bg-orange-300 text-white fw-500 d-flex justify-content-center cursor-pointer">
              {item}
            </div>
          </CCol>
        ))}
      </CRow>
    </CContainer>

  )
}
export default Program
