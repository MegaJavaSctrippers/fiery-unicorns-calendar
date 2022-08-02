import React, { useEffect, useState } from 'react'
import { Space, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import icons from '../../../assets/icons'
import { getOrganizations } from '../../../store/admin/actions/organization'

const { Option } = Select

function Organization() {
  const [edit, setEdit] = useState(false)
  const organizations = useSelector((state) => state.organizations.organizations)
  const organization = useSelector((state) => state.admin.search.organization)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrganizations())
  }, [])
  const deleteOrganization = () => {
    Swal.fire({
      html: 'Удалить организацию Megalab ?',
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
        {edit ? 'Редактровать :' : 'Поиск :'}
        <span>{organization}</span>
      </div>
      {organizations
        .filter((item) => item.name.includes(organization))
        .map((item) => (
          <div key={item.id} className="create_box">
            <div className="create_form">
              <span className="create_label">Организация</span>
              {edit ? (
                <input
                  onChange={() => console.log('j')}
                  value={item.name}
                  name="organization"
                  className="create_input"
                />
              ) : (
                <div className="create_div">{item.name}</div>
              )}
            </div>
            <div className="create_form">
              <span className="create_label">Админстратор организации</span>
              {edit ? (
                <Space>
                  <Select
                    onChange={(value) => console.log(value)}
                    name="department"
                    className="general_select create_select"
                  >
                    <Option value="1">Асанов Тилек Асанович</Option>
                    <Option value="2">Bektemir Kudaiberdiev</Option>
                    <Option value="3">Cristiano Ronaldo</Option>
                  </Select>
                </Space>
              ) : (
                <div className="create_div">Асанов Тилек Асанович</div>
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

            <button onClick={deleteOrganization} type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
          </div>
        ))}
    </>
  )
}

export default Organization
