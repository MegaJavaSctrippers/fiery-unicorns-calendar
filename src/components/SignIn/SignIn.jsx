import React, { useState } from 'react'
import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'
import style from './SignIn.module.scss'
import icons from '../../assets/icons'

function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(false)
  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const loginSubmit = (e) => {
    e.preventDefault()
    if (email !== 'kudajberdievbektemir@gmail.com' && password !== 123) {
      setError(true)
    } else {
      setError(false)
      navigate('/')
    }
  }
  const enabled = email.length > 0 && password.length > 0

  return (
    <div className="container-fluid pl-0">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <form onSubmit={loginSubmit} className={classNames(style.login)}>
            <h2>Вход</h2>
            {error ? <span className="error">Не правильный пароль или логин </span> : null}
            <label htmlFor="email">
              Почта
              <input onChange={handleChange} type="text" id="email" name="email" />
            </label>
            <label htmlFor="password">
              Пароль
              <input onChange={handleChange} type="text" id="password" name="password" />
            </label>
            <a href="/" className={style.auth_link}>
              Забыли пароль?
            </a>
            <button disabled={!enabled} type="submit" className={style.save}>
              Войти
            </button>
            <p>
              <span>У вас нет аккаунта?</span>
              <Link to="/signup" className={style.auth_link}>
                Регистрация
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

export default SignIn
