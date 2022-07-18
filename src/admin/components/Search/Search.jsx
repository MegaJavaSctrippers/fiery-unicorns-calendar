import React from 'react'
import { useSelector } from 'react-redux'
import style from './Search.module.scss'
import SearchDepartment from './SearchDepartment'
import SearchOrganization from './SearchOrganization'
import SearchPosition from './SearchPosition'

function Search() {
  const searchPos = useSelector((state) => state.admin.searchPosition)
  const searchDep = useSelector((state) => state.admin.searchDepartment)
  const searchOrg = useSelector((state) => state.admin.searchOrganization)

  return (
    <div style={style.search}>
      {searchOrg && !searchDep && !searchPos ? (
        <SearchOrganization />
      ) : (
        <>
          {searchDep && !searchPos ? (
            <SearchDepartment />
          ) : (
            <>{searchPos ? <SearchPosition /> : null}</>
          )}
        </>
      )}
    </div>
  )
}

export default Search
