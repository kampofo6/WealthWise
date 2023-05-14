import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants';
import logo from '../assets/WW.svg';
import downloadimg from '../assets/download-solid.svg';
import { Link } from 'react-router-dom';
import Signin from '../Pages/Signin';



//import {close, menu} from '../assets';           Giving me errors

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked);



  }
  function clickMe() {
    alert('my nam jeff')
  }


  return (

    <nav className='w-full flex py-6 justify-between items-center navbar' id='Nav-width'>




      <img src={logo} alt="WW" className="w-[48px] cursor-pointer" />
      <div className=''>
        <ul className='list-none sm:flex hidden justify-start justify-items-start flex-1' >
          {navLinks.map((nav, index) => (

            <li key={nav.id} className=" cursor-pointer text-[16px] text-white mr-10" id='nav-points'>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>

            </li>
          ))}


        </ul>
      </div>


      <div className='sm:flex hidden flex space-x-8 items-center'>

      <Link to='/Signin' className='list-none text-white'>
            Sign in
          </Link>


        <button className='rounded-full p-1.5 flex items-center justify-between' onClick={clickMe} id='nav-button'>
          Get the App
          {/* <img src={downloadimg} alt=""  className='h-[16px] w-[16px]'/> */}
        </button>
      </div>


      <div className='sm:hidden flex flex-1 justify-end items-center'>

        <div className=''>
          {/* Hambureber menu */}
          <i className={clicked ? 'fas fa-times fa-xl cursor-pointer' : 'fas fa-bars fa-xl cursor-pointer'} onClick={handleClick}></i>
        
         {/* pop-up bubble */}
          <div className={`${clicked ? 'flex' : 'hidden'} p-4 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar-div z-10`}>
            
            <ul className='list-none flex flex-col justify-start justify-items-start flex-1 '>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className='cursor-pointer text-[16px] text-white mb-4 ' id='nav-points'>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

          </div>


        </div>


      </div>


    </nav>
  );
};

export default Navbar;