import React from 'react'
import cookie from '../../../assets/images/cookie.png';

const Cookies = ({ onclick, showCookies }) => {
  return (

    showCookies ? (
      <section id="cookies" className='left-0 top-80  right-0 fixed' >
        <div className='max-w-7xl mx-auto p-6 space-y-6'>
          <div className='flex flex-col h-70 p-10 mt-20 space-y-4 justify-center items-center bg-white rounded-sm shadow-lg'>
            <div className='flex flex-row mr-auto'>
              <div className='flex flex-row mr-auto'>
                <img src={cookie} alt="cookie" className='w-11 mr-4' />
                <h1 className='font-bold text-3xl'>Cookies</h1>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-y-0 md:space-x-3'>
              <div className='flex flex-col md:flex-row'>
                <p>This site uses cookies to help improve user experience. For these reasons, we may share data with our analytics partners.
                  By using CIS, you accept our use of cookies. <a href="https://" className='underline text-blue-500 text-lg font-semi-bold'>Find out more</a> </p>
                <p
                  onClick={onclick}
                  className="cursor-pointer mx-auto py-2 px-10  text-black text-lg bg-white rounded-full outline outline-blue-400 h-12 ml-2 mt-5 md:mt-0 hover:bg-sky-400 duration-200"
                >Agree</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
      :
      (
        <div></div>
      )
  )
}

export default Cookies


