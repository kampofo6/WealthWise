import React from 'react'
import {useState} from 'react'
import {navLinks} from '../constants';
import logo from '../assets/WW.svg';
//import {close, menu} from '../assets';           Giving me errors
 
const Navbar = () => {
  // const [toggle, settoggle] = useState(false) // unused 

  return (
    
    

    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="WW" className="w-[48px]" />
      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (

          <li key={nav.id} className="font-normal cursor-pointer text-[16px] text-white mr-10">
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
           
          </li>
        ))}
        <li className='' >
        <a href="#" className='text-white py-6 '>Sign in</a>
        </li>


      </ul>

      {/* Also giving me errors */}
       {/* <div>
        <img src={toggle ? close : menu} alt="" />
      </div>  */}
    </nav>
  )
}

export default Navbar