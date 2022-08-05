import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Space, Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import style from './SignUp.module.scss'
import icons from '../../assets/icons'
import { getDepartments } from '../../store/admin/actions/departments'
import { getPositions } from '../../store/admin/actions/positions'

const { Option } = Select

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const departments = useSelector((state) => state.departments.departments)
  const positions = useSelector((state) => state.positions.positions)
  const [validation, setValidation] = useState({
    passwordLength: false,
    passwordConfirm: false,
    validEmail: false,
    emailExist: false,
  })
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
  useEffect(() => {
    dispatch(getDepartments())
    dispatch(getPositions())
  })

  const { name, department, job, email, password, confirmPassword, surname, lastname } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const register = async (e) => {
    e.preventDefault()
    const reg = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i
    if (password !== confirmPassword) {
      setValidation({ ...validation, passwordConfirm: true })
    } else if (password.length < 8) {
      setValidation({ ...validation, passwordLength: true })
    } else if (reg.test(email) === false) {
      setValidation({
        ...validation,
        passwordConfirm: false,
        passwordLength: false,
        validEmail: true,
      })
    } else {
      await axios
        .post('https://checkit24.herokuapp.com/api/users/reg/', {
          user: {
            name,
            surname,
            password,
            email,
            middlename: lastname,
            position: job,
            department,
          },
        })
        .then((res) => {
          console.log(res)
          navigate('/signin')
        })
        .catch((e) => {
          console.log(e)
          if (e.response.data.email[0] === 'user with this Электронная почта already exists.') {
            setValidation({ emailExist: true })
          }
        })
    }
  }
  const prwd = 'Пароль должен содержать минимум 8 символов'
  const enabled = Object.values(formData).every((item) => item.toString().length > 0)
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
            {validation.passwordConfirm ? (
              <div
                className={classNames(
                  style.password_confirm,
                  'd-flex align-items-center justify-content-between',
                )}
              >
                Введенные пароли не совпадают
              </div>
            ) : null}
            {validation.validEmail ? (
              <div
                className={classNames(
                  style.password_confirm,
                  'd-flex align-items-center justify-content-between',
                )}
              >
                Введите правильный email
              </div>
            ) : null}
            {validation.emailExist ? (
              <div
                className={classNames(
                  style.password_confirm,
                  'd-flex align-items-center justify-content-between',
                )}
              >
                Введенный email уже существует
              </div>
            ) : null}
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
                      className="general_select auth_select"
                      value={department}
                      onChange={(value) => setFormData({ ...formData, department: value })}
                    >
                      {departments.map((department) => (
                        <Option value={department.id} key={department.id}>
                          {department.name}
                        </Option>
                      ))}
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
                    type="email"
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
                      {positions.map((pos) => (
                        <Option key={pos.id} value={pos.id}>
                          {pos.name}
                        </Option>
                      ))}
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
              {validation.passwordLength ? (
                <span className={style.password_length}>{prwd}</span>
              ) : null}
              <div className="col-lg-12">
                <button disabled={!enabled} onClick={register} type="submit" className={style.save}>
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
