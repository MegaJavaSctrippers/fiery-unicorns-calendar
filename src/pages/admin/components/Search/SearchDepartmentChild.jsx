import React, { useState } from 'react'
import classNames from 'classnames'
import style from './Search.module.scss'
import icons from '../../../../assets/icons'

function SearchDepartmentChild() {
  const [deleteFormat, setDeleteFormat] = useState({
    notAll: true,
    all: false,
  })
  const { all, notAll } = deleteFormat

  const content = (
    <div className={classNames(style.delete_department, 'radio-toolbar')}>
      <h3>Выберите метод удаления отдела “Безопасности” ?</h3>
      <div>
        <label htmlFor="notall" className={notAll ? 'del_all' : ''}>
          <input
            onChange={() => setDeleteFormat({ notAll: true })}
            checked={notAll}
            type="checkbox"
            id="notall"
            value={notAll}
          />
          <img src={icons.tickSVG} alt="" />
        </label>
        <span>Удалить отдел, а участников переместить в другой отдел</span>
      </div>
      <div>
        <label htmlFor="all" className={all ? 'del_all' : ''}>
          <input
            checked={all}
            onChange={() => setDeleteFormat({ all: true })}
            type="checkbox"
            id="all"
            value={all}
          />
          <img src={icons.tickSVG} alt="" />
        </label>
        <span> Удалить отдел и участников полностью</span>
      </div>
    </div>
  )
  return content
}

export default SearchDepartmentChild
