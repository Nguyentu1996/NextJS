import { Field, withFormik } from 'formik'
import { useCallback, useState } from 'react'
import ActiveLink from '../../components/active-link/active-link'
import Icons from '../../components/coreui/icons'
import * as Yup from 'yup'

const LoginFormComponent = (
  { handleSubmit, values, handleChange, isSubmitting, errors, touched, dirty, handleBlur, isValid }
) => {
  const [type, setType] = useState('password')
  const changeType = useCallback(() => type === 'text' ? setType('password') : setType('text'), [type])
  return (
    <form onSubmit={handleSubmit}>
      <Field name='userId'>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <>
            <div id="userId" className="position-relative">
              <input
                type="text"
                className="p-1 h-3 px-3 fs-14 w-100 border-r1 border border-light bg-secondary-300"
                placeholder="User name/Phone number"
                {...field}
              />
            </div>
            <div className="text-red d-flex align-items-center fs-14" style={{ height: '1.5rem' }}>
              {meta.touched && meta.error ? (<p className="m-0">{meta.error} </p>) : null}
            </div>
          </>
        )}
      </Field>

      <Field name='password'>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <>
            <div id="password" className="position-relative">
              <input
                className="p-1 h-3 px-3 pe-5 fs-14 w-100 border-r1 border border-light bg-secondary-300"
                placeholder="Password"
                type={type}
                {...field}
              />
              <div
                className="position-absolute top-0 end-0 fs-5 w-px-4 h-full d-flex justify-content-center align-items-center border-r1"
              >
                {type === 'password' ?
                  <Icons.BiHide className="text-dark" onClick={changeType} style={{ cursor: 'pointer' }} />
                  :
                  <Icons.BiShow className="text-dark" onClick={changeType} style={{ cursor: 'pointer' }} />
                }
              </div>
            </div>
            <div className="text-red d-flex align-items-center fs-14" style={{ height: '1.5rem' }}>
              {meta.touched && meta.error ? (<p className="m-0">{meta.error} </p>) : null}
            </div>
          </>
        )}
      </Field>


      <button type="submit" style={ dirty && isValid  ? { background: '#fd7e14' } : null}
        className="position-relative disable-select btn-animate-x p-1 h-3 px-3 fs-14 w-100 border-r1 border border-light bg-orange-100 text-white d-flex align-items-center cursor-pointer">
        <p className="m-0">Login to your account</p>
        <div
          className="position-absolute top-0 end-0 fs-5 w-px-4 h-full d-flex justify-content-center align-items-center border-r1"
        >
          <Icons.IoIosLogIn className="text-white" />
        </div>
      </button>
      <div id="action-login" className="d-flex justify-content-between align-items-center fs-14 link h-2 ">
        <div className="d-flex align-items-center cursor-pointer">
          <input id="remember" type="checkbox" defaultChecked={values.isRemember}
            onChange={handleChange}
            className="me-2"
            name="isRemember"
          />
          <span className="form-check-label" aria-label="remember">Remember me</span>
        </div>
        <ActiveLink href="./forgot-password">
          forgot password
        </ActiveLink>
      </div>
    </form>)
}

const LoginForm = props => {

  const { handleSubmit } = props;
  const LoginFormWithFormik = withFormik({
    // ...,
    mapPropsToValues: () => ({ userId: '', password: '', isRemember: false }),
    validationSchema: Yup.object().shape({ // Validate form field
      userId: Yup.string()
        .required('Username is required')
        .min(5, 'Username must have min 5 characters')
        .max(20, 'Username have max 20 characters'),
      password: Yup.string()
        .required('Password is required')
        .min(5, 'Username must have min 5 characters')
        .max(20, 'Username have max 20 characters'),
    }),
    handleSubmit: handleSubmit,
    displayName: 'LoginFormWithFormik',
  })(LoginFormComponent);

  return <LoginFormWithFormik />
}
export default LoginForm
