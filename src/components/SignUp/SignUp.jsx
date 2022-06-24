import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import style from './SignUp.module.scss'
import icons from '../../assets/icons'

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    job: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const register = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container-fluid pl-0">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <form onSubmit={register} className={classNames(style.register)}>
            <h2>Добро пожаловать!</h2>
            <div className="d-flex align-items-center mb-2">
              <div className={style.logo_box}>
                <img src={icons.userLogo} alt="" />
              </div>
              <span>Добавьте фото профиля</span>
            </div>

            <label htmlFor="name">
              ФИО
              <input type="text" id="name" name="name" onChange={handleChange} />
            </label>
            <label htmlFor="department">
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
