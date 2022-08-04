import React from 'react'
import { useSelector } from 'react-redux'
import Search from '../Search/Search'
import CreateDepartment from './CreateDepartment'
import CreateDirection from './CreateDirection'
import CreateOrganization from './CreateOrganization'
import CreatePosition from './CreatePosition'
import style from './Organization.module.scss'

function Organization() {
  const create = useSelector((state) => state.admin.create)

  const handleCreate = () => {
    switch (create) {
      case 'position':
        return <CreatePosition />
      case 'department':
        return <CreateDepartment />
      case 'organization':
        return <CreateOrganization />
      case 'direction':
        return <CreateDirection />
      default:
        return null
    }
  }
  return <div className={style.organization}>{create ? handleCreate() : <Search />}</div>
}

export default Organization
