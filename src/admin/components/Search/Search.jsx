import React from 'react'
import { useSelector } from 'react-redux'
import SearchDepartment from './SearchDepartment'
import SearchOrganization from './SearchOrganization'
import SearchPosition from './SearchPosition'
import style from './Search.module.scss'

function Search() {
  const position = useSelector((state) => state.admin.search.position)
  const department = useSelector((state) => state.admin.search.department)
  const organization = useSelector((state) => state.admin.search.organization)

  return (
    <div style={style.search}>
      {position ? (
        <SearchPosition />
      ) : (
        <>
          {department && !position ? (
            <SearchDepartment />
          ) : (
            <>{organization && !department && !position ? <SearchOrganization /> : null}</>
          )}
        </>
      )}
    </div>
  )
}

export default Search
