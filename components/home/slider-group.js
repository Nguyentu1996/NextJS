import { CCol, CRow } from "@coreui/react"
import Carousel from "../coreui/carousel/carousel"
import Program from "./program"

function SliderGroup() {
  const indicators = Array.from({ length: 8 }, (_, i) => i).map((key) => key)

  return (
    <div id="slider-group" className="">
      <CRow className="carousel mt-3">
        <CCol md={8}>
         <Carousel slides={ indicators } />
        </CCol>
        <CCol md={4} className="">
          <CRow className="pb-2 h-150 overflow-hidden">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non mauris ante. Donec ac orci eu arcu
              ornare tempor sit amet nec dui.
              Nulla sit amet euismod velit. Proin ac purus dignissim, ullamcorper ipsum sed, laoreet nunc
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non mauris ante. Donec ac orci eu a
              rcu ornare tempor sit amet nec dui.
              Nulla sit amet euismod velit. Proin ac purus dignissim, ullamcorper ipsum sed, laoreet nunc
            </span>
          </CRow>
          <CRow className="pb-2 h-150 overflow-hidden">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non mauris ante. Donec ac orci eu arcu ornare t
              empor sit amet nec dui.
              Nulla sit amet euismod velit. Proin ac purus dignissim, ullamcorper ipsum sed, laoreet nunc
            </span>
          </CRow>
        </CCol>
      </CRow>
      <Program />
    </div>
  )
}
export default SliderGroup