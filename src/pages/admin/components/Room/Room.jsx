import React from 'react'
import { useSelector } from 'react-redux'
import SearchRoom from '../Search/SearchRoom'
import style from './Room.module.scss'
import CreateRoom from './CreateRoom'

function Room() {
  const createRoom = useSelector((state) => state.admin.create_room)
  return <div className={style.room}>{createRoom ? <CreateRoom /> : <SearchRoom />}</div>
}

export default Room
