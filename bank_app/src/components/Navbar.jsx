import React from 'react'
// import {useState} from 'react'
import {navLinks} from '../constants';
import logo from '../assets/WW.svg';
//import {close, menu} from '../assets';           Giving me errors
 
const Navbar = () => {
const state = { clicked: false }

const handleClick = () => {
  this.setState({ clicked: !this.state.clicked })
  
}


  return (
    
    

    <nav className='w-full flex py-6 justify-between items-center navbar'>
       {/* <div className='menu-icon' onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

      </div> 
       */}
      <img src={logo} alt="WW" className="w-[48px]" />

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (

          <li key={nav.id} className="font-normal cursor-pointer text-[16px] text-white mr-10">
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
           
          </li>
        ))}
        {/* <li className='' >
        <a href="#" className='text-white py-6 '>Sign in</a>
        </li> */}


      </ul>

      
    </nav>
  )
  
}

export default Navbar