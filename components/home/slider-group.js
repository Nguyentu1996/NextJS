import { CCol, CRow } from "@coreui/react"
import Carousel from "../coreui/carousel/carousel"
import MyImage from "../coreui/image/image"

function SliderGroup({dynamicBanner, banner1, banner2}) {

  return (
    <div id="slider-group" className="">
      <CRow className="carousel mt-3">
        <CCol md={6} className="pe-2">
          <Carousel slides={dynamicBanner} />
        </CCol>
        <CCol md={3} className="p-0">
          <CRow className="h-full mx-2 p-0">
            <MyImage id="banner" src={banner1[0]?.imageUrlFv} alt="image banner highlight" objectFit="cover" width={500} height={500}  />
          </CRow>
        </CCol>
        <CCol md={3}>
          <CRow className="h-full me-0 ps-2">
            <MyImage id="banner" src={banner2[0]?.imageUrlFv} alt="image banner highlight" objectFit="cover" width={500} height={500} />
          </CRow>
        </CCol>
      </CRow>
      {/* <Program /> */}
    </div>
  )
}
export default SliderGroup