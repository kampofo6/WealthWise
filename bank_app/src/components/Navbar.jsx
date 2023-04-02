import React from 'react'
import {useState} from 'react'
import {navLinks} from '../constants';
import logo from '../assets/WW.svg';
//import {close, menu} from '../assets';           Giving me errors
 
const Navbar = () => {
const [clicked, setClicked] = useState(false)

const handleClick = () => {
  setClicked(!clicked);
  
}


  return (   

    <nav className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo} alt="WW" className="w-[48px]" />

      <ul className='list-none sm:flex hidden justify-center items-center flex-1' >
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
      <div>
        
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

      </div> 

      
    </nav>
  )
  
}

export default Navbar