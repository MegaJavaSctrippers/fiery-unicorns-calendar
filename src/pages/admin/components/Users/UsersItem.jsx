import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../../../assets/icons'
import { getUsers } from '../../../../store/admin/actions/users'

function Position() {
  const user = useSelector((state) => state.admin.search.user)
  const pos = useSelector((state) => state.admin.search.position)
  const dep = useSelector((state) => state.admin.search.department)
  const users = useSelector((state) => state.users.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <>
      {users
        .filter((item) => item.name.includes(user))
        .filter((item) => item.positions[0]?.position.name.includes(pos))
        .filter((item) => item.positions[0]?.department.name.includes(dep))
        .map((item) => (
          <div key={item.id} className="create_box">
            <div className="create_form">
              <span className="create_label">Имя</span>
              <div className="create_div">{item.name}</div>
            </div>
            <div className="create_form">
              <span className="create_label">Фамилия</span>
              <div className="create_div">{item.surname}</div>
            </div>
            <div className="create_form">
              <span className="create_label">Должность</span>
              <div className="create_div">
                {item.positions ? item.positions[0].position.name : null}
              </div>
            </div>
            <div className="create_form">
              <span className="create_label">Email</span>
              <div className="create_div">{item.email}</div>
            </div>
            <button type="button" className="edit_icon">
              <img src={icons.editSVG} alt="" />
            </button>
            <button type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
          </div>
        ))}
    </>
  )
}

export default Position
