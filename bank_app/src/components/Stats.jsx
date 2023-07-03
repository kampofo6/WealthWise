import React from 'react'
import credit from '../assets/credits.svg'
import styles from '../style'
import transaction from '../assets/T.svg'
import manlean from '../assets/M-L.svg'


const Stats = () => {
  return (
    <section className={`flex flex-row md:flex-row flex-col  ${styles.paddingY}`} >
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6  `} >


        <div className='stat-sec flex flex-row inline-block align-baseline'>


          <div className='manl w-[650px] '>
            <img src={manlean} alt="" className='' />
          </div>

          <div className='flex flex-col  space-y-56  p-0 space-x-20 ' >

            <div className='card1 stat-div flex p-6 w-[350px] '>
              <img src={credit} alt="" className='stat-pic' />
            </div>

            {/* <div className='card2 stat-div2 p-8 absolute top-500  w-[300px] '>

              <img src={credit} alt="" className='stat-pic' />

            </div> */}

          </div>


          <div className='flex flex-col md:space-x-12 sm:space-x-8 '>

            
            <div className='text-center flex flex-col '>
              <h2 className='stat-heading text-4xl'>Simplfy Your Finances</h2>
            </div>

            <div className='flex flex-col p-12  space-y-4 text-white'>
              <p id='p-sec'>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s,
                when an unknown printer.
              </p>
              <p id='p-sec'>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s,
                when an unknown printer.
              </p>
            </div>

            <div className='card1s stat-div flex p-6 mx-auto xs:mb-12'>
              <img src={credit} alt="" className='stat-pic' />
            </div>
            
          </div>

          
          

        </div>
        





      </div>

    </section>
  )
}

export default Stats