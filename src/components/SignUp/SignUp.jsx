import React, { useState } from 'react'
import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'
import style from './SignUp.module.scss'
import icons from '../../assets/icons'

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    job: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [formValidate, setFormValidate] = useState({
    nameVal: false,
    departmentVal: false,
    jobVal: false,
    emailVal: false,
    passwordVal: false,
    confirmPasswordVal: false,
  })

  const { name, department, job, email, password, confirmPassword } = formData
  const { nameVal, departmentVal } = formValidate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const register = (e) => {
    e.preventDefault()
    if (!name) {
      setFormValidate({ ...formValidate, nameVal: true })
    } else {
      setFormValidate({ ...formValidate, nameVal: false })
    }

    if (!department) {
      setFormValidate({ ...formValidate, departmentVal: true })
    } else {
      setFormValidate({ ...formValidate, departmentVal: false })
    }
    // if (!job) {
    //   setFormValidate({ job: true })
    // } else {
    //   setFormValidate({ job: false })
    // }
    // if (!email) {
    //   setFormValidate({ emailVal: true })
    // } else {
    //   setFormValidate({ emailVal: false })
    // }
    // if (!password) {
    //   setFormValidate({ passwordVal: true })
    // } else {
    //   setFormValidate({ passwordVal: false })
    // }
    // if (!confirmPassword) {
    //   setFormValidate({ confirmPasswordVal: true })
    // } else {
    //   setFormValidate({ confirmPasswordVal: false })
    // }
    // if (password !== confirmPassword) {
    //   alert('Password is not the same')
    // } else {
    //   navigate('/')
    // }
  }

  return (
    <div className="container-fluid pl-0">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <form onSubmit={register} className={classNames(style.register)}>
            <h2>Добро пожаловать!</h2>
            {/* <div className="d-flex align-items-center mb-3">
              <div className={style.logo_box}>
                <img src={icons.userLogo} alt="" />
              </div>
              <span>Добавьте фото профиля</span>
            </div> */}

            <label htmlFor="name" className={`${nameVal ? style.label_validate : ''}`}>
              ФИО
              <input type="text" id="name" name="name" onChange={handleChange} />
            </label>
            <label htmlFor="department" className={`${departmentVal ? style.label_validate : ''}`}>
              Отдел
              <input type="text" id="department" name="department" onChange={handleChange} />
            </label>
            <label htmlFor="job">
              Должность
              <input type="text" id="job" name="job" onChange={handleChange} />
            </label>
            <label htmlFor="email">
              Почта
              <input type="text" id="email" name="email" onChange={handleChange} />
            </label>
            <label htmlFor="password">
              Пароль
              <input type="text" id="password" name="password" onChange={handleChange} />
            </label>
            <label htmlFor="confirm-password">
              Подтвердить пароль
              <input
                type="text"
                id="confirm-password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </label>
            <button type="submit" className={style.save}>
              Сохранить
            </button>
            <p>
              <span>У вас есть аккаунт?</span>
              <Link to="/signin" className={style.auth_link}>
                Войти
              </Link>
            </p>
          </form>
        </div>

        <div className={classNames('col-lg-6', style.calendar)}>
          <h2>Calendar</h2>
          <img src={icons.signupBg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
