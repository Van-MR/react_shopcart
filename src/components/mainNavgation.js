import React from 'react'
import { NavLink } from 'react-router-dom'
import './mainNavgaton.css'

const Nav = (props) => {
  return (
     <header className="main-navigation">
        <nav>
           <ul>
              <li>
                 <NavLink to='/'>products</NavLink>
              </li>
              <li>
                 <NavLink to='/cart'>cart</NavLink>
              </li>
           </ul>
        </nav>
     </header>
  )
}

export default Nav
