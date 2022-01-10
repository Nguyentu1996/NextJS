import { CCol, CRow, CContainer } from '@coreui/react'
import Image from 'next/image'
import { withRouter } from 'next/router'


function Footer({router}) {
  return (
    router.pathname !== '/login' &&
    <div id="footer" className="bg-secondary-300">
      <CContainer lg className="pt-5">
        <CRow>
          <CCol lg={4} md={6}>
            <div className="d-block">
              <Image
                src="/vercel.svg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              <p className="mt-3">SDT: 00000</p>
              <p>ADRESS: 23 Nguyễn Văn Cừ, TP Huế</p>
            </div>
          </CCol>
          <CCol lg={3} md={6}>
            <div className="d-block">
              <h6>HỖ TRỢ</h6>
              <p>Quy trình mua bán</p>
              <p>Quy trình giải quyết</p>
              <p>Quyền và nghĩa vụ</p>
              <p>Quy trình hàng hóa cấm</p>
              <p>Chính sách vận chuyển</p>
              <p>Chính sách bảo mật</p>
            </div>
          </CCol>
          <CCol lg={3} md={6}>
            <h6>ĐỐI TÁC</h6>
            <p>Gioi thiệu về chúng tôi</p>
            <p>Điều khoản chung</p>
            <p>Quy chế hoạt động</p>
            <p>Cách thức đăng ký</p>
          </CCol>
          <CCol lg={2} md={6}>
            <h6>Kết nối chúng tôi</h6>
            <p><a>facebook</a></p>
            <p><a>instagram</a></p>
          </CCol>
        </CRow>
        <CRow className="border-1 pt-5">
          <CCol className="py-3 px-0 border-top border-secondary ">
            Copyright © QR5Code 2021. All rights reserved.
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withRouter(Footer)
