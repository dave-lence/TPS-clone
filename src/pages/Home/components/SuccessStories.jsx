import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import accountancy from '../../../assets/images/accountancy.webp'
import jobskin from '../../../assets/images/jobskin.webp'
import stpauls from '../../../assets/images/stpauls.webp'
import {Link} from 'react-router-dom'

const SuccessStories = () => {
  return (
    <section className='bg-gradient-to-b from-[#f2f5fa] to-white py-[10rem]'>
      <div className="w-[90%] lg:w-4/5 mx-auto">
        <h4 className='text-gray-900 font-normal text-base'>Success Stories</h4>
        <h2 className="text-3xl lg:text-4xl text-black font-bold capitalize my-6">
          see how we improve business operations for clients
        </h2>
        <div className="mt-10 mb-10 flex flex-col space-y-10">
          {
            stories.map((item, index) => {
              const {image, name, title} = item;
              return (
                <div key={index} className="item group h-72 item md:h-80 lg:h-96 cursor-pointer">
                  <img src={image} alt={name} 
                    className="w-full h-full rounded-sm group-hover:scale-125 group-hover:duration-[4s]" 
                  />
                  
                  <div className='item-gradient'></div>

                  <div className='absolute w-11/12 top-6 left-6 md:top-10 md:left-14 md:w-3/5 z-20'>
                    <h5 className='text-primary100 text-lg font-medium'>{name}</h5>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white my-8 lg:leading-normal capitalize">{title}</h3>
                    <button className="p-2 md:p-3 rounded-full border-2 border-primary100 text-white">
                      <IoIosArrowForward size={24} />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Link to='/success-stories'>
        <button className="px-8 py-3 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-lg hover:bg-primary100 hover:text-white hover:transition-colors hover:duration-300">
          More success stories
        </button>
        </Link>
      </div>
    </section>
  )
}

export default SuccessStories

const stories = [
  {
    name: "St Paul's Cathedral",
    title: "Improving St Paul's Cathedral remote working capacity",
    image: stpauls,
  },
  {
    name: "Jobskin",
    title: "Prestige medical supplier implements full SAP solution",
    image: jobskin,
  },
  {
    name: "Bronsens",
    title: "Oxfordshire accountants rely on the cloud for protection of client financial data",
    image: accountancy,
  }
]