import React from 'react'
import { useSelector } from 'react-redux'
import Department from './Department'
import Organization from './Organization'
import Position from './Position'
import style from './Search.module.scss'

function Search() {
  const position = useSelector((state) => state.admin.searchPosition)
  const department = useSelector((state) => state.admin.searchDepartment)
  const organization = useSelector((state) => state.admin.searchOrganization)

  return (
    <div style={style.search}>
      {position ? (
        <Position />
      ) : (
        <>
          {department && !position ? (
            <Department />
          ) : (
            <>{organization && !department && !position ? <Organization /> : null}</>
          )}
        </>
      )}
    </div>
  )
}

export default Search
