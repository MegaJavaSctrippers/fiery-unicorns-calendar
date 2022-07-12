import React, { useState } from 'react'
import classNames from 'classnames'
import { Space, Select } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import style from './SignUp.module.scss'
import icons from '../../assets/icons'

const { Option } = Select

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    lastname: '',
    department: '',
    job: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [type, setType] = useState({
    password: false,
    confirmPassword: false,
  })

  const { name, department, job, email, password, confirmPassword, surname, lastname } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const register = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log('password are not same')
    } else {
      navigate('/')
    }
  }
  const enabled = Object.values(formData).every((item) => item.length > 0)

  return (
    <div className="container-fluid pl-0">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <form onSubmit={register} className={classNames(style.register)}>
            <h2>Добро пожаловать!</h2>
            <div className="d-flex align-items-center mb-2">
              <label htmlFor="avatar" className={style.logo_box}>
                <img src={icons.userLogoSVG} alt="" />
                <input type="file" id="avatar" style={{ display: 'none' }} />
              </label>
              <span className={style.user_text}>Добавьте фото профиля</span>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="surname">
                  Фамилия
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={surname}
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="lastname">
                  Отчество
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="department">
                  Отдел
                  <input className="d-none" />
                  <Space className="select_full_width mt-1">
                    <Select
                      showArrow={false}
                      defaultValue="Отдел разработка"
                      className="general_select auth_select"
                      value={department}
                      onChange={(value) => setFormData({ ...formData, department: value })}
                    >
                      <Option value="1">Отдел разработка</Option>
                      <Option value="2">Отдел продаж</Option>
                      <Option value="3">Отдел по работе с клиентами</Option>
                    </Select>
                  </Space>
                </label>

                <label htmlFor="password">
                  Пароль
                  <div className={style.password}>
                    <input
                      value={password}
                      type={type.password ? 'text' : 'password'}
                      id="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setType({ ...type, password: !type.password })}
                    >
                      {type.password ? (
                        <img src={icons.showEyeSVG} alt="" />
                      ) : (
                        <img src={icons.hideEyeSVG} alt="" />
                      )}
                    </button>
                  </div>
                </label>
              </div>

              <div className="col-lg-6">
                <label htmlFor="name">
                  Имя
                  <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                </label>

                <label htmlFor="email">
                  Почта
                  <input
                    value={email}
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="job">
                  Должность
                  <input className="d-none" />
                  <Space id="job" className="select_full_width mt-1">
                    <Select
                      showArrow={false}
                      defaultValue="Frontend разработчик"
                      className="general_select auth_select"
                      value={job}
                      onChange={(value) => setFormData({ ...formData, job: value })}
                    >
                      <Option value="1">Frontend разработчик</Option>
                      <Option value="2">Backend разработчик</Option>
                      <Option value="3">Android разработчик</Option>
                    </Select>
                  </Space>
                </label>

                <label htmlFor="confirm-password">
                  Подтвердить пароль
                  <div className={style.password}>
                    <input
                      value={confirmPassword}
                      type={type.confirmPassword ? 'text' : 'password'}
                      id="confirm-password"
                      name="confirmPassword"
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setType({ ...type, confirmPassword: !type.confirmPassword })}
                    >
                      {type.confirmPassword ? (
                        <img src={icons.showEyeSVG} alt="" />
                      ) : (
                        <img src={icons.hideEyeSVG} alt="" />
                      )}
                    </button>
                  </div>
                </label>
              </div>
              <div className="col-lg-12">
                <button disabled={!enabled} type="submit" className={style.save}>
                  Сохранить
                </button>
              </div>
            </div>
            <p>
              <span className={style.span}>У вас есть аккаунт?</span>
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
