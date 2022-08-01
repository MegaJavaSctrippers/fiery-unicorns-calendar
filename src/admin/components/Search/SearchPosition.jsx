import React, { useEffect, useState } from 'react'
import { Space, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import icons from '../../../assets/icons'
import { getPositions } from '../../../store/admin/actions/positions'

const { Option } = Select
function Position() {
  const [edit, setEdit] = useState(false)
  const positions = useSelector((state) => state.positions.positions)
  const searchPos = useSelector((state) => state.admin.search.position)
  const searchOrg = useSelector((state) => state.admin.search.organization)
  const searchDep = useSelector((state) => state.admin.search.department)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPositions())
  }, [])

  const deletePosition = () => {
    Swal.fire({
      html: 'Удалить должность “UX/UI дизайнер” из <br/> отдела Разработок ?',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет',
      buttonsStyling: false,
      reverseButtons: true,
      closeButtonHtml: `<img class='close-sweet' src=${icons.closeBlackSVG}/>`,
      customClass: {
        popup: 'sweet-delete',
        confirmButton: 'confirm-btn',
        cancelButton: 'cancel-btn',
        closeButton: 'close-btn',
        actions: 'btn-group-sweet',
      },
      showClass: {
        popup: 'animate__animated animate__slideInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('yes')
      }
    })
  }

  return (
    <>
      <div className="create_title">
        {edit ? 'Редактировать :' : 'Поиск :'}
        <span>{`${searchPos} ${searchDep} ${searchOrg}`}</span>
      </div>
      {positions
        .filter((item) => item.name.includes(searchPos) && item.department.name.includes(searchDep))
        .map((item) => (
          <div key={item.id} className="create_box">
            <div className="create_form">
              <span className="create_label">Должность</span>
              {edit ? (
                <input
                  onChange={() => console.log('j')}
                  value={item.name}
                  name="position"
                  className="create_input"
                  id="position"
                />
              ) : (
                <div className="create_div">{item.name}</div>
              )}
            </div>
            <div className="create_form">
              <span className="create_label">Отдел</span>
              {edit ? (
                <Space>
                  <Select
                    onChange={(value) => console.log(value)}
                    value={item.department?.name}
                    name="department"
                    className="general_select create_select"
                  >
                    <Option value="1">Отдел разработок</Option>
                    <Option value="2">Отдел продаж</Option>
                    <Option value="3">Отдел по работе с клиентами</Option>
                  </Select>
                </Space>
              ) : (
                <div className="create_div">{item.department?.name}</div>
              )}
            </div>
            {!edit ? (
              <div className="create_form">
                <span className="create_label">Организация</span>
                <div className="create_div">Megalab</div>
                {/* {edit ? (
                  <Space>
                    <Select
                      onChange={(value) => console.log(value)}
                      value=""
                      name="department"
                      className="general_select create_select"
                    >
                      <Option value="1">Отдел разработок</Option>
                      <Option value="2">Отдел продаж</Option>
                      <Option value="3">Отдел по работе с клиентами</Option>
                    </Select>
                  </Space>
                ) : (
                  <div className="create_div">Megalab</div>
                )} */}
              </div>
            ) : null}
            {edit ? (
              <button className="create_btn" onClick={() => console.log('heelo')} type="button">
                Сохранить
              </button>
            ) : null}
            <button onClick={() => setEdit(!edit)} type="button" className="edit_icon">
              {edit ? <img src={icons.editBlackSVG} alt="" /> : <img src={icons.editSVG} alt="" />}
            </button>
            <button onClick={deletePosition} type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
          </div>
        ))}
    </>
  )
}

export default Position
