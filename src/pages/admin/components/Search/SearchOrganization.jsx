import React, { useEffect, useState } from 'react'
import { Space, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../../../assets/icons'
import { getOrganizations } from '../../../../store/actions/organizationAction'
import { remove } from '../../../../services/remove'

const { Option } = Select

function Organization() {
  const [edit, setEdit] = useState(false)
  const organizations = useSelector((state) => state.organizations.organizations)
  const organization = useSelector((state) => state.admin.search.organization)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrganizations())
  }, [])
  const deleteOrganization = (organization) => {
    remove(organization.name)
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

            <button onClick={() => deleteOrganization(item)} type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
          </div>
        ))}
    </>
  )
}

export default Organization
