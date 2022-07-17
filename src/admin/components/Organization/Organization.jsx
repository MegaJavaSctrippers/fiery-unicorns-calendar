import React from 'react'
import { useSelector } from 'react-redux'
import CreateDepartment from '../CreateDepartment/CreateDepartment'
import CreateOrganization from '../CreateOrganization/CreateOrganization'
import CreatePosition from '../CreatePosition/CreatePosition'
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
      default:
        return null
    }
  }
  return <div className={style.organization}>{handleCreate()}</div>
}

export default Organization
