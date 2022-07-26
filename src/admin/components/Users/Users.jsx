import React from 'react'
import { useSelector } from 'react-redux'
import SearchUsers from '../Search/SearchUsers'
import InviteUser from './InviteUser'
import style from './Users.module.scss'

function Users() {
  const invite = useSelector((state) => state.admin.invite_user)
  return <div className={style.users}>{invite ? <InviteUser /> : <SearchUsers />}</div>
}

export default Users
