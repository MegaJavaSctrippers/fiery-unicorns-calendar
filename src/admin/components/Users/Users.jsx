import React from 'react'
import { useSelector } from 'react-redux'
import SearchUsers from '../Search/SearchUsers'
import InviteUser from './InviteUser'
import style from './Users.module.scss'

function Users() {
  const create = useSelector((state) => state.admin.createUser)
  return <div className={style.users}>{create ? <InviteUser /> : <SearchUsers />}</div>
}

export default Users
