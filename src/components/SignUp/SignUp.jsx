import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Space, Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import style from './SignUp.module.scss'
import icons from '../../assets/icons'
import { getDepartments } from '../../store/admin/actions/departments'
import { getPositions } from '../../store/admin/actions/positions'

const { Option } = Select
const schema = yup.object().shape({
  email: yup.string().email().required('Введите правильный email'),
  password: yup.string().min(8, 'Пароль должен быть минимум 8 символов').max(32).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Введенные пароли не совпадают'),
})
function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const departments = useSelector((state) => state.departments.departments)
  const positions = useSelector((state) => state.positions.positions)
  const [emailExist, setEmailExist] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [data, setFormData] = useState({
    name: '',
    surname: '',
    middlename: '',
    department: '',
    position: '',
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
  }, [dispatch])

  const { name, department, position, email, password, confirmPassword, surname, middlename } = data

  const handleChange = (e) => {
    setFormData({ ...data, [e.target.name]: e.target.value })
  }
  const onSubmit = async () => {
    await axios
      .post('https://checkit24.herokuapp.com/api/users/reg/', { user: data })
      .then(() => {
        navigate('/signin')
      })
      .catch((e) => {
        if (e.response.data.email[0] === 'user with this Электронная почта already exists.') {
          setEmailExist(true)
        }
      })
  }
  const enabled = Object.values(data).every((item) => item.toString().length > 0)
  return (
    <div className="container-fluid pl-0">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <form onSubmit={handleSubmit(onSubmit)} className={classNames(style.register)}>
            <h2>Добро пожаловать!</h2>
            <div className="d-flex align-items-center mb-2">
              <label htmlFor="avatar" className={style.logo_box}>
                <img src={icons.userLogoSVG} alt="" />
                <input type="file" id="avatar" style={{ display: 'none' }} />
              </label>
              <span className={style.user_text}>Добавьте фото профиля</span>
            </div>
            {errors.password ? (
              <div
                className={classNames(
                  style.password_confirm,
                  'd-flex align-items-center justify-content-between',
                )}
              >
                {errors.password.message}
              </div>
            ) : null}
            {errors.confirmPassword ? (
              <div
                className={classNames(
                  style.password_confirm,
                  'd-flex align-items-center justify-content-between',
                )}
              >
                {errors.confirmPassword.message}
              </div>
            ) : null}
            {emailExist ? (
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
                    id="middlename"
                    name="middlename"
                    value={middlename}
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
                      onChange={(value) => setFormData({ ...data, department: value })}
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
                      {...register('password')}
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
                    {...register('email')}
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
                      value={position}
                      onChange={(value) => setFormData({ ...data, position: value })}
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
                      {...register('confirmPassword')}
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
