import React, { useState } from 'react'
import { Select, Space } from 'antd'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import icons from '../../../assets/icons'
import SearchDepartmentChild from './SearchDepartmentChild'
import Invitation from '../../../modals/Invitation/Inivitation'

const { Option } = Select

const Alert = withReactContent(Swal)

function SearchDirection() {
  const [edit, setEdit] = useState(false)
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
        <span>Коммерческая дирекций</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Дирекция</span>
          {edit ? (
            <input
              onChange={() => console.log('j')}
              value=""
              name="direction"
              className="create_input"
            />
          ) : (
            <div className="create_div">Коммерческая дирекция</div>
          )}
        </div>
        <div className="create_form">
          <span className="create_label">Директор</span>
          {edit ? (
            <Space>
              <Select
                onChange={(value) => console.log(value)}
                value=""
                name="director"
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
        <div className="create_form">
          <span className="create_label">Организация</span>
          {edit ? (
            <Space>
              <Select
                onChange={(value) => console.log(value)}
                value=""
                name="organization"
                className="general_select create_select"
              >
                <Option value="1">Megalab</Option>
                <Option value="2">Megacom</Option>
              </Select>
            </Space>
          ) : (
            <div className="create_div">Коммерческая дирекция</div>
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
    </>
  )
}

export default SearchDirection
