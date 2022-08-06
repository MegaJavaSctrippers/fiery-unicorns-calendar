import React from 'react'
import { useSelector } from 'react-redux'
import UsersItem from './UsersItem'
import InviteUser from './InviteUser'
import style from './Users.module.scss'

function Users() {
  const invite = useSelector((state) => state.admin.invite_user)
  return <div className={style.users}>{invite ? <InviteUser /> : <UsersItem />}</div>
}

export default Users
