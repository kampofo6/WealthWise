import React from 'react'
import styles from '../style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStripe, faCcAmex, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'

const SocialProof = () => {
  return (
    <div className={`flex flex-col justify-center items-center  space-y-8 pb-8 `}>
      <div>

        <h3 className='SP-h3 text-xl'> Trusted by the world’s leading companies
        </h3>
      </div>
      <div className='flex flex-row justify-between  md:space-x-32 sm:space-x-24 xs:space-x-12 pb-8'>

        <div ><FontAwesomeIcon className='FA-i fa-4x ' icon={faStripe} /></div>
        <div> <FontAwesomeIcon className='FA-i fa-4x' icon={faCcAmex} /> </div>
        <div> <FontAwesomeIcon className='FA-i fa-4x' icon={faCcVisa} /></div>
        <div> <FontAwesomeIcon className='FA-i fa-4x' icon={faCcMastercard} /></div>

      </div>


    </div>
  )
}

export default SocialProof