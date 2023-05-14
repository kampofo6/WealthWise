import React from 'react'
import ww from '../assets/WW.svg'
import styles from '../style';

const Foot = () => {
    return (
        <footer className='h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20' >
            <div className='p-5'>
                <ul>
                    <img className='w-[48px]' src={ww} alt="" />
                    <p className='foot-h text-gray-500 text-sm '>Take Control of Your Finances</p>
                    {/* <div className='flex gap-6 pb-5'>

                    </div> */}
                </ul>

            </div>
            <div className='p-5'>
                <ul>
                    <p className='font-bold text-md pb-4 text-white'>
                        Community
                    </p>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer '>How it works?</li>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>Features</li>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>Blogs</li>
                </ul>

            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-white font-bold text-md pb-4'>Partner</p>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>How it works?</li>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>Features</li>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>Blogs</li>
                </ul>

            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-white font-bold text-md pb-4'>Useful Links</p>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>How it works?</li>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>Features</li>
                    <li className='foot-li text-gray-500 text-sm pb-2 font-semibold cursor-pointer'>Blogs</li>
                </ul>

            </div>

        </footer>

    )
}

export default Foot