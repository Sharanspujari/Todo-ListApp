import React from 'react'

function Header() {
  return (
    <div className='header'>
            <nav className='navcontainer'>
            <div >
            <span className='logo'><img className='logo-img' src='https://geekonomy.in/wp-content/uploads/2021/07/Geekonomy-Logo-White-01.png'/></span>
            </div>
            <div >
            <span className='msg'>Welcome to Todo-list app ! </span>
            </div>
            </nav>
    </div>
  )
}

export default Header