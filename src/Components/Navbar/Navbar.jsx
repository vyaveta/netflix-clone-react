import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [show,setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll' , transitionNavBar);
    return () => window.removeEventListener('scroll' , transitionNavBar)
  },[])

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img className='nav__avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar