import React from 'react';
import styles from '../style';
import logo from '../assets/WW.svg';
import deskman from '../assets/deskman.svg'
import { Link } from 'react-router-dom';








function Signin() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay time as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      {isLoading ? (

        <div className="flex flex-col items-center justify-center w-full h-full ">
          <span className="loader "></span>
          <p className='py-4 '>Loading...</p>
        </div>
      ) : (

        <>
          {/* p-8 w-1/2 flex flex-col justify-center items-center */}
          <div className="SI-form w-1/2 ">
            <img src={logo} alt="WW" className="w-[48px] cursor-pointer absolute top-0 left-0 m-4" />
            
            

            <div className='form-box flex flex-col space-y-8 ' >

              <div>
                <h1 className="SI-h1 text-3xl"> Sign in</h1>
              </div>

              <form action="" className='space-y-8 ' >

                <div className='space-y-8 '>
                  <div className='inputbox'>


                    <input type="email" placeholder='Email' className='w-full leading-8' />
                  </div>
                  <div className='inputbox'>


                    <input type="password" placeholder='Password' className='w-full leading-8' />
                  </div>

                </div >

                <div className='space-y-4 '>
                  <div className='flex  justify-center items-center'>
                    <button className='SI-button1'>Sign in</button>
                  </div>
                  <div className='flex flex-row  justify-center items-center'>
                    
                 
                    <button className='SI-button2'>Sign in with Google</button>
                  </div>

                </div>

              </form>
            </div>

          </div>

          
          <div className="SI-form2 w-1/2 flex flex-col justify-start items-end ">

            <div>
              <button className='SU-button rounded-full p-1.5 px-8 h-10  absolute top-0 right-0 m-4' >

                <Link to='/Signup'>
                Sign up
                </Link>
               
              </button>
            </div>
            <div className="pl-8">
              <img src={deskman} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Signin;
