import React, { useEffect, useState } from 'react'
import { Select, Space } from 'antd'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../../../assets/icons'
import SearchDepartmentChild from './SearchDepartmentChild'
import Invitation from '../../../../modals/Invitation/Inivitation'
import { getDepartments } from '../../../../store/admin/actions/departments'

const { Option } = Select

const Alert = withReactContent(Swal)

function Department() {
  const [edit, setEdit] = useState(false)
  const departments = useSelector((state) => state.departments.departments)
  const searchDep = useSelector((state) => state.admin.search.department)
  const searchDir = useSelector((state) => state.admin.search.direction)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDepartments())
  })
  const deleteDepartment = () => {
    Alert.fire({
      html: <SearchDepartmentChild />,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Удалить',
      borderRadius: '12px',
      buttonsStyling: false,
      reverseButtons: true,
      closeButtonHtml: `<img class='close-sweet' src=${icons.closeBlackSVG}/>`,
      customClass: {
        popup: 'sweet-delete',
        confirmButton: 'confirm-btn',
        cancelButton: 'cancel-btn',
        closeButton: 'close-btn',
        actions: 'btn-group-sweet delete',
      },
      showClass: {
        popup: 'animate__animated animate__slideInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    })
  }

  return (
    <>
      <div className="create_title">
        {edit ? 'Редактировать :' : 'Поиск :'}
        <span>{`${searchDep}  ${searchDir}`}</span>
      </div>
      {departments
        .filter((item) => item.name.includes(searchDep) && item.direction.name.includes(searchDir))
        .map((item) => (
          <div key={item.id} className="create_box">
            <div className="create_form">
              <span className="create_label">Отдел</span>
              {edit ? (
                <input
                  onChange={() => console.log('j')}
                  value={item.name}
                  name="department"
                  className="create_input"
                />
              ) : (
                <div className="create_div">{item.name}</div>
              )}
            </div>
            <div className="create_form">
              <span className="create_label">Руководитель отделa</span>
              {edit ? (
                <Space>
                  <Select
                    onChange={(value) => console.log(value)}
                    value={item.manager.name}
                    name="department"
                    className="general_select create_select"
                  >
                    <Option value="1">Асанов Тилек Асанович</Option>
                    <Option value="2">Bektemir Kudaiberdiev</Option>
                    <Option value="3">Cristiano Ronaldo</Option>
                  </Select>
                </Space>
              ) : (
                <div className="create_div">{item.manager.name}</div>
              )}
            </div>
            <div className="create_form">
              <span className="create_label">Дирекция</span>
              {edit ? (
                <Space>
                  <Select
                    onChange={(value) => console.log(value)}
                    value={item.direction.name}
                    name="department"
                    className="general_select create_select"
                  >
                    <Option value="1">Отдел разработок</Option>
                    <Option value="2">Отдел продаж</Option>
                    <Option value="3">Отдел по работе с клиентами</Option>
                  </Select>
                </Space>
              ) : (
                <div className="create_div">{item.direction.name}</div>
              )}
            </div>

            {edit ? (
              <button className="create_btn" onClick={() => console.log('heelo')} type="button">
                Сохранить
              </button>
            ) : null}

            <button onClick={() => setEdit(!edit)} type="button" className="edit_icon">
              {edit ? <img src={icons.editBlackSVG} alt="" /> : <img src={icons.editSVG} alt="" />}
            </button>

            <button onClick={deleteDepartment} type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
            <Invitation />
          </div>
        ))}
    </>
  )
}

export default Department
