import logo from '../assets/logo-mobile.svg'
import downIcon from '../assets/icon-chevron-down.svg'
import upIcon from '../assets/icon-chevron-up.svg'
import addIcon from '../assets/icon-add-task-mobile.svg'
import elipsisIcon from '../assets/icon-vertical-ellipsis.svg'
import React, { useState } from 'react'

const Navbar = ({ setClicked }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
        <header className="header">
            <img src={logo} alt="logo" className="nav-logo" />
            <div className="board-option" onClick={() => { setIsOpen(!isOpen) }}>
                <h3>Platform Launch</h3>
                {
                    isOpen
                      ? <img src={upIcon} alt="icon-down" className="board-icon"/>
                      : <img src={downIcon} alt="icon-down" className="board-icon" />
                }
            </div>
            <button className="nav-btn" onClick={() => { setClicked(prev => !prev) }}>
                <img src={addIcon} alt="add-icon" className="nav-add-icon"/>
            </button>
            <img src={elipsisIcon} alt="elipsis-icon" className="nav-elipsis" />
        </header>
  )
}

export default Navbar
