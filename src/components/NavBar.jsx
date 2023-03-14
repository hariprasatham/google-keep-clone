import React from 'react'
import Icon from '../assets/icon.png'
import '../components/navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <img src={Icon} alt="google keep" />
      <span className='heading'>Keep</span>
    </div>
  )
}

export default NavBar