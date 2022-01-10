import { CCol, CContainer, CRow } from '@coreui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { connect } from "react-redux"
import ActiveLink from '../../components/active-link/active-link'
import Icons from '../../components/coreui/icons'
import { actions } from '../../store/actions'
import LoginForm from './login-form'

function Login({ stateLogin, login }) {
  const router = useRouter()


  const submitted = (values, { setSubmitting }) => {

    const payload =  {
      access: {
        userId: values.userId
      },
      loginCondition: {
        password: values.password
      }
    }
    const isRemember = values.isRemember
    login(payload, (success, response) => {
      console.log(success, response);
      if (success) {
        // TODO
        router.push('./')
          console.log("login successfull");
        // Storage.set(Configs.STORAGE, response.result)
        // toast.add(response.message)
      } 
    })
  }


  return <>
    <Head>
      <title>Nông Sản Việt Nam</title>
      <link rel="canonical" href="/domain.com" />
      <meta name="description" content="Thương mại nông sản." />
      <meta property="og:title" content="Thương mại nông sản" />
      <meta property="og:description" content="Đăng nhập." />
      <meta property="og:url" content="https://snipcart.com/" />
      <meta property="og:type" content="website" />
    </Head>
    <div className="bg-white m-w-app m-h-full">
      <CContainer id="header-login" className="h-5 bg-white d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <ActiveLink href='./'>
            <Image
              src="/vercel.svg" // Route of the image file
              height={70} // Desired size with correct aspect ratio
              width={120} // Desired size with correct aspect ratio
              alt="Logo"
            />
          </ActiveLink>
          <p className="my-0 mx-3 fw-500 fs-18">Login</p>
        </div>
        <ActiveLink href='/' className="text-orange-300 fs-14">Need help?</ActiveLink>
      </CContainer>
      <div className="bg-orange-300"
        style={{ minHeight: '500px' }}>
        <CContainer className="d-flex justify-content-between">
          <div className="w-50 d-flex align-items-center my-5" style={{ flexDirection: 'column' }}>
            <ActiveLink href='./'>
              <Image
                src="/vercel.svg" // Route of the image file
                height={350} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Logo"
              />
            </ActiveLink>
            <p
              style={{ display: 'contents' }}
              className="text-white"
            >
              Chào mừng bạn trở lại! bạn đã có sẵn tài khoản tại Thương mại nông sản.
              <span className="text-uppercase">Đăng nhập ngay</span>
            </p>
          </div>
          <div className="my-5 bg-white box-shadow border-r1" style={{ width: '500px' }}>
            <div className="px-4 p-3 h-full" >
              <p className="fs-18 h-2" >  Login</p>
              <div className="d-flex">
                <div id="form-login" className="w-100" style={{ maxWidth: '500px' }}>
                  {stateLogin.message === 'LOGIN FAILURE' &&
                    <div className="d-flex justify-content-center align-items-center fs-14 bg-warning p1 h-3 text-red"
                      style={{ marginBlockEnd: '1.5rem' }}
                    >
                      <span>Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại</span>
                    </div>
                  }
                  <LoginForm handleSubmit={submitted} />

                  <div className="d-flex align-items-center">
                    <div style={{ flex: 1, height: '1.5px' }} className="bg-secondary-300" />
                    <span className="px-2 text-secondary">Or</span>
                    <div style={{ flex: 1, height: '1.5px' }} className="bg-secondary-300" />
                  </div>
                  <div className="d-flex align-items-center text-white mt-2 disable-select" style={{ gap: '5px' }}>
                    <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#4867aa', height: '30px' }}
                      className="d-flex justify-content-center align-items-center cursor-pointer btn-animate">
                      <div><Icons.RiFacebookCircleFill className="text-white" style={{ height: '30px', width: '21px' }} /> </div>
                      <span>Facebook</span>
                    </div>

                    <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#fff', border: '1px solid rgb(215 215 215)', height: '30px' }}
                      className="d-flex justify-content-center align-items-center cursor-pointer btn-animate">
                      <div>
                        <Icons.FcGoogle className="text-white" style={{ height: '30px', width: '21px' }} />
                      </div>
                      <span className="text-secondary">Google</span>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center', backgroundColor: '#000', height: '30px' }}
                      className="d-flex justify-content-center align-items-center cursor-pointer btn-animate">
                      <div><Icons.AiFillApple className="text-white" style={{ height: '30px', width: '21px' }} /> </div>
                      <span>Apple</span>
                    </div>
                  </div>
                  <div id="register" className="fs-14 h-5 d-flex justify-content-center align-items-center cursor-pointer">
                    <p className="m-0 text-secondary"> New to thuongmainongsan? <ActiveLink href="./register" className="text-orange-300"><span> create new account </span> </ActiveLink></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CContainer>
      </div>
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
            <CCol className="py-3 px-0 border-top border-secondary-300 ">
              Copyright © QR5Code 2021. All rights reserved.
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  </>
}
const mapStateToProps = (state) => ({
  stateLogin: state.login
})
const mapStateToDispatch = (dispatch) => ({
  login: (payload, callback) => dispatch(actions.login(payload, callback))
})
export default connect(mapStateToProps, mapStateToDispatch)(Login)