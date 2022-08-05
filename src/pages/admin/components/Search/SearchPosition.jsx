import React, { useEffect, useState } from 'react'
import { Space, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../../../assets/icons'
import { getPositions } from '../../../../store/admin/actions/positions'
import { remove } from '../../../../services/remove'

const { Option } = Select
function Position() {
  const [edit, setEdit] = useState(false)
  const positions = useSelector((state) => state.positions.positions)
  const searchPos = useSelector((state) => state.admin.search.position)
  const searchOrg = useSelector((state) => state.admin.search.organization)
  const dep = useSelector((state) => state.admin.search.department)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPositions())
  }, [])

  const deletePosition = (position) => {
    remove(position.name)
  }

  return (
    <>
      <div className="create_title">
        {edit ? 'Редактировать :' : 'Поиск :'}
        <span>{`${searchPos} ${dep} ${searchOrg}`}</span>
      </div>
      {positions
        .filter((item) => item.name.includes(searchPos) && item.department?.name.includes(dep))
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
            <button onClick={() => deletePosition(item)} type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
          </div>
        ))}
    </>
  )
}

export default Position
