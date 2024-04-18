import React, { memo } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { toggleMode } from '../../context/themSlice'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";



function Navbar() {
  const users = useSelector(s => s.users.value)
  let theme = useSelector(s => s.theme.value)
  const dispatch = useDispatch()

  return (
    <div className='navbar'>
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>All users <sup>{users.length}</sup></NavLink>
      <button className='dark__mode' onClick={() => dispatch(toggleMode())}> {theme ? <MdLightMode /> : <MdOutlineDarkMode />}</button>
    </div>
  )
}

export default memo(Navbar)