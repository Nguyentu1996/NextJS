import { CCol, CRow } from "@coreui/react"
import Carousel from "../coreui/carousel/carousel"
import Program from "./program"
import Image from 'next/image'
import profilePic from '../../public/images/na.jpg'

function SliderGroup({dynamicBanner}) {

  return (
    <div id="slider-group" className="">
      <CRow className="carousel mt-3">
        <CCol md={6} className="pe-2">
          <Carousel slides={dynamicBanner} />
        </CCol>
        <CCol md={3} className="p-0">
          <CRow className="h-full mx-2 p-0">
            <Image id="banner" src={profilePic} alt="image banner highlight" objectFit="cover"  />
          </CRow>
        </CCol>
        <CCol md={3}>
          <CRow className="h-full me-0 ps-2">
            <Image id="banner" src={profilePic} alt="image banner highlight" objectFit="cover" />
          </CRow>
        </CCol>
      </CRow>
      {/* <Program /> */}
    </div>
  )
}
export default SliderGroup