import React from 'react';
import styles from '../style';
import ally from '../assets/ally.svg'
import yousef from '../assets/yousef.svg'
import carlos from '../assets/carlos.svg'
import quote from '../assets/Quote.svg'
import ww from '../assets/WW.svg'


const Test = () => {
  return (

    <section className={`flex flex-row md:flex-row flex-col  ${styles.paddingY}`} >
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6  `} >
        <div className='faces-container flex flex-row lg:space-x-24  '>


          <div className='face flex p-8 items-center'>
            <img src={ally} alt="" />
            
            
          </div>


          <div className='face flex p-8 items-center' >
            <img src={yousef} alt="" />
          </div>


          <div className='face flex p-8 items-center'>
            <img src={carlos} alt="" />
          </div>
        </div>

        

       

      </div>
    </section>
  );
}
export default Test;  