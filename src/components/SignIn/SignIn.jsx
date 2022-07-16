import React, { useState } from 'react'
import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import style from './SignIn.module.scss'
import icons from '../../assets/icons'

function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [type, setType] = useState(false)
  const [error, setError] = useState(false)
  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const loginSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post('https://checkit24.herokuapp.com/api/login/', {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((e) => {
        setError(false)
        console.log(e.message)
      })
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
              <div className={style.password}>
                <input
                  type={type ? 'text' : 'password'}
                  id="password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
                <button type="button" onClick={() => setType(!type)}>
                  {type ? (
                    <img src={icons.showEyeSVG} alt="" />
                  ) : (
                    <img src={icons.hideEyeSVG} alt="" />
                  )}
                </button>
              </div>
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
