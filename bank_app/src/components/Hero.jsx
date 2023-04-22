import React from 'react'
import styles from '../style'
import phonemockup from '../assets/phonemockup.svg'
import coffeeman from '../assets/coffeeman.svg'


const Hero = () => (
  <section id='home' className={`flex flex-row md:flex-row flex-col relative ${styles.paddingY}`} >
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`} id='hero-container'>
      <div className='flex flex-row justify-between items-center w-full '>

        <h1 className='flex-1 ss:text-[64px] text-[52px] text-white ss:leading-[100px] leading-[75px]  '>
          Financial Success <br className='sm:block hidden' />

          Starts with {" "}  <span className='text-gradient'>WealthWise</span>

        </h1>



      </div>

      <div className='flex flex-row flex-1  items-center w-full py-8 '>
        <button className='rounded-full p-1.5 px-8 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500' id='hero-button'>
          Sign up
        </button>

        <li className='list-none px-8' >
          <a href="#" className='text-white'>Learn More</a>
        </li>
      </div>

     


      <div className='accomp flex flex-row justify-between md:space-x-28 space-x-10 pt-18 '>

        <div className='flex flex-col items-center'>
          <h2 className=''>
            4M+
          </h2>
          <p className='hero-p'>Customers</p>
        </div>


        <div className='flex flex-col items-center'>
          <h2>
            8
          </h2>
          <p className='hero-p'>Years of Experience</p>

        </div>


        <div className='flex flex-col items-center'>
          <h2>
            #1
          </h2>
          <p className='hero-p'>Financial app</p>

        </div>


      </div>


    </div>
    <img src={phonemockup} alt="" className='flex h-[475px] w-[650] absolute right-0 bottom-0 pb-5 pr-0 ' id='phone-pic'/>

  </section>
)


export default Hero