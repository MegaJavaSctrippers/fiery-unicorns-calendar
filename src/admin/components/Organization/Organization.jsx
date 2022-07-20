import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchUser } from '../../../store/admin/adminReducer'
import Search from '../Search/Search'
import CreateDepartment from './CreateDepartment'
import CreateOrganization from './CreateOrganization'
import CreatePosition from './CreatePosition'
import style from './Organization.module.scss'

function Organization() {
  const create = useSelector((state) => state.admin.create)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSearchUser(''))
  }, [])
  const handleCreate = () => {
    switch (create) {
      case 'position':
        return <CreatePosition />
      case 'department':
        return <CreateDepartment />
      case 'organization':
        return <CreateOrganization />
      default:
        return null
    }
  }
  return <div className={style.organization}>{create ? handleCreate() : <Search />}</div>
}

export default Organization
