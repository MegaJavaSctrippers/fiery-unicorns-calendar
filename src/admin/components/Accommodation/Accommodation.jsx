import React from 'react'
import { useSelector } from 'react-redux'
import SearchRoom from '../Search/SearchRoom'
import style from './Accommodation.module.scss'
import CreateRoom from './CreateRoom'

function Accommodaton() {
  const createRoom = useSelector((state) => state.admin.create_room)
  return <div className={style.room}>{createRoom ? <CreateRoom /> : <SearchRoom />}</div>
}

export default Accommodaton
